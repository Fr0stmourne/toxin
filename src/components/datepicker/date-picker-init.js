import { RangeDatepicker, defaultOptions, inlineOptions } from './DatePicker';

$('.js-range-datepicker').each((_, el) => new RangeDatepicker(el, defaultOptions));
$('.js-range-datepicker-inline').each((_, el) => new RangeDatepicker(el, inlineOptions));
