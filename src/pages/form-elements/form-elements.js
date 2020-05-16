/* eslint-disable no-new */
import Slider from '../../components/range-slider/slider';

$(() => {
  new Slider({
    sliderSelector: '#form-elements-slider',
    min: 0,
    max: 15000,
    values: [5000, 10000],
  });
});
