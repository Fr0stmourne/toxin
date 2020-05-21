import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

export default class DateFilter {
  constructor(dateFilterElement) {
    this.$container = $(dateFilterElement);
    this.init();
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
    this.$container.datepicker({
      dateFormat: 'dd M',
      clearButton: true,
      navTitles: {
        days: 'MM yyyy',
      },
      onShow: datepicker => this.bindApplyListener(datepicker),
    });

    this.findBtnContainer();
    this.addApplyBtn();
  }
}
