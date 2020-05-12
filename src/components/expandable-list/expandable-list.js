const listClass = 'expandable-list__expand-btn_hidden';
const list = '.js-expandable';
const btn = '.js-expandable-btn';

function addExpandableList() {
  $(btn)
    .unbind('click')
    .click(e => {
      $(e.target)
        .toggleClass(listClass)
        .parent()
        .find(list)
        .slideToggle();
    });
  $(btn).click();
}

$(() => {
  addExpandableList();
});
