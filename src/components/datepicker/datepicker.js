import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

export const defaultOptions = {
  navTitles: {
    days: 'MM yyyy',
  },
  clearButton: true,
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

  addApplyBtn() {
    const btnContainer = $('.datepicker--buttons');
    if (btnContainer.children().length === 1) {
      btnContainer.append('<span class="datepicker--button" data-action="close">применить</span>');
    }
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
      onShow: dp => {
        dp.$datepicker.find('.datepicker--button[data-action="close"]').click(() => {
          dp.hide();
        });
      },
    });

    this.addApplyBtn();
  }
}
