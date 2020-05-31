import DateFilter from '../../components/date-filter/DateFilter';
import Dropdown from '../../components/dropdown/Dropdown';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import Slider from '../../components/range-slider/Slider';
import '../../components/room/room';

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

$('.js-expandable').each((_, el) => new ExpandableList(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-date-filter-range .js-date-filter-input').each((_, el) => new DateFilter(el));

$('.js-room-slider').bxSlider();
