import addDropdown from '../../components/form-elements/dropdown/dropdown';
import addSlider from '../../components/form-elements/range-slider/slider';

$(() => {
  addDropdown({
    ids: ['search-room-dropdown', 'search-room-dropdown-1'],
  });

  addSlider({
    sliderSelector: '#search-room-slider',
    min: 0,
    max: 15000,
    values: [5000, 10000],
  });
});
