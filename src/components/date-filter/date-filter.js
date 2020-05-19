import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

export default class DateFilter {
  constructor(dateFilterElement) {
    this.container = $(dateFilterElement);
    this.btnContainer = $('.datepicker--buttons');

    this.init();
  }

  addCloseButton() {
    if (this.btnContainer.children().length === 1) {
      this.btnContainer.append('<span class="datepicker--button" data-action="close">применить</span>');
    }
  }

  init() {
    this.container.datepicker({
      dateFormat: 'dd M',
      clearButton: true,
      navTitles: {
        days: 'MM yyyy',
      },
      onShow: dp => {
        dp.$datepicker.find('.datepicker--button[data-action="close"]').click(() => {
          dp.hide();
        });
      },
    });

    this.addCloseButton();
  }
}
