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

  appendBtn(el) {
    $(el).append('<span class="datepicker--button js-datepicker-apply" data-action="today">применить</span>');
  }

  findBtnContainer() {
    this.$btnContainers = $('.datepicker--buttons');
  }

  addApplyBtn() {
    this.$btnContainers.each((index, btnContainer) => {
      if (!$(btnContainer).find('.js-datepicker-apply').length) {
        this.appendBtn(btnContainer);
      }
    });
  }

  onShow(datepicker) {
    datepicker.$datepicker.find('.js-datepicker-apply').click(() => {
      datepicker.hide();
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
      onShow: datepicker => this.onShow(datepicker),
    });

    this.findBtnContainer();
    this.addApplyBtn();
  }
}
