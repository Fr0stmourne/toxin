/* eslint-disable no-shadow */
import { boundMethod } from 'autobind-decorator';

import getCorrectWordForm from '../../utils/js/getCorrectWordForm';
import '../../vendors/dropdown/dropdown';
import '../../vendors/dropdown/dropdown.scss';
import './dropdown.scss';

const DEFAULT_VALUE = 0;
const OPENED_DRODPOWN_CLASS = 'dropdown__result_opened';

export default class Dropdown {
  constructor(dropdownElement) {
    this.$container = $(dropdownElement);
    this.findElements();
    if (this.$dropdown) this.init();
  }

  findElements() {
    this.$dropdown = this.$container.find('.dropdown-result');
    this.$dropdownList = this.$dropdown.next();
    this.$plusMinus = this.$dropdown.parent().find('.plus-minus-block');
    this.$applyButton = this.$dropdown.parent().find('.apply');
    this.$resetButton = this.$dropdown.parent().find('.reset');
    this.initialText = this.$dropdown.text();
  }

  createInput() {
    this.$plusMinus.htmlNumberSpinner();
    this.$plusMinusButtons = this.$dropdown.parent().find('.dropdown-item .plus-minus-btn');
    this.$minusButtons = this.$dropdown.parent().find('.dropdown-item .minus-btn');
    this.$plusButtons = this.$dropdown.parent().find('.dropdown-item .plus-btn');
    this.$input = this.$dropdown.parent().find('.dropdown-item input');
    this.$plusMinusButtons.removeAttr('type').attr('type', 'button');
  }

  disableButton($button) {
    $button.prop('disabled', true);
  }

  enableButton($button) {
    $button.prop('disabled', false);
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
        .find('.minus-btn')
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
    const $currentItem = $target.closest('.dropdown-item');
    const $minusButton = $currentItem.find('.minus-btn');
    const $plusButton = $currentItem.find('.plus-btn');
    const $currentInput = $currentItem.find('.plus-minus-input');
    const $dropdown = $target.closest('.js-dropdown');
    $dropdown.find('.reset').removeClass('dropdown__reset_hidden');

    const resultArray = [];
    const $allOptions = $dropdown.find('.dropdown-option');

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
              .find('.plus-minus-input')
              .val();
          });
        } else {
          currentValue = $(el)
            .parent()
            .find('.plus-minus-input')
            .val();
        }

        if (+currentValue !== DEFAULT_VALUE) {
          resultArray.push(
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
      this.disableButton($minusButton);
    } else {
      this.enableButton($minusButton);
    }

    if (inputValue === maxInputValue) {
      this.disableButton($plusButton);
    } else {
      this.enableButton($plusButton);
    }

    const resultText = `${resultArray.length ? [...new Set(resultArray)].join(', ') : this.initialText}`;
    this.$dropdown.text(resultText);
  }

  bindListeners() {
    this.$applyButton.click(this.toggle);
    this.$dropdown.click(this.toggle);

    $(document).click(this.handleDocumentClick);
    this.$container.click(e => e.stopPropagation());

    this.$resetButton.click(this.reset);

    this.$input.change(this.changeValue);
    this.$plusMinusButtons.click(this.changeValue);
  }

  init() {
    this.createInput();
    this.bindListeners();

    this.$minusButtons.each((_, el) => {
      this.disableButton($(el));
    });
  }
}
