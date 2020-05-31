import { boundMethod } from 'autobind-decorator';

import '../../vendors/dropdown/dropdown';
import getCorrectWordForm from '../../utils/js/getCorrectWordForm';

const DEFAULT_VALUE = 0;
const OPENED_DRODPOWN_CLASS = 'dropdown__result_opened';

export default class Dropdown {
  constructor(dropdownEl) {
    this.$container = $(dropdownEl);
    this.findElements();
    if (this.$dropdown) this.init();
  }

  findElements() {
    this.$dropdown = this.$container.find('.js-dropdown-result');
    this.$dropdownList = this.$dropdown.next();
    this.$plusMinus = this.$dropdown.parent().find('.js-plus-minus');
    this.$applyBtn = this.$dropdown.parent().find('.js-apply');
    this.$resetBtn = this.$dropdown.parent().find('.js-reset');
    this.initialText = this.$dropdown.text();
  }

  createInput() {
    this.$plusMinus.htmlNumberSpinner();
    this.$plusMinusBtns = this.$dropdown.parent().find('.js-dropdown-item .js-plus-minus-btn');
    this.$minusBtns = this.$dropdown.parent().find('.js-dropdown-item .js-minus-btn');
    this.$plusBtns = this.$dropdown.parent().find('.js-dropdown-item .js-plus-btn');
    this.$input = this.$dropdown.parent().find('.js-dropdown-item input');
  }

  disableBtn($btn) {
    $btn.prop('disabled', true);
  }

  enableBtn($btn) {
    $btn.prop('disabled', false);
  }

  @boundMethod
  toggle(e) {
    e.preventDefault();
    this.$dropdownList.slideToggle();
    this.$dropdown.toggleClass(OPENED_DRODPOWN_CLASS);
  }

  @boundMethod
  reset(e) {
    e.preventDefault();
    this.$input.each((_, el) => {
      $(el).val(0);
      $(el)
        .parent()
        .find('.js-minus-btn')
        .click();
    });
  }

  @boundMethod
  handleDocumentClick() {
    if (this.$dropdown.hasClass(OPENED_DRODPOWN_CLASS)) {
      this.$dropdown.click();
    }
  }

  @boundMethod
  changeValue(e) {
    e.preventDefault();

    const $target = $(e.target);
    const $currentItem = $target.closest('.js-dropdown-item');
    const $minusBtn = $currentItem.find('.js-minus-btn');
    const $plusBtn = $currentItem.find('.js-plus-btn');
    const $currentInput = $currentItem.find('.js-plus-minus-input');
    const $dropdown = $target.closest('.js-dropdown');
    $dropdown.find('.js-reset').removeClass('dropdown__reset_hidden');

    const resultArr = [];
    const $allOptions = $dropdown.find('.js-dropdown-option');

    $allOptions
      .filter((_, el) => $(el).data('forms'))
      .each((_, el) => {
        let currentValue;
        const $group = $(el).data('group');

        if ($group) {
          const $filtered = $allOptions.filter((_, option) => {
            return $(option).data('group') === $group;
          });
          currentValue = DEFAULT_VALUE;

          $filtered.each((_, option) => {
            currentValue += +$(option)
              .parent()
              .find('.js-plus-minus-input')
              .val();
          });
        } else {
          currentValue = $(el)
            .parent()
            .find('.js-plus-minus-input')
            .val();
        }

        if (+currentValue !== DEFAULT_VALUE) {
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

    const inputValue = +$currentInput.val();
    const minInputValue = +$currentInput.attr('min');
    const maxInputValue = +$currentInput.attr('max');

    if (inputValue === minInputValue) {
      this.disableBtn($minusBtn);
    } else {
      this.enableBtn($minusBtn);
    }

    if (inputValue === maxInputValue) {
      this.disableBtn($plusBtn);
    } else {
      this.enableBtn($plusBtn);
    }

    const resultText = `${resultArr.length ? [...new Set(resultArr)].join(', ') : this.initialText}`;
    this.$dropdown.text(resultText);
  }

  bindListeners() {
    this.$applyBtn.click(this.toggle);
    this.$dropdown.click(this.toggle);

    $(document).click(this.handleDocumentClick);
    this.$container.click(e => e.stopPropagation());

    this.$resetBtn.click(this.reset);

    this.$input.change(this.changeValue);
    this.$plusMinusBtns.click(this.changeValue);
  }

  init() {
    this.createInput();
    this.bindListeners();

    this.$minusBtns.each((_, el) => {
      this.disableBtn($(el));
    });
  }
}
