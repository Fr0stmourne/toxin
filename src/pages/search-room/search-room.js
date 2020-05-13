/* eslint-disable no-new */
import Dropdown from '../../components/dropdown/dropdown';
import Slider from '../../components/range-slider/slider';

$(() => {
  const ids = ['search-room-dropdown', 'search-room-dropdown-1'];
  ids.forEach(id => new Dropdown(`#${id}`));

  new Slider({
    sliderSelector: '#search-room-slider',
    min: 0,
    max: 15000,
    values: [5000, 10000],
  });
});
