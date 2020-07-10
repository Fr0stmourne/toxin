import DateFilter from '../date-filter/DateFilter';
import { RangeDatepicker, defaultOptions } from '../range-datepicker/RangeDatePicker';
import Dropdown from '../dropdown/Dropdown';
import ExpandableList from '../expandable-list/ExpandableList';
import LikeButton from '../like-button/LikeButton';
import MaskedField from '../masked-text-field/MaskedField';
import Slider from '../slider/Slider';

import '../checkbox/checkbox';
import '../text-field/text-field';
import '../radio-button/radio-button';
import '../subscription/subscription';
import '../button/button';
import '../link/link';
import '../rate-button/rate-button';
import '../toggle-button/toggle-button';
import '../pagination/pagination';
import '../comment/comment';
import '../advantage/advantage';
import '../bullet-list/bullet-list';
import '../rich-checkbox/rich-checkbox';
import '../find-room/find-room';
import './form-elements.scss';

$(() => {
  $('.js-slider .slider__bar').each(
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

$('.js-date-filter-range .date-filter__input').each((_, el) => new DateFilter(el));
