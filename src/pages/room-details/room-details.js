import { RangeDatepicker, defaultOptions, inlineOptions } from '../../components/range-datepicker/RangeDatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import LikeBtn from '../../components/like-btn/LikeBtn';

import '../../components/toxin-header/toxin-header';
import '../../components/toxin-footer/toxin-footer';
import '../../components/comment/comment';
import '../../components/booking/booking';
import '../../components/advantage/advantage';
import '../../components/bullet-list/bullet-list';
import '../../components/room-info/room-info';
import '../../components/room-impression/room-impression';
import '../../components/room-reviews/room-reviews';
import '../../components/room-restrictions/room-restrictions';
import '../../components/filter/filter';
import '../../components/rooms-grid/rooms-grid';
import './img/details-1.jpg';
import './img/details-2.jpg';
import './img/details-3.jpg';

$('.js-like-btn').each((_, el) => new LikeBtn(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker(el, defaultOptions));
$('.js-range-datepicker-inline').each((_, el) => new RangeDatepicker(el, inlineOptions));
