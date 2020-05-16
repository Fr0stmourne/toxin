import MaskField from './masked-field';

$(() => {
  $('.js-date').each((idx, el) => new MaskField(el));
});
