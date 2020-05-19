import { RangeDatepicker, defaultOptions, inlineOptions } from './datepicker';

$('.js-range-datepicker').each((idx, el) => new RangeDatepicker(el, defaultOptions));
$('.js-range-datepicker-inline').each((idx, el) => new RangeDatepicker(el, inlineOptions));
