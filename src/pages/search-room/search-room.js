import DateFilter from '../../components/date-filter/DateFilter';
import Dropdown from '../../components/dropdown/Dropdown';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import Slider from '../../components/slider/Slider';

import '../../components/room/room';
import '../../components/toxin-header/toxin-header';
import '../../components/toxin-footer/toxin-footer';
import '../../components/slider/slider.scss';
import '../../components/expandable-list/expandable-list.scss';
import '../../components/checkbox/checkbox.scss';
import '../../components/rich-checkbox/rich-checkbox.scss';
import '../../components/date-filter/date-filter.scss';
import '../../components/dropdown/dropdown.scss';
import '../../components/pagination/pagination.scss';
import '../../components/filter/filter.scss';
import '../../components/rooms-grid/rooms-grid.scss';

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
