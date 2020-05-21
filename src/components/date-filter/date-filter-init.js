import DateFilter from './DateFilter';

$('.js-date-filter-range .js-date-filter-input').each((index, el) => new DateFilter(el));
