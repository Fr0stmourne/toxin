import { boundMethod } from 'autobind-decorator';

export default class ExpandableList {
  constructor(listElement) {
    this.$container = $(listElement);
    this.findElements();
    this.init();
  }

  findElements() {
    this.$list = this.$container.find('.js-expandable-list');
    this.$btn = this.$container.find('.js-expandable-btn');
    this.$label = this.$container.find('.js-expandable-label');
  }

  @boundMethod
  handleToggle() {
    this.$btn.toggleClass('expandable-list__expand-btn_hidden');
    this.$list.slideToggle();
  }

  bindListeners() {
    this.$btn.click(this.handleToggle);
    this.$label.click(this.handleToggle);
  }

  init() {
    this.bindListeners();

    this.$btn.click();
  }
}
