import DateFilter from './DateFilter';

$('.js-date-filter-range .js-date-filter-input').each((idx, el) => new DateFilter(el));
