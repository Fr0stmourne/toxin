const activeClass = 'like-btn_active';

export default class LikeBtn {
  constructor(LikeBtnElement) {
    this.like = $(LikeBtnElement);

    this.init();
  }

  init() {
    this.like.click(e => {
      const currentNum = +$(e.target).text();
      $(e.target).text($(e.target).hasClass(activeClass) ? currentNum - 1 : currentNum + 1);
      $(e.target).toggleClass(activeClass);
    });
  }
}
