import Dropdown from '../../components/dropdown/Dropdown';
import { RangeDatepicker, defaultOptions } from '../../components/datepicker/DatePicker';

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker(el, defaultOptions));
