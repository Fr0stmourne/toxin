import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

import '../../vendors/datepicker/datepicker.scss';
import './range-datepicker.scss';

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
  constructor({ datepickerContainer, options }) {
    this.init({ datepickerContainer, options });
  }

  findElements() {
    this.$startInput = this.$container.find('.range-datepicker-start');
    this.$endInput = this.$container.find('.range-datepicker-end');
  }

  appendBtn(el) {
    $(el).append('<span class="datepicker--button datepicker-apply" data-action="today">применить</span>');
  }

  findButtonContainer() {
    this.$buttonContainers = $('.datepicker--buttons');
  }

  addApplyBtn() {
    this.$buttonContainers.each((_, buttonContainer) => {
      if (!$(buttonContainer).find('.datepicker-apply').length) {
        this.appendBtn(buttonContainer);
      }
    });
  }

  bindApplyListener(datepicker) {
    datepicker.$datepicker.find('.datepicker-apply').click(() => {
      datepicker.hide();
    });
  }

  init({ datepickerContainer, options }) {
    this.options = options;
    this.$container = $(datepickerContainer);
    this.findElements();

    const { $startInput, $endInput } = this;
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

    this.findButtonContainer();
    this.addApplyBtn();
  }
}
