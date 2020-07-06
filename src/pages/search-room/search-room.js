import DateFilter from '../../components/date-filter/DateFilter';
import Dropdown from '../../components/dropdown/Dropdown';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import Slider from '../../components/slider/Slider';

import '../../components/room/room';
import '../../components/toxin-header/toxin-header';
import '../../components/toxin-footer/toxin-footer';
import '../../components/checkbox/checkbox';
import '../../components/rich-checkbox/rich-checkbox';
import '../../components/pagination/pagination';
import '../../components/filter/filter';
import '../../components/rooms-grid/rooms-grid';

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

$('.js-expandable').each((_, el) => new ExpandableList(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-date-filter-range .date-filter__input').each((_, el) => new DateFilter(el));

$('.js-room-slider').bxSlider();
