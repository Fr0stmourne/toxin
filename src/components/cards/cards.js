import { RangeDatepicker, defaultOptions, inlineOptions } from '../range-datepicker/RangeDatePicker';
import Dropdown from '../dropdown/Dropdown';
import MaskedField from '../masked-text-field/MaskedField';

import '../room/room';
import '../find-room/find-room';
import '../registration/registration';
import '../booking/booking';
import '../login/login';
import './cards.scss';

$('.js-date').each((_, el) => new MaskedField(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker({ datepickerContainer: el, options: defaultOptions }));
$('.js-range-datepicker-inline').each(
  (_, el) => new RangeDatepicker({ datepickerContainer: el, options: inlineOptions }),
);

$('.js-room-slider').bxSlider();
