import LikeBtn from './like-btn';

$(() => {
  $('.js-like-btn').each((idx, el) => new LikeBtn(el));
});
