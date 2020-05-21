const listClass = 'expandable-list__expand-btn_hidden';
const list = '.js-expandable-list';
const btn = '.js-expandable-btn';

export default class ExpandableList {
  constructor(listElement) {
    this.findElements(listElement);
    this.init();
  }

  findElements(listElement) {
    this.container = $(listElement);
    this.list = this.container.find(list);
    this.btn = this.container.find(btn);
  }

  bindListeners() {
    this.btn.click(e => {
      $(e.target).toggleClass(listClass);
      this.list.slideToggle();
    });
  }

  init() {
    this.bindListeners();

    this.btn.click();
  }
}
