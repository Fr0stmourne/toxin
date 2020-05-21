import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

export default class DateFilter {
  constructor(dateFilterElement) {
    this.findElements(dateFilterElement);
    this.init();
  }

  findElements(dateFilterElement) {
    this.container = $(dateFilterElement);
  }

  addApplyBtn() {
    const $btnContainers = $('.datepicker--buttons');

    $btnContainers.each((idx, btnContainer) => {
      if (!$(btnContainer).find('.datepicker--button[data-action="close"]').length) {
        $(btnContainer).append('<span class="datepicker--button" data-action="close">применить</span>');
      }
    });
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

    this.addApplyBtn();
  }
}
