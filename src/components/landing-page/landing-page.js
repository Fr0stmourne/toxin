import Dropdown from '../dropdown/Dropdown';
import { RangeDatepicker, defaultOptions } from '../range-datepicker/RangeDatePicker';

import '../toxin-header/toxin-header';
import '../toxin-footer/toxin-footer';
import '../find-room/find-room';
import './landing-page.scss';

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker({ datepickerContainer: el, options: defaultOptions }));
