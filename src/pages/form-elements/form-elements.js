/* eslint-disable no-new */
import { defaultOptions, RangeDatepicker } from '../../components/datepicker/datepicker';
import addDropdown from '../../components/dropdown/dropdown';
import Slider from '../../components/range-slider/slider';

$(() => {
  new RangeDatepicker('#date-dropdown__start', '#date-dropdown__end', defaultOptions);
  addDropdown({
    ids: ['form-elements-1', 'form-elements-2', 'form-elements-3', 'room-1', 'room-2'],
  });

  new Slider({
    sliderSelector: '#form-elements-slider',
    min: 0,
    max: 15000,
    values: [5000, 10000],
  });
});
