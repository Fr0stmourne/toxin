// import DateFilter from '../../components/date-filter/DateFilter';
// import { RangeDatepicker, defaultOptions, inlineOptions } from '../../components/datepicker/DatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import LikeBtn from '../../components/like-btn/LikeBtn';
import MaskedField from '../../components/masked-text-field/MaskedField';
import Slider from '../../components/range-slider/Slider';

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

// $('.js-range-datepicker').each((_, el) => new RangeDatepicker(el, defaultOptions));
// $('.js-range-datepicker-inline').each((_, el) => new RangeDatepicker(el, inlineOptions));

// $('.js-date-filter-range .js-date-filter-input').each((_, el) => new DateFilter(el));
