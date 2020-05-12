const activeClass = 'like-btn--active';

$('.js-like-btn').click(e => {
  const currentNum = +$(e.target).text();
  $(e.target).text($(e.target).hasClass(activeClass) ? currentNum - 1 : currentNum + 1);
  $(e.target).toggleClass(activeClass);
});
