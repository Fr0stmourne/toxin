/* eslint-disable no-shadow */
import { boundMethod } from 'autobind-decorator';

import getCorrectWordForm from '../../utils/js/getCorrectWordForm';
import '../../vendors/dropdown/dropdown';
import '../../vendors/dropdown/dropdown.scss';
import './dropdown.scss';

const DEFAULT_VALUE = 0;
const classnames = {
  OPENED_DROPDOWN: 'dropdown__result_opened',
  HIDDEN_RESET: 'dropdown__reset_hidden',
  INPUT: 'plus-minus__input',
  MINUS_BUTTON: 'plus-minus__btn_minus',
  PLUS_BUTTON: 'plus-minus__btn_plus',
};

export default class Dropdown {
  constructor(dropdownElement) {
    this.$container = $(dropdownElement);
    this.findElements();
    if (this.$dropdown) this.init();
  }

  findElements() {
    this.$dropdown = this.$container.find('.dropdown__result');
    this.$dropdownList = this.$dropdown.next();
    this.$plusMinus = this.$dropdown.parent().find('.plus-minus');
    this.$applyButton = this.$dropdown.parent().find('.dropdown__apply');
    this.$resetButton = this.$dropdown.parent().find('.dropdown__reset');
    this.initialText = this.$dropdown.text();
  }

  createInput() {
    this.$plusMinus.htmlNumberSpinner();
    this.$plusMinusButtons = this.$dropdown.parent().find('.dropdown__item .plus-minus__btn');
    this.$minusButtons = this.$dropdown.parent().find(`.dropdown__item .${classnames.MINUS_BUTTON}`);
    this.$plusButtons = this.$dropdown.parent().find(`.dropdown__item .${classnames.PLUS_BUTTON}`);
    this.$input = this.$dropdown.parent().find(`.dropdown__item .${classnames.INPUT}`);
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
    this.$dropdown.toggleClass(classnames.OPENED_DROPDOWN);
  }

  @boundMethod
  reset(e) {
    e.preventDefault();
    const { $input, $resetButton } = this;
    $input.each((_, el) => {
      $(el).val(0);
      $(el)
        .parent()
        .find(`.${classnames.MINUS_BUTTON}`)
        .click();
    });

    $resetButton.addClass(classnames.HIDDEN_RESET);
  }

  @boundMethod
  handleDocumentClick() {
    if (this.$dropdown.hasClass(classnames.OPENED_DROPDOWN)) {
      this.$dropdown.click();
    }
  }

  @boundMethod
  changeValue(e) {
    e.preventDefault();

    const { $resetButton } = this;
    const $target = $(e.target);
    const $currentItem = $target.closest('.dropdown__item');
    const $minusButton = $currentItem.find(`.${classnames.MINUS_BUTTON}`);
    const $plusButton = $currentItem.find(`.${classnames.PLUS_BUTTON}`);
    const $currentInput = $currentItem.find(`.${classnames.INPUT}`);
    const $dropdown = $target.closest('.js-dropdown');

    const resultArray = [];
    const $allOptions = $dropdown.find('.dropdown__option');

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
              .find(`.${classnames.INPUT}`)
              .val();
          });
        } else {
          currentValue = $(el)
            .parent()
            .find(`.${classnames.INPUT}`)
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

    if (!resultArray.length) {
      $resetButton.addClass(classnames.HIDDEN_RESET);
    } else {
      $resetButton.removeClass(classnames.HIDDEN_RESET);
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
