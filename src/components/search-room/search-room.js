import DateFilter from '../date-filter/DateFilter';
import Dropdown from '../dropdown/Dropdown';
import ExpandableList from '../expandable-list/ExpandableList';
import Slider from '../slider/Slider';

import '../room/room';
import '../toxin-header/toxin-header';
import '../toxin-footer/toxin-footer';
import '../checkbox/checkbox';
import '../rich-checkbox/rich-checkbox';
import '../pagination/pagination';
import '../filter/filter';
import '../rooms-grid/rooms-grid';
import './search-room.scss';

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

$('.js-expandable').each((_, el) => new ExpandableList(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-date-filter-range .date-filter__input').each((_, el) => new DateFilter(el));

$('.js-room-slider').bxSlider();
