import DateFilter from './DateFilter';

$('.js-date-filter-range .js-date-filter-input').each((_, el) => new DateFilter(el));
