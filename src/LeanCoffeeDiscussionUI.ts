import formatDuration from 'format-duration';

import { LeanCoffeeBase, LeanCoffeeBaseParams } from './LeanCoffeeBase';
import Trello from './@types/TrelloPowerUp';

const MESSAGES = {
  NONE: 'This card is not being discussed at the moment.',
  ENDED: 'The discussion on this card has ended.'
};

enum ThumbDirection {
  'UP' = 'UP',
  'DOWN' = 'DOWN',
  'MIDDLE' = 'MIDDLE'
}

class LeanCoffeeDiscussionUI extends LeanCoffeeBase {
  badges: HTMLElement;
  badgeElapsed: HTMLElement;
  badgeHeaderElapsed: HTMLElement;
  message: HTMLElement;
  voting: NodeListOf<HTMLElement>;
  intervalId: number;
  previousStatus: DiscussionStatus;

  constructor({ w }: LeanCoffeeBaseParams) {
    super({ w, t: w.TrelloPowerUp.iframe() });

    this.badges = this.w.document.querySelector('.badges');
    this.badgeElapsed = this.w.document.querySelector('.badge-elapsed');
    this.badgeHeaderElapsed = this.w.document.querySelector('.badge-header-elapsed');
    this.message = this.w.document.querySelector('.message');
    this.voting = this.w.document.querySelectorAll('.voting');
  }

  async init(): Trello.Promise<void> {
    this.monitorDiscussion();
    this.intervalId = this.w.setInterval(this.monitorDiscussion, 1000);
  }

  monitorDiscussion = async (): Trello.Promise<void> => {
    const discussionStatus = await this.cardStorage.getDiscussionStatus(this.t);
    const isOngoingOrPausedForThisCard = ['ONGOING', 'PAUSED'].includes(discussionStatus);

    if (!!discussionStatus && this.previousStatus === discussionStatus && !isOngoingOrPausedForThisCard) {
      return;
    }

    switch (discussionStatus) {
      case 'ENDED': {
        // when discussion ends, hide badge and display message
        this.toggleBadges(false);
        this.updateMessage(MESSAGES.ENDED);
        break;
      } case 'ONGOING': {
        // when discussion is ongoing, update badge (display ongoing and 1-sec res timer)
        if (this.previousStatus !== discussionStatus) {
          this.toggleVoting(false);
          this.toggleBadges(true);
          this.updateMessage('');

          this.updateStatusHeader('ONGOING');
        }

        this.updateElapsed('ONGOING');
        break;
      } case 'PAUSED': {
        // when discussion is paused, update badge (display elapsed and three buttons to deal with discussion)
        if (this.previousStatus !== discussionStatus) {
          this.updateMessage('');
          this.toggleVoting(true);
          this.toggleBadges(true);
          this.updateStatusHeader('PAUSED');
          this.updateElapsed('PAUSED');
        }

        this.updateThumbs();
        break;
      } default:
        this.toggleBadges(false);
        this.toggleVoting(false);
        this.updateMessage(MESSAGES.NONE);
        break;
    }

    this.previousStatus = discussionStatus;
  };

  updateElapsed = async (status: DiscussionStatus): Trello.Promise<void> => {
    if (status === 'ONGOING') {
      const startedAt = await this.boardStorage.getDiscussionStartedAt(this.t);
      const previousElapsed = await this.boardStorage.getDiscussionPreviousElapsed(this.t) || 0;
      const elapsed = startedAt ? Date.now() - startedAt : 0;

      this.badgeElapsed.classList.add(status.toLowerCase());
      this.badgeElapsed.classList.remove('paused');
      this.badgeElapsed.textContent = `Ongoing → ${formatDuration(elapsed + previousElapsed)}`;
    } else {
      const elapsed = await this.cardStorage.getDiscussionElapsed(this.t);

      this.badgeElapsed.classList.add(status.toLowerCase());
      this.badgeElapsed.classList.remove('ongoing');
      this.badgeElapsed.textContent = `Elapsed → ${formatDuration(elapsed)}`;
    }
  };

  updateStatusHeader = (status: DiscussionStatus): void => {
    if (status === 'PAUSED') {
      this.badgeHeaderElapsed.innerText = 'Should we keep discussing?';
    } else {
      this.badgeHeaderElapsed.innerText = 'Status';
    }
  };

  updateThumbs = async (): Trello.Promise<void> => {
    const savedThumbs = await this.cardStorage.getDiscussionThumbs(this.t) || {};
    const currentMember = this.t.getContext().member;
    const currentMemberThumb = savedThumbs[currentMember];

    Object.keys(ThumbDirection).forEach((thumbType) => {
      const countByThumbType = Object.keys(savedThumbs).filter(
        (memberId) => savedThumbs[memberId] === thumbType
      ).length;

      const thumbsBadge = this.w.document.querySelector(`.voting-${thumbType.toLowerCase()}`) as HTMLElement;
      thumbsBadge.innerText = countByThumbType.toString();

      if (thumbType === currentMemberThumb) {
        thumbsBadge.classList.add('own');
      } else {
        thumbsBadge.classList.remove('own');
      }
    });
  };

  handleThumbs = async (thumb: Thumb): Trello.Promise<void> => {
    const thumbs = await this.cardStorage.getDiscussionThumbs(this.t) || {};
    const currentMember = this.t.getContext().member;

    if (thumbs[currentMember] === thumb) {
      delete thumbs[currentMember];
    } else {
      thumbs[currentMember] = thumb;
    }

    this.cardStorage.saveDiscussionThumbs(this.t, thumbs);
  };

  toggleBadges = (visible) => {
    this.badges.style.display = visible ? 'grid' : 'none';
  };

  toggleVoting = (visible) => {
    this.voting.forEach((element) => {
      element.style.visibility = visible ? 'visible' : 'hidden';
    });
  };

  updateMessage = (message) => {
    this.message.innerText = message;
    this.message.style.display = 'block';
    this.t.sizeTo('body');
  };
}

export default LeanCoffeeDiscussionUI;
