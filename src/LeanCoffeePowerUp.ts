import BoardStorage from './storage/BoardStorage';
import CardStorage from './storage/CardStorage';
import ElapsedCardBadge from './badges/ElapsedCardBadge';
import ElapsedCardDetailBadge from './badges/ElapsedCardDetailBadge';
import VotingCardBadge from './badges/VotingCardBadge';
import VotingCardDetailBadge from './badges/VotingCardDetailBadge';
import Discussion from './utils/Discussion';
import Voting from './utils/Voting';
import UpdateChecker from './utils/UpdateChecker';
import { LeanCoffeeBase, LeanCoffeeBaseParams } from './LeanCoffeeBase';
import Trello from './@types/TrelloPowerUp';

interface LeanCoffeePowerUpParams extends LeanCoffeeBaseParams {
  baseUrl: string;
  maxDiscussionDuration: number;
}

class LeanCoffeePowerUp extends LeanCoffeeBase {
  t: Trello.TrelloPowerUp;
  baseUrl: string;
  discussion: Discussion;
  voting: Voting;
  elapsedCardBadge: ElapsedCardBadge;
  elapsedCardDetailBadge: ElapsedCardDetailBadge;
  votingCardBadge: VotingCardBadge;
  votingCardDetailBadge: VotingCardDetailBadge;
  updateChecker: UpdateChecker;

  constructor({ w, baseUrl, maxDiscussionDuration }: LeanCoffeePowerUpParams) {
    super({ w });
    this.baseUrl = baseUrl;

    this.discussion = new Discussion(this.w, this.baseUrl, maxDiscussionDuration);
    this.voting = new Voting(this.t);
    this.updateChecker = new UpdateChecker(this.boardStorage);

    this.elapsedCardBadge = new ElapsedCardBadge(this.discussion);
    this.elapsedCardDetailBadge = new ElapsedCardDetailBadge(this.discussion);
    this.votingCardBadge = new VotingCardBadge(this.baseUrl, this.voting);
    this.votingCardDetailBadge = new VotingCardDetailBadge(this.baseUrl, this.voting);
  }

  handleBoardButtons = async (t) => {
    if (!await this.updateChecker.hasBeenUpdated(t)) {
      return [];
    }

    return [{
      icon: {
        dark: `${this.baseUrl}/assets/moka_white.svg`,
        light: `${this.baseUrl}/assets/moka.svg`
      },
      text: 'Leaner Coffee update!',
      callback: this.updateChecker.showMenu
    }];
  };

  handleCardBackSection = async (t) => {
    const discussionStatus = await this.discussion.cardStorage.getDiscussionStatus(t);
    if (discussionStatus === undefined) { return null; }

    return {
      title: 'Discussion',
      icon: `${this.baseUrl}/assets/powerup/timer.svg`,
      content: {
        type: 'iframe',
        url: t.signUrl(`${this.baseUrl}/discussion-ui.html`),
        height: 64
      }
    };
  };

  handleCardBadges = async (t) => {
    const badges = [
      await this.elapsedCardBadge.render(t),
      await this.votingCardBadge.render(t)
    ];

    return badges.filter((badge) => badge);
  };

  handleCardButtons = async (t) => [{
    icon: `${this.baseUrl}/assets/powerup/timer.svg`,
    text: await this.getButtonLabel(t),
    callback: this.handleDiscussion
  }, {
    icon: `${this.baseUrl}/assets/powerup/heart.svg`,
    text: `Vote    ${await this.voting.hasCurrentMemberVoted(t) ? '☑' : '☐'}`,
    callback: this.handleVoting
  }];

  handleCardDetailBadges = async (t) => {
    const badges = [
      await this.elapsedCardDetailBadge.render(t),
      await this.votingCardDetailBadge.render(t)
    ];

    return badges.filter((badge) => badge);
  };

  handleListActions = () => [{
    text: 'Clear All Votes',
    callback: async (t) => {
      const result = await t.list('cards');
      result.cards.forEach(({ id }) => {
        this.cardStorage.deleteMultipleById(t, [CardStorage.VOTES], id);
      });
      t.closePopup();
    }
  }];

  handleListSorters = () => [{
    text: 'Most Votes',
    callback: async (t, opts) => {
      const countedCards: any[] = await this.Promise.all(opts.cards.map(async (card) => {
        const leanCoffeeVotes = await this.voting.countVotesByCard(t, card.id);
        return { leanCoffeeVotes, ...card };
      }));

      const sortedCards = countedCards.sort((cardA, cardB) => {
        if (cardA.leanCoffeeVotes < cardB.leanCoffeeVotes) { return 1; }
        if (cardB.leanCoffeeVotes < cardA.leanCoffeeVotes) { return -1; }
        return 0;
      });

      return {
        sortedIds: sortedCards.map((card) => card.id)
      };
    }
  }];

  handleEnable = (t) => {
    this.boardStorage.setPowerUpVersion(t, process.env.VERSION);
  };

