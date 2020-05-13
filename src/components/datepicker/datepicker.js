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
  constructor(startSelector, endSelector, options) {
    this.startSelector = startSelector;
    this.endSelector = endSelector;
    this.options = options;

    this.init();
  }

  init() {
    const startEl = $(this.startSelector);
    const endEl = $(this.endSelector);
    const { options } = this;
    startEl.datepicker({
      ...options,
      onSelect(fd) {
        startEl.val(fd.split('-')[0]);
        endEl.val(fd.split('-')[1]);
      },
    });
  }
}
