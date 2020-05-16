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

export class RangeDatepicker {
  constructor(datepickerContainer, options) {
    this.container = $(datepickerContainer);
    this.options = options;

    this.init();
  }

  init() {
    console.log(this.container);

    const startInput = this.container.find('.js-range-datepicker-start');
    const endInput = this.container.find('.js-range-datepicker-end');
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
