const listClass = 'expandable-list__expand-btn--hidden';

function addExpandableList(options) {
  $(options.btnSelector).click(() => {
    $(options.listSelector).slideToggle();
    $(options.btnSelector).toggleClass(listClass);
  });
}

$(() => {
  addExpandableList({
    btnSelector: '#expandable-btn',
    listSelector: '#expandable',
  });
});
