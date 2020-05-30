export default class ExpandableList {
  constructor(listElement) {
    this.$container = $(listElement);
    this.findElements();
    this.init();
  }

  findElements() {
    this.$list = this.$container.find('.js-expandable-list');
    this.$btn = this.$container.find('.js-expandable-btn');
  }

  bindListeners() {
    this.$btn.click(e => {
      $(e.target).toggleClass('expandable-list__expand-btn_hidden');
      this.$list.slideToggle();
    });
  }

  init() {
    this.bindListeners();

    this.$btn.click();
  }
}
