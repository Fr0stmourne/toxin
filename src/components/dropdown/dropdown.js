import { boundMethod } from 'autobind-decorator';

function getCorrectWordForm(n, textForms) {
  const num = Math.abs(n) % 100;
  const n1 = num % 10;
  if (num > 10 && num < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
}

export default class Dropdown {
  constructor(dropdownEl) {
    this.findElements(dropdownEl);
    if (this.dropdown) this.init();
  }

  findElements(dropdownEl) {
    this.container = $(dropdownEl);
    this.dropdown = this.container.find('.js-dropdown-result');
    this.dropdownList = this.dropdown.next();
    this.plusMinus = this.dropdown.parent().find('.js-plus-minus');
    this.applyBtn = this.dropdown.parent().find('.js-apply');
    this.resetBtn = this.dropdown.parent().find('.js-reset');
    this.initialText = this.dropdown.text();
  }

  createInput() {
    this.plusMinus.htmlNumberSpinner();
    this.plusMinusBtn = this.dropdown.parent().find('.js-dropdown-item .js-plus-minus-btn');
    this.input = this.dropdown.parent().find('.js-dropdown-item input');
  }

  @boundMethod
  close(e) {
    e.preventDefault();
    this.dropdownList.slideToggle();
  }

  @boundMethod
  reset(e) {
    e.preventDefault();
    this.input.each((index, el) => {
      $(el).val(0);
      $(el)
        .parent()
        .find('.js-minus-btn')
        .click();
    });
  }

  @boundMethod
  changeValue(e) {
    e.preventDefault();
    const $dropdown = $(e.target).closest('.js-dropdown');
    $dropdown.find('.js-reset').removeClass('dropdown__reset_hidden');

    const resultArr = [];
    const $allOptions = $dropdown.find('.js-dropdown-option');

    $allOptions
      .filter((index, el) => $(el).data('forms'))
      .each((index, el) => {
        let currentValue;
        const $group = $(el).data('group');

        if ($group) {
          const $filtered = $allOptions.filter((index, option) => {
            return $(option).data('group') === $group;
          });
          currentValue = 0;

          $filtered.each((index, option) => {
            currentValue += +$(option)
              .parent()
              .find('input')
              .val();
          });
        } else {
          currentValue = $(el)
            .parent()
            .find('input')
            .val();
        }

        if (+currentValue !== 0) {
          resultArr.push(
            `${currentValue} ${getCorrectWordForm(
              currentValue,
              $(el)
                .data('forms')
                .split(' '),
            )}`,
          );
        }
      });

    const resultText = `${resultArr.length ? [...new Set(resultArr)].join(', ') : this.initialText}`;
    this.dropdown.text(resultText);
  }

  init() {
    this.createInput();

    this.applyBtn.click(this.close);
    this.dropdown.click(this.close);

    this.resetBtn.click(this.reset);

    this.input.change(this.changeValue);
    this.plusMinusBtn.click(this.changeValue);

    this.dropdown.click();
  }
}
