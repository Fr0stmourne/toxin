import DateFilter from './date-filter';

$(() => {
  $('.js-date-filter-range .js-date-filter-input').each((idx, el) => new DateFilter(el));
});
