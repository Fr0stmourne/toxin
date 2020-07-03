import DateFilter from '../../components/date-filter/DateFilter';
import { RangeDatepicker, defaultOptions } from '../../components/range-datepicker/RangeDatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import LikeButton from '../../components/like-button/LikeButton';
import MaskedField from '../../components/masked-text-field/MaskedField';
import Slider from '../../components/slider/Slider';

import '../../components/checkbox/checkbox';
import '../../components/text-field/text-field';
import '../../components/radio-button/radio-button';
import '../../components/subscription/subscription';
import '../../components/button/button';
import '../../components/link/link';
import '../../components/rate-button/rate-button';
import '../../components/toggle-button/toggle-button';
import '../../components/pagination/pagination';
import '../../components/comment/comment';
import '../../components/advantage/advantage';
import '../../components/bullet-list/bullet-list';
import '../../components/rich-checkbox/rich-checkbox';
import '../../components/find-room/find-room';
import './form-elements.scss';

$(() => {
  $('.js-slider .slider-bar').each(
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

$('.js-like-button').each((_, el) => new LikeButton(el));

$('.js-expandable').each((_, el) => new ExpandableList(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker({ datepickerContainer: el, options: defaultOptions }));

$('.js-date-filter-range .date-filter-input').each((_, el) => new DateFilter(el));
