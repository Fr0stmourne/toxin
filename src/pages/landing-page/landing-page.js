import Dropdown from '../../components/dropdown/Dropdown';
import { RangeDatepicker, defaultOptions } from '../../components/range-datepicker/RangeDatePicker';

import '../../components/toxin-header/toxin-header';
import '../../components/toxin-footer/toxin-footer';
import '../../components/find-room/find-room';

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker({ datepickerContainer: el, options: defaultOptions }));
