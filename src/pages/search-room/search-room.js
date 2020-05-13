/* eslint-disable no-new */
import addDropdown from '../../components/dropdown/dropdown';
import Slider from '../../components/range-slider/slider';

$(() => {
  addDropdown({
    ids: ['search-room-dropdown', 'search-room-dropdown-1'],
  });

  new Slider({
    sliderSelector: '#search-room-slider',
    min: 0,
    max: 15000,
    values: [5000, 10000],
  });
});