  showSettings = (t) => t.popup({
    title: `Leaner Coffee v${process.env.VERSION}`,
    url: `${this.baseUrl}/settings.html`,
    height: 184
  });

  handleVoting = async (t) => {
    if (!await this.voting.canCurrentMemberVote(t)) {
      t.popup({
        title: 'Leaner Coffee',
        url: `${this.baseUrl}/too_many_votes.html`,
        args: {
          maxVotes: await this.voting.getMaxVotes(t)
        },
        height: 98
      });

      return;
    }

    const votes = await this.voting.getVotes(t) || {};
    const currentMember = await t.member('id', 'username', 'fullName', 'avatar');

    if (votes[currentMember.id]) {
      delete votes[currentMember.id];
    } else {
      votes[currentMember.id] = {
        username: currentMember.username,
        fullName: currentMember.fullName,
        avatar: currentMember.avatar // currently unused
      };
    }

    console.log(votes);
    this.cardStorage.saveVotes(t, votes);
  };

  handleDiscussion = async (t) => {
    if (await this.discussion.isOngoingOrPausedForAnotherCard(t)) {
      const boardStatus = await this.boardStorage.getDiscussionStatus(t);
      const cardId = await this.boardStorage.getDiscussionCardId(t);

      if (await this.discussion.hasNotBeenArchived(t, cardId)) {
        const allCards = await t.cards('id', 'name');
        const cardBeingDiscussed = allCards.find((card) => card.id === cardId);

        t.popup({
          title: 'Leaner Coffee',
          url: `${this.baseUrl}/ongoing_or_paused.html`,
          args: {
            currentCardBeingDiscussed: cardBeingDiscussed.name,
            currentDiscussionStatus: boardStatus
          },
          height: 120
        });

        return;
      }

      // eslint-disable-next-line no-console
      console.warn(`Card with id ${cardId} not found in current board, most likely archived. Cleaning up.`);

      await this.boardStorage.deleteMultiple(t, [
        BoardStorage.DISCUSSION_STATUS,
        BoardStorage.DISCUSSION_CARD_ID,
        BoardStorage.DISCUSSION_STARTED_AT,
        BoardStorage.DISCUSSION_PREVIOUS_ELAPSED,
        BoardStorage.DISCUSSION_INTERVAL_ID
      ]);
    }

    let items = [];

    switch (true) {
      case await this.discussion.isOngoingFor(t):
        items = [{
          text: '❙ ❙  Pause timer', // MEDIUM VERTICAL BAR + NARROW NO-BREAK SPACE
          callback: async (t2) => {
            this.discussion.pause(t2);
            t2.closePopup();
            await this.discussion.cardStorage.saveDiscussionButtonLabel(t2, 'Pausing ❙ ❙');
          }
        }, {
          text: '■ End discussion', // BLACK SQUARE
          callback: async (t2) => {
            this.discussion.end(t2);
            t2.closePopup();
            await this.discussion.cardStorage.saveDiscussionButtonLabel(t2, 'Stopping ■');
          }
        }];
        break;
      case await this.discussion.isPausedFor(t):
        items = [{
          text: '▶ Resume discussion', // BLACK RIGHT-POINTING TRIANGLE
          callback: async (t2) => {
            this.discussion.start(t2);
            t2.closePopup();
            await this.discussion.cardStorage.saveDiscussionButtonLabel(t2, 'Resuming ▶');
          }
        }, {
          text: '■ End discussion', // BLACK SQUARE
          callback: async (t2) => {
            this.discussion.end(t2);
            t2.closePopup();
            await this.discussion.cardStorage.saveDiscussionButtonLabel(t2, 'Stopping ■');
          }
        }];
        break;
      default:
        items = [{
          text: '▶ Start timer', // BLACK RIGHT-POINTING TRIANGLE
          callback: async (t2) => {
            this.discussion.start(t2);
            t2.closePopup();
            await this.discussion.cardStorage.saveDiscussionButtonLabel(t2, 'Starting ▶');
          }
        }];
    }

    t.popup({
      title: 'Leaner Coffee',
      items
    });
  };

  getButtonLabel = async (t) => {
    let label = await this.discussion.cardStorage.getDiscussionButtonLabel(t);

    if (label) {
      setTimeout(() => {
        this.discussion.cardStorage.saveDiscussionButtonLabel(t);
      }, 2000);
    }

    label = label || 'Discussion';

    return label;
  };

  start() {
    this.t.initialize({
      'board-buttons': this.handleBoardButtons,
      'card-back-section': this.handleCardBackSection,
      'card-badges': this.handleCardBadges,
      'card-buttons': this.handleCardButtons,
      'card-detail-badges': this.handleCardDetailBadges,
      'list-actions': this.handleListActions,
      'list-sorters': this.handleListSorters,
      'on-enable': this.handleEnable,
      'show-settings': this.showSettings
    });
  }
}

export default LeanCoffeePowerUp;
