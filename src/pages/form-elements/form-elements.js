import DateFilter from '../../components/date-filter/DateFilter';
import { RangeDatepicker, defaultOptions } from '../../components/range-datepicker/RangeDatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import LikeBtn from '../../components/like-btn/LikeBtn';
import MaskedField from '../../components/masked-text-field/MaskedField';
import Slider from '../../components/slider/Slider';

import '../../components/checkbox/checkbox';
import '../../components/text-field/text-field';
import '../../components/radio-btn/radio-btn';
import '../../components/subscription/subscription';
import '../../components/btn/btn';
import '../../components/link/link';
import '../../components/rate-btn/rate-btn';
import '../../components/toggle-btn/toggle-btn';
import '../../components/pagination/pagination';
import '../../components/comment/comment';
import '../../components/advantage/advantage';
import '../../components/bullet-list/bullet-list';
import '../../components/rich-checkbox/rich-checkbox';
import '../../components/find-room/find-room';
import './form-elements.scss';

$(() => {
  $('.js-slider').each(
    (_, el) =>
      new Slider({
        slider: el,
        min: 0,
        max: 15000,
        values: [5000, 10000],
      }),
  );
});

$('.js-date').each((_, el) => new MaskedField(el));

$('.js-like-btn').each((_, el) => new LikeBtn(el));

$('.js-expandable').each((_, el) => new ExpandableList(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker(el, defaultOptions));

$('.js-date-filter-range .js-date-filter-input').each((_, el) => new DateFilter(el));
