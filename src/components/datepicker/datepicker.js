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
    this.options = options;

    this.findElements(datepickerContainer);
    this.init();
  }

  findElements(datepickerContainer) {
    this.container = $(datepickerContainer);
    this.startInput = this.container.find(startInputClass);
    this.endInput = this.container.find(endInputClass);
  }

  addApplyBtn() {
    const btnContainers = $('.datepicker--buttons');
    btnContainers.each((idx, btnContainer) => {
      if (!$(btnContainer).find('.datepicker--button[data-action="close"]').length) {
        $(btnContainer).append('<span class="datepicker--button" data-action="close">применить</span>');
      }
    });
  }

  init() {
    const { options, startInput, endInput } = this;
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
