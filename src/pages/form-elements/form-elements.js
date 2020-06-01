import DateFilter from '../../components/date-filter/DateFilter';
import { RangeDatepicker, defaultOptions } from '../../components/range-datepicker/RangeDatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import LikeBtn from '../../components/like-btn/LikeBtn';
import MaskedField from '../../components/masked-text-field/MaskedField';
import Slider from '../../components/slider/Slider';

import '../../components/checkbox/checkbox.scss';
import '../../components/text-field/text-field.scss';
import '../../components/radio-btn/radio-btn.scss';
import '../../components/subscription/subscription.scss';
import '../../components/btn/btn.scss';
import '../../components/link/link.scss';
import '../../components/like-btn/like-btn.scss';
import '../../components/rate-btn/rate-btn.scss';
import '../../components/toggle-btn/toggle-btn.scss';
import '../../components/pagination/pagination.scss';
import '../../components/comment/comment.scss';
import '../../components/advantage/advantage.scss';
import '../../components/bullet-list/bullet-list.scss';
import '../../components/rich-checkbox/rich-checkbox.scss';
import '../../components/slider/slider.scss';
import '../../components/masked-text-field/masked-text-field.scss';
import '../../components/expandable-list/expandable-list.scss';
import '../../components/dropdown/dropdown.scss';
import '../../components/range-datepicker/range-datepicker.scss';
import '../../components/date-filter/date-filter.scss';
import '../../components/find-room/find-room.scss';
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
