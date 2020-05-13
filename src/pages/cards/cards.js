/* eslint-disable no-new */
import { RangeDatepicker, defaultOptions, inlineOptions } from '../../components/datepicker/datepicker';

$(() => {
  new RangeDatepicker('#cards__start', '#cards__end', defaultOptions);
  new RangeDatepicker('#cards__start-1', '#cards__end-1', defaultOptions);
});

new RangeDatepicker('#cards-date__start', '#cards-date__end', inlineOptions);
