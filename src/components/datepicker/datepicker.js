import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

export const defaultOptions = {
  navTitles: {
    days: 'MM yyyy',
  },
};

export const inlineOptions = {
  inline: true,
  clearButton: true,
  navTitles: {
    days: 'MM yyyy',
  },
};

const startInputClass = '.js-range-datepicker-start';
const endInputClass = '.js-range-datepicker-end';

export class RangeDatepicker {
  constructor(datepickerContainer, options) {
    this.container = $(datepickerContainer);
    this.options = options;

    this.init();
  }

  init() {
    const startInput = this.container.find(startInputClass);
    const endInput = this.container.find(endInputClass);
    const { options } = this;
    startInput.datepicker({
      ...options,
      onSelect(fd) {
        startInput.val(fd.split('-')[0]);
        endInput.val(fd.split('-')[1]);
      },
    });
  }
}
