import { RangeDatepicker, defaultOptions, inlineOptions } from './DatePicker';

$('.js-range-datepicker').each((index, el) => new RangeDatepicker(el, defaultOptions));
$('.js-range-datepicker-inline').each((index, el) => new RangeDatepicker(el, inlineOptions));
