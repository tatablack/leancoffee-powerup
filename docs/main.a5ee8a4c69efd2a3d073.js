!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="3177845424933048caec")}({"124e5333d240f9e9ac9d":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o});var r={BOARD:"board",CARD:"card",MEMBER:"member",ORGANIZATION:"organization"},i={SHARED:"shared",PRIVATE:"private"},o={BLUE:"blue",GREEN:"green",ORANGE:"orange",RED:"red",YELLOW:"yellow",PURPLE:"purple",PINK:"pink",SKY:"sky",LIME:"lime",LIGHTGRAY:"light-gray"}},"1b6695f247aa876d8126":function(e,t,n){"use strict";e.exports=function(e){if("number"!=typeof e)throw new TypeError("Expected a number");var t=e>0?Math.floor:Math.ceil;return{days:t(e/864e5),hours:t(e/36e5)%24,minutes:t(e/6e4)%60,seconds:t(e/1e3)%60,milliseconds:t(e)%1e3}}},"3177845424933048caec":function(e,t,n){"use strict";n.r(t);var r=n("3454881a11013d365bc6"),i=n("913e7ad1aff3f4c0d6e7"),o=n("44d52eca4306d26d5eb8"),a=n.n(o),u=n("124e5333d240f9e9ac9d");function s(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)})}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"EMPTY_TITLE",""),f(this,"getText",function(){var e=c(function*(e,t){return a()(t)});return function(t,n){return e.apply(this,arguments)}}()),f(this,"getColor",function(){var e=c(function*(e){return(yield n.discussion.isOngoingFor(e))?u.a.ORANGE:(yield n.discussion.isPausedFor(e))?u.a.YELLOW:u.a.LIGHTGRAY});return function(t){return e.apply(this,arguments)}}()),this.discussion=t,this.render=this.render.bind(this)}var t,n,r;return t=e,(n=[{key:"getTitle",value:function(){return this.EMPTY_TITLE}},{key:"render",value:function(){var e=c(function*(e){var t=yield this.discussion.getElapsed(e);return t?{title:this.getTitle(e),text:yield this.getText(e,t),color:yield this.getColor(e)}:null});return function(t){return e.apply(this,arguments)}}()}])&&l(t.prototype,n),r&&l(t,r),e}(),p=n("e33b6889d58ae4e02528");function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return r=this,i=(e=g(t)).call.apply(e,[this].concat(a)),n=!i||"object"!==h(i)&&"function"!=typeof i?v(r):i,D(v(n),"getTitle",function(){return"Discussion time"}),D(v(n),"render",function(){var e,r=(e=function*(e){return(yield n.discussion.cardStorage.getDiscussionStatus(e))!==p.a.ENDED?null:b(g(t.prototype),"render",v(n)).call(v(n),e)},function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){y(o,r,i,a,u,"next",e)}function u(e){y(o,r,i,a,u,"throw",e)}a(void 0)})});return function(e){return r.apply(this,arguments)}}()),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,d),t}();function O(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function w(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){O(o,r,i,a,u,"next",e)}function u(e){O(o,r,i,a,u,"throw",e)}a(void 0)})}}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r,i,o,a,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,o="getVoters",r=w(function*(e){var t=(yield u.voting.getVotes(e))||{};return Object.values(t).reduce(function(e,t){return t.username&&e.push({text:"".concat(t.username," (").concat(t.fullName,")")}),e},[])}),a=function(e){return r.apply(this,arguments)},o in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,this.baseUrl=t,this.voting=n,this.render=this.render.bind(this)}var t,n,r;return t=e,(n=[{key:"render",value:function(){var e=w(function*(e){var t=yield this.getVoters(e);if(!t.length)return null;var n=yield this.voting.hasCurrentMemberVoted(e);return{text:t.length,color:n?"blue":null,icon:"".concat(this.baseUrl,"/assets/powerup/").concat(n?"heart_white.svg":"heart.svg")}});return function(t){return e.apply(this,arguments)}}()}])&&I(t.prototype,n),r&&I(t,r),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function P(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){_(o,r,i,a,u,"next",e)}function u(e){_(o,r,i,a,u,"throw",e)}a(void 0)})}}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t,n){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return r=this,i=(e=A(t)).call.apply(e,[this].concat(a)),n=!i||"object"!==C(i)&&"function"!=typeof i?T(r):i,k(T(n),"showVoters",function(){var e=P(function*(e){var t=yield n.getVoters(e);t.length&&e.popup({title:"Voters",items:t})});return function(t){return e.apply(this,arguments)}}()),k(T(n),"render",function(){var e=P(function*(e){var r=yield N(A(t.prototype),"render",T(n)).call(T(n),e);return r&&(r.title="Voters",delete r.icon,r.callback=n.showVoters),r});return function(t){return e.apply(this,arguments)}}()),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,E),t}();function B(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function V(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){B(o,r,i,a,u,"next",e)}function u(e){B(o,r,i,a,u,"throw",e)}a(void 0)})}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"hasCurrentMemberVoted",(c=V(function*(e){var t=yield n.cardStorage.read(e,i.a.VOTES);return!!t&&!!t[e.getContext().member]}),function(e){return c.apply(this,arguments)})),x(this,"getVotes",(s=V(function*(e){return n.cardStorage.read(e,i.a.VOTES)}),function(e){return s.apply(this,arguments)})),x(this,"countVotesByCard",(u=V(function*(e,t){var r=yield n.cardStorage.readById(e,i.a.VOTES,t);return r?Object.keys(r).filter(function(e){return r[e]}).length:0}),function(e,t){return u.apply(this,arguments)})),x(this,"getMaxVotes",(a=V(function*(e){var t=yield e.list("cards");return Math.ceil(t.cards.length/3)}),function(e){return a.apply(this,arguments)})),x(this,"canCurrentMemberVote",(o=V(function*(e){if(yield n.hasCurrentMemberVoted(e))return!0;var t=(yield e.list("cards")).cards.map(function(e){return e.id});return(yield n.countVotesByMember(e,t))<(yield n.getMaxVotes(e))}),function(e){return o.apply(this,arguments)})),x(this,"countVotesByMember",(r=V(function*(e,t){return(yield n.promise.all(t.map((r=V(function*(t){var r=yield n.cardStorage.readById(e,i.a.VOTES,t);return r?!!r[e.getContext().member]:0}),function(e){return r.apply(this,arguments)})))).reduce(function(e,t){return e+t},0);var r}),function(e,t){return r.apply(this,arguments)})),this.cardStorage=new i.a,this.promise=t.Promise;var r;var o;var a;var u;var s;var c};function R(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function M(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){R(o,r,i,a,u,"next",e)}function u(e){R(o,r,i,a,u,"throw",e)}a(void 0)})}}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H={hostname:"https://leaner-coffee.tatablack.net",defaultDuration:3e5},F=H.hostname,Y=H.port;new(function(){function e(t){var n=this,o=t.window,a=t.TrelloPowerUp,u=t.baseUrl,s=t.maxDiscussionDuration;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),$(this,"handleCardBackSection",function(){var e=M(function*(e){return void 0===(yield n.discussion.cardStorage.getDiscussionStatus(e))?null:{title:"Discussion",icon:"".concat(n.baseUrl,"/assets/powerup/timer.svg"),content:{type:"iframe",url:e.signUrl("".concat(n.baseUrl,"/discussion-ui.html")),height:64}}});return function(t){return e.apply(this,arguments)}}()),$(this,"handleCardBadges",function(){var e=M(function*(e){return[yield n.elapsedCardBadge.render(e),yield n.votingCardBadge.render(e)].filter(function(e){return e})});return function(t){return e.apply(this,arguments)}}()),$(this,"handleCardButtons",function(){var e=M(function*(e){return[{icon:"".concat(n.baseUrl,"/assets/powerup/timer.svg"),text:yield n.getButtonLabel(e),callback:n.handleDiscussion},{icon:"".concat(n.baseUrl,"/assets/powerup/heart.svg"),text:"Vote    ".concat((yield n.voting.hasCurrentMemberVoted(e))?"☑":"☐"),callback:n.handleVoting}]});return function(t){return e.apply(this,arguments)}}()),$(this,"handleCardDetailBadges",function(){var e=M(function*(e){return[yield n.elapsedCardDetailBadge.render(e),yield n.votingCardDetailBadge.render(e)].filter(function(e){return e})});return function(t){return e.apply(this,arguments)}}()),$(this,"handleListSorters",function(){return[{text:"Most Votes",callback:function(){var e=M(function*(e,t){return{sortedIds:(yield n.trello.Promise.all(t.cards.map(function(){var t=M(function*(t){var r=yield n.voting.countVotesByCard(e,t.id);return Object.assign({leanCoffeeVotes:r},t)});return function(e){return t.apply(this,arguments)}}()))).sort(function(e,t){return e.leanCoffeeVotes<t.leanCoffeeVotes?1:t.leanCoffeeVotes<e.leanCoffeeVotes?-1:0}).map(function(e){return e.id})}});return function(t,n){return e.apply(this,arguments)}}()}]}),$(this,"showSettings",function(e){return e.popup({title:"Leaner Coffee v".concat("0.6.2"),url:"".concat(n.baseUrl,"/settings.html"),height:184})}),$(this,"handleVoting",function(){var e=M(function*(e){if(yield n.voting.canCurrentMemberVote(e)){var t=(yield n.voting.getVotes(e))||{},r=yield e.member("id","username","fullName","avatar");t[r.id]?delete t[r.id]:t[r.id]={username:r.username,fullName:r.fullName,avatar:r.avatar},n.cardStorage.saveVotes(e,t)}else e.popup({title:"Leaner Coffee",url:"".concat(n.baseUrl,"/too_many_votes.html"),args:{maxVotes:yield n.voting.getMaxVotes(e)},height:98})});return function(t){return e.apply(this,arguments)}}()),$(this,"handleDiscussion",function(){var e=M(function*(e){if(yield n.discussion.isOngoingOrPausedForAnotherCard(e)){var t=yield n.boardStorage.getDiscussionStatus(e),i=yield n.boardStorage.getDiscussionCardId(e);if(yield n.discussion.hasNotBeenArchived(e,i)){var o=(yield e.cards("id","name")).find(function(e){return e.id===i});return void e.popup({title:"Leaner Coffee",url:"".concat(n.baseUrl,"/ongoing_or_paused.html"),args:{currentCardBeingDiscussed:o.name,currentDiscussionStatus:t},height:120})}console.warn("Card with id ".concat(i," not found in current board, most likely archived. Cleaning up.")),yield n.boardStorage.deleteMultiple(e,[r.a.DISCUSSION_STATUS,r.a.DISCUSSION_CARD_ID,r.a.DISCUSSION_STARTED_AT,r.a.DISCUSSION_PREVIOUS_ELAPSED,r.a.DISCUSSION_INTERVAL_ID])}var a=[];switch(!0){case yield n.discussion.isOngoingFor(e):a=[{text:"❙ ❙  Pause timer",callback:function(){var e=M(function*(e){n.discussion.pause(e),e.closePopup(),yield n.discussion.cardStorage.saveDiscussionButtonLabel(e,"Pausing ❙ ❙")});return function(t){return e.apply(this,arguments)}}()},{text:"■ End discussion",callback:function(){var e=M(function*(e){n.discussion.end(e),e.closePopup(),yield n.discussion.cardStorage.saveDiscussionButtonLabel(e,"Stopping ■")});return function(t){return e.apply(this,arguments)}}()}];break;case yield n.discussion.isPausedFor(e):a=[{text:"▶ Resume discussion",callback:function(){var e=M(function*(e){n.discussion.start(e),e.closePopup(),yield n.discussion.cardStorage.saveDiscussionButtonLabel(e,"Resuming ▶")});return function(t){return e.apply(this,arguments)}}()},{text:"■ End discussion",callback:function(){var e=M(function*(e){n.discussion.end(e),e.closePopup(),yield n.discussion.cardStorage.saveDiscussionButtonLabel(e,"Stopping ■")});return function(t){return e.apply(this,arguments)}}()}];break;default:a=[{text:"▶ Start timer",callback:function(){var e=M(function*(e){n.discussion.start(e),e.closePopup(),yield n.discussion.cardStorage.saveDiscussionButtonLabel(e,"Starting ▶")});return function(t){return e.apply(this,arguments)}}()}]}e.popup({title:"Leaner Coffee",items:a})});return function(t){return e.apply(this,arguments)}}()),$(this,"getButtonLabel",function(){var e=M(function*(e){var t=yield n.discussion.cardStorage.getDiscussionButtonLabel(e);return t&&setTimeout(function(){n.discussion.cardStorage.saveDiscussionButtonLabel(e)},2e3),t=t||"Discussion"});return function(t){return e.apply(this,arguments)}}()),this.w=o,this.trello=a,this.baseUrl=u,this.boardStorage=new r.a,this.cardStorage=new i.a,this.discussion=new p.c(this.w,this.baseUrl,s),this.voting=new L(this.trello),this.elapsedCardBadge=new d(this.discussion),this.elapsedCardDetailBadge=new m(this.discussion),this.votingCardBadge=new E(this.baseUrl,this.voting),this.votingCardDetailBadge=new j(this.baseUrl,this.voting)}var t,n,o;return t=e,(n=[{key:"start",value:function(){this.trello.initialize({"card-back-section":this.handleCardBackSection,"card-badges":this.handleCardBadges,"card-buttons":this.handleCardButtons,"card-detail-badges":this.handleCardDetailBadges,"list-sorters":this.handleListSorters,"show-settings":this.showSettings})}}])&&G(t.prototype,n),o&&G(t,o),e}())({window:window,TrelloPowerUp:window.TrelloPowerUp,baseUrl:"".concat(F).concat(Y?":"+Y:""),maxDiscussionDuration:3e5}).start()},"3454881a11013d365bc6":function(e,t,n){"use strict";var r=n("124e5333d240f9e9ac9d"),i=n("a659833de475285b18b3");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).call(this,r.b.BOARD,r.c.SHARED))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i["a"]),n=t,(o=[{key:"getDiscussionStatus",value:function(e){return this.read(e,t.DISCUSSION_STATUS)}},{key:"getDiscussionCardId",value:function(e){return this.read(e,t.DISCUSSION_CARD_ID)}},{key:"getDiscussionStartedAt",value:function(e){return this.read(e,t.DISCUSSION_STARTED_AT)}},{key:"getDiscussionPreviousElapsed",value:function(e){return this.read(e,t.DISCUSSION_PREVIOUS_ELAPSED)}},{key:"getDiscussionIntervalId",value:function(e){return this.read(e,t.DISCUSSION_INTERVAL_ID)}}])&&a(n.prototype,o),l&&a(n,l),t}();l(f,"DISCUSSION_STATUS","leancoffeeDiscussionStatus"),l(f,"DISCUSSION_CARD_ID","leancoffeeDiscussionCardId"),l(f,"DISCUSSION_STARTED_AT","leancoffeeDiscussionStartedAt"),l(f,"DISCUSSION_PREVIOUS_ELAPSED","leancoffeeDiscussionPreviousElapsed"),l(f,"DISCUSSION_INTERVAL_ID","leancoffeeDiscussionIntervalId"),t.a=f},"44d52eca4306d26d5eb8":function(e,t,n){const r=n("1b6695f247aa876d8126"),i=n("e3096d48ecabaf9e4101");e.exports=(e=>{const t=e<0?-e:e,n=e<=-1e3?"-":"";let{days:o,hours:a,minutes:u,seconds:s}=r(t);return s=i(s),o?`${n}${o}:${i(a)}:${i(u)}:${s}`:a?`${n}${a}:${i(u)}:${s}`:`${n}${u}:${s}`})},"913e7ad1aff3f4c0d6e7":function(e,t,n){"use strict";var r=n("124e5333d240f9e9ac9d"),i=n("a659833de475285b18b3");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).call(this,r.b.CARD,r.c.SHARED))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i["a"]),n=t,(o=[{key:"getDiscussionStatus",value:function(e){return this.read(e,t.DISCUSSION_STATUS)}},{key:"getDiscussionElapsed",value:function(e){return this.read(e,t.DISCUSSION_ELAPSED)}},{key:"getDiscussionThumbs",value:function(e){return this.read(e,t.DISCUSSION_THUMBS)}},{key:"getDiscussionButtonLabel",value:function(e){return this.read(e,t.DISCUSSION_BUTTON_LABEL)}},{key:"saveDiscussionStatus",value:function(e,n){return this.write(e,t.DISCUSSION_STATUS,n)}},{key:"saveDiscussionElapsed",value:function(e,n){return this.write(e,t.DISCUSSION_ELAPSED,n)}},{key:"saveDiscussionThumbs",value:function(e,n){return this.write(e,t.DISCUSSION_THUMBS,n)}},{key:"saveVotes",value:function(e,n){return this.write(e,t.VOTES,n)}},{key:"saveDiscussionButtonLabel",value:function(e,n){return this.write(e,t.DISCUSSION_BUTTON_LABEL,n)}},{key:"deleteDiscussionThumbs",value:function(e){return this.delete(e,t.DISCUSSION_THUMBS)}}])&&a(n.prototype,o),l&&a(n,l),t}();l(f,"DISCUSSION_STATUS","leancoffeeDiscussionStatus"),l(f,"DISCUSSION_ELAPSED","leancoffeeDiscussionElapsed"),l(f,"DISCUSSION_THUMBS","leancoffeeDiscussionThumbs"),l(f,"VOTES","leancoffeeVotes"),l(f,"DISCUSSION_BUTTON_LABEL","discussionButtonLabel"),t.a=f},a659833de475285b18b3:function(e,t,n){"use strict";var r=n("124e5333d240f9e9ac9d");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.b.MEMBER,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.c.PRIVATE;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{scope:t,visibility:n})}var t,n,o;return t=e,(n=[{key:"readById",value:function(e,t,n){return e.get(n,this.visibility,t)}},{key:"read",value:function(e,t){return e.get(this.scope,this.visibility,t)}},{key:"write",value:function(e,t,n){return e.set(this.scope,this.visibility,t,n)}},{key:"writeMultiple",value:function(e,t){return e.set(this.scope,this.visibility,t)}},{key:"delete",value:function(e,t){return e.remove(this.scope,this.visibility,t)}},{key:"deleteMultiple",value:function(e,t){return e.remove(this.scope,this.visibility,t)}},{key:"deleteMultipleById",value:function(e,t,n){return e.remove(n,this.visibility,t)}}])&&i(t.prototype,n),o&&i(t,o),e}();t.a=o},e3096d48ecabaf9e4101:function(e,t,n){var r;!function(t){"use strict";function i(e,t){t=t||2;var n,r=Number(e)<0,i=e.toString();return r&&(i=i.slice(1)),n=t-i.length+1,(r?"-":"")+(i=new Array(n).join("0").concat(i))}void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}(this)},e33b6889d58ae4e02528:function(e,t,n){"use strict";var r=n("3454881a11013d365bc6"),i=n("913e7ad1aff3f4c0d6e7");function o(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o={ELAPSED:{audio:"assets/looking_down.mp3",text:"The timer has elapsed"}},(i="Types")in(r=this)?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,this.w=t,this.baseUrl=n}var t,n,r;return t=e,(n=[{key:"load",value:function(e){var t=this;return fetch(e).then(function(e){return e.arrayBuffer()}).then(function(e){return t.audioContext.decodeAudioData(e)}).then(function(e){var n=t.audioContext.createBufferSource();return n.buffer=e,n.connect(t.audioContext.destination),n})}},{key:"play",value:function(){var e,t=(e=function*(e){this.audioContext=this.audioContext||new(this.w.AudioContext||this.w.webkitAudioContext),(yield this.load("".concat(this.baseUrl,"/").concat(e.audio))).start()},function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function u(e){o(a,r,i,u,s,"next",e)}function s(e){o(a,r,i,u,s,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"open",value:function(e,t){new this.w.Notification(t,{body:e.text,icon:"".concat(this.baseUrl,"/assets/timer.png")})}},{key:"show",value:function(e,t){var n=this;"Notification"in this.w&&"denied"!==this.w.Notification.permission&&("granted"===this.w.Notification.permission?this.open(e,t):this.w.Notification.requestPermission(function(r){"granted"===r&&n.open(e,t)}))}}])&&a(t.prototype,n),r&&a(t,r),e}();function s(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)})}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return f}),n.d(t,"b",function(){return d});var f={ONGOING:"ONGOING",PAUSED:"PAUSED",ENDED:"ENDED"},d={UP:"UP",DOWN:"DOWN",MIDDLE:"MIDDLE"};t.c=function e(t,n,o){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"isOngoingOrPausedForAnotherCard",(g=c(function*(e){var t=yield a.boardStorage.getDiscussionStatus(e),n=yield a.boardStorage.getDiscussionCardId(e);return[f.ONGOING,f.PAUSED].includes(t)&&n!==e.getContext().card}),function(e){return g.apply(this,arguments)})),l(this,"hasNotBeenArchived",(b=c(function*(e,t){return!!(yield e.cards("id","name")).find(function(e){return e.id===t})}),function(e,t){return b.apply(this,arguments)})),l(this,"isOngoingFor",(S=c(function*(e){var t=yield a.cardStorage.getDiscussionStatus(e);return f.ONGOING===t}),function(e){return S.apply(this,arguments)})),l(this,"isPausedFor",(v=c(function*(e){var t=yield a.cardStorage.getDiscussionStatus(e);return f.PAUSED===t}),function(e){return v.apply(this,arguments)})),l(this,"getElapsed",function(e){return a.cardStorage.getDiscussionElapsed(e)}),l(this,"updateElapsed",(y=c(function*(e){var t=yield a.boardStorage.getDiscussionStartedAt(e);Date.now()-t>a.maxDiscussionDuration?(clearInterval(yield a.boardStorage.getDiscussionIntervalId(e)),a.pause(e,!0)):a.saveElapsed(e)}),function(e){return y.apply(this,arguments)})),l(this,"saveElapsed",(h=c(function*(e){var t=yield a.boardStorage.getDiscussionStartedAt(e),n=(yield a.boardStorage.getDiscussionPreviousElapsed(e))||0,r=t?Date.now()-t:0;a.cardStorage.saveDiscussionElapsed(e,r+n)}),function(e){return h.apply(this,arguments)})),l(this,"start",(p=c(function*(e){var t;a.boardStorage.writeMultiple(e,(l(t={},r.a.DISCUSSION_STATUS,f.ONGOING),l(t,r.a.DISCUSSION_CARD_ID,e.getContext().card),l(t,r.a.DISCUSSION_STARTED_AT,Date.now()),l(t,r.a.DISCUSSION_PREVIOUS_ELAPSED,yield a.getElapsed(e)),l(t,r.a.DISCUSSION_INTERVAL_ID,setInterval(a.updateElapsed,5e3,e)),t)),yield a.cardStorage.saveDiscussionStatus(e,f.ONGOING),yield a.cardStorage.deleteDiscussionThumbs(e)}),function(e){return p.apply(this,arguments)})),l(this,"pause",(d=c(function*(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=yield a.boardStorage.getDiscussionIntervalId(e),o=yield a.boardStorage.getDiscussionCardId(e),u=(yield e.cards("id","name")).find(function(e){return e.id===o}).name;clearInterval(i),a.cardStorage.saveDiscussionStatus(e,f.PAUSED),a.saveElapsed(e),a.boardStorage.writeMultiple(e,(l(t={},r.a.DISCUSSION_STATUS,f.PAUSED),l(t,r.a.DISCUSSION_STARTED_AT,null),l(t,r.a.DISCUSSION_PREVIOUS_ELAPSED,yield a.getElapsed(e)),l(t,r.a.DISCUSSION_INTERVAL_ID,null),t)),n&&(a.notifications.play(a.notifications.Types.ELAPSED),a.notifications.show(a.notifications.Types.ELAPSED,u))}),function(e){return d.apply(this,arguments)})),l(this,"end",(s=c(function*(e){var t=yield a.boardStorage.getDiscussionIntervalId(e);clearInterval(t);try{yield a.cardStorage.saveDiscussionStatus(e,f.ENDED),yield a.saveElapsed(e),yield a.cardStorage.deleteMultiple(e,[i.a.DISCUSSION_THUMBS]),yield a.boardStorage.deleteMultiple(e,[r.a.DISCUSSION_STATUS,r.a.DISCUSSION_CARD_ID,r.a.DISCUSSION_STARTED_AT,r.a.DISCUSSION_PREVIOUS_ELAPSED,r.a.DISCUSSION_INTERVAL_ID])}catch(e){throw new Error(e)}}),function(e){return s.apply(this,arguments)})),this.w=t,this.baseUrl=n,this.notifications=new u(this.w,this.baseUrl),this.maxDiscussionDuration=o,this.boardStorage=new r.a,this.cardStorage=new i.a;var s;var d;var p;var h;var y;var v;var S;var b;var g}}});
//# sourceMappingURL=main.a5ee8a4c69efd2a3d073.js.map