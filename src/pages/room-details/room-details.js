import { RangeDatepicker, defaultOptions, inlineOptions } from '../../components/range-datepicker/RangeDatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import LikeButton from '../../components/like-button/LikeButton';

import '../../components/toxin-header/toxin-header';
import '../../components/toxin-footer/toxin-footer';
import '../../components/comment/comment';
import '../../components/booking/booking';
import '../../components/advantage/advantage';
import '../../components/bullet-list/bullet-list';
import '../../components/room-information/room-information';
import '../../components/room-impression/room-impression';
import '../../components/room-reviews/room-reviews';
import '../../components/room-restrictions/room-restrictions';
import '../../components/filter/filter';
import '../../components/rooms-grid/rooms-grid';
import './img/details-1.jpg';
import './img/details-2.jpg';
import './img/details-3.jpg';

$('.js-like-button').each((_, el) => new LikeButton(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker({ datepickerContainer: el, options: defaultOptions }));
$('.js-range-datepicker-inline').each((_, el) => new RangeDatepicker(el, inlineOptions));
