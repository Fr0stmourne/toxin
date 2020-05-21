const activeClass = 'like-btn_active';

export default class LikeBtn {
  constructor(likeBtnElement) {
    this.$like = $(likeBtnElement);
    this.init();
  }

  bindListeners() {
    this.$like.click(e => {
      const currentNum = +$(e.target).text();
      $(e.target).text($(e.target).hasClass(activeClass) ? currentNum - 1 : currentNum + 1);
      $(e.target).toggleClass(activeClass);
    });
  }

  init() {
    this.bindListeners();
  }
}
