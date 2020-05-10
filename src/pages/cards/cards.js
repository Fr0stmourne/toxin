import {
  addRangeDatepicker,
  defaultOptions,
  inlineOptions,
} from '../../components/form-elements/datepicker/datepicker';

addRangeDatepicker('#cards__start', '#cards__end', defaultOptions);
addRangeDatepicker('#cards__start-1', '#cards__end-1', defaultOptions);
addRangeDatepicker('#cards-date__start', '#cards-date__end', inlineOptions);
