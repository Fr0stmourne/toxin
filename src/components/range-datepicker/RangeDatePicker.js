import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';
import '../../vendors/datepicker/datepicker.scss';

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

export class RangeDatepicker {
  constructor(datepickerContainer, options) {
    this.options = options;
    this.$container = $(datepickerContainer);
    this.findElements();
    this.init();
  }

  findElements() {
    this.$startInput = this.$container.find('.js-range-datepicker-start');
    this.$endInput = this.$container.find('.js-range-datepicker-end');
  }

  appendBtn(el) {
    $(el).append('<span class="datepicker--button js-datepicker-apply" data-action="today">применить</span>');
  }

  findBtnContainer() {
    this.$btnContainers = $('.datepicker--buttons');
  }

  addApplyBtn() {
    this.$btnContainers.each((_, btnContainer) => {
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
      minDate: new Date(),
      onSelect(date) {
        $startInput.val(date.split('-')[0]);
        $endInput.val(date.split('-')[1]);
      },
      onShow: datepicker => this.bindApplyListener(datepicker),
    });

    $endInput.datepicker({
      onShow() {
        const prevStartValue = $startInput.val();
        const prevEndValue = $endInput.val();

        $startInput
          .datepicker()
          .data('datepicker')
          .show();

        $endInput
          .datepicker()
          .data('datepicker')
          .hide();

        $endInput.val(prevEndValue);
        $startInput.val(prevStartValue);
      },
    });

    this.findBtnContainer();
    this.addApplyBtn();
  }
}
