import Dropdown from './dropdown';

$(() => {
  $('.js-dropdown').each((idx, el) => new Dropdown(el));
});
