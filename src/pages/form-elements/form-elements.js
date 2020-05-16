/* eslint-disable no-new */
import Dropdown from '../../components/dropdown/dropdown';
import Slider from '../../components/range-slider/slider';

$(() => {
  const ids = ['form-elements-1', 'form-elements-2', 'form-elements-3', 'room-1', 'room-2'];
  ids.forEach(id => new Dropdown(`#${id}`));

  new Slider({
    sliderSelector: '#form-elements-slider',
    min: 0,
    max: 15000,
    values: [5000, 10000],
  });
});
