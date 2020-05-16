const listClass = 'expandable-list__expand-btn_hidden';
const list = '.js-expandable-list';
const btn = '.js-expandable-btn';

export default class ExpandableList {
  constructor(listElement) {
    this.container = $(listElement);
    this.list = this.container.find(list);
    this.btn = this.container.find(btn);

    this.init();
  }

  init() {
    this.btn.click(e => {
      $(e.target).toggleClass(listClass);
      this.list.slideToggle();
    });

    this.btn.click();
  }
}
