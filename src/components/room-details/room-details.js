import { RangeDatepicker, defaultOptions, inlineOptions } from '../range-datepicker/RangeDatePicker';
import Dropdown from '../dropdown/Dropdown';
import LikeButton from '../like-button/LikeButton';

import '../toxin-header/toxin-header';
import '../toxin-footer/toxin-footer';
import '../comment/comment';
import '../booking/booking';
import '../advantage/advantage';
import '../bullet-list/bullet-list';
import '../room-information/room-information';
import '../room-impression/room-impression';
import '../room-reviews/room-reviews';
import '../room-restrictions/room-restrictions';
import '../filter/filter';
import '../rooms-grid/rooms-grid';
import './img/details-1.jpg';
import './img/details-2.jpg';
import './img/details-3.jpg';
import './room-details.scss';

$('.js-like-button').each((_, el) => new LikeButton(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker({ datepickerContainer: el, options: defaultOptions }));
$('.js-range-datepicker-inline').each((_, el) => new RangeDatepicker(el, inlineOptions));
