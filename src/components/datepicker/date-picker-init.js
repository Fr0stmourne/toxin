import { RangeDatepicker, defaultOptions, inlineOptions } from './DatePicker';

$('.js-range-datepicker').each((idx, el) => new RangeDatepicker(el, defaultOptions));
$('.js-range-datepicker-inline').each((idx, el) => new RangeDatepicker(el, inlineOptions));
