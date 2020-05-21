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
    this.$container = $(datepickerContainer);
    this.findElements();
    this.init();
  }

  findElements() {
    this.$startInput = this.$container.find(startInputClass);
    this.$endInput = this.$container.find(endInputClass);
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

  bindApplyListener(datepicker) {
    datepicker.$datepicker.find('.js-datepicker-apply').click(() => {
      datepicker.hide();
    });
  }

  init() {
    const { options, $startInput, $endInput } = this;
    $startInput.datepicker({
      ...options,
      onSelect(date) {
        $startInput.val(date.split('-')[0]);
        $endInput.val(date.split('-')[1]);
      },
      onShow: datepicker => this.bindApplyListener(datepicker),
    });

    $endInput.datepicker({
      onShow() {
        $startInput
          .datepicker()
          .data('datepicker')
          .show();

        $endInput
          .datepicker()
          .data('datepicker')
          .hide();
      },
    });

    this.findBtnContainer();
    this.addApplyBtn();
  }
}
