import { RangeDatepicker, defaultOptions, inlineOptions } from '../../components/datepicker/DatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import MaskedField from '../../components/masked-text-field/MaskedField';

$('.js-date').each((_, el) => new MaskedField(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker(el, defaultOptions));
$('.js-range-datepicker-inline').each((_, el) => new RangeDatepicker(el, inlineOptions));

$('.js-room-slider').bxSlider();
