import { defaultOptions, addRangeDatepicker } from '../../components/form-elements/datepicker/datepicker';
import addDropdown from '../../components/form-elements/dropdown/dropdown';
import addSlider from '../../components/form-elements/range-slider/slider';

$(() => {
  addRangeDatepicker('#date-dropdown__start', '#date-dropdown__end', defaultOptions);
  addDropdown({
    ids: ['form-elements-1', 'form-elements-2', 'form-elements-3', 'room-1', 'room-2'],
  });

  addSlider({
    sliderSelector: '#form-elements-slider',
    min: 0,
    max: 15000,
    values: [5000, 10000],
    textSelector: '#amount',
  });
});
