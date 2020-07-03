import { RangeDatepicker, defaultOptions, inlineOptions } from '../../components/range-datepicker/RangeDatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import MaskedField from '../../components/masked-text-field/MaskedField';

import '../../components/room/room';
import '../../components/find-room/find-room';
import '../../components/registration/registration';
import '../../components/booking/booking';
import '../../components/login/login';

$('.js-date').each((_, el) => new MaskedField(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker({ datepickerContainer: el, options: defaultOptions }));
$('.js-range-datepicker-inline').each(
  (_, el) => new RangeDatepicker({ datepickerContainer: el, options: inlineOptions }),
);

$('.js-room-slider').bxSlider();
