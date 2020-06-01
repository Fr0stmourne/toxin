import './like-btn.scss';
import './img/like-favorite.svg';
import './img/like-favorite-border.svg';

const ACTIVE_CLASS = 'like-btn_active';

export default class LikeBtn {
  constructor(likeBtnElement) {
    this.$like = $(likeBtnElement);
    this.init();
  }

  bindListeners() {
    this.$like.click(e => {
      const currentNum = +$(e.target).text();
      $(e.target).text($(e.target).hasClass(ACTIVE_CLASS) ? currentNum - 1 : currentNum + 1);
      $(e.target).toggleClass(ACTIVE_CLASS);
    });
  }

  init() {
    this.bindListeners();
  }
}
