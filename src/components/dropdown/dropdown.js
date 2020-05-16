/* eslint-disable */

(function($) {
  $.fn.htmlNumberSpinner = function() {
    /* creating the counter buttons */
    $(this).append(
      "<button class='plus-minus__btn js-plus-minus-btn plus-minus__btn_minus js-minus-btn'>-</button> <input class='plus-minus__input' type='number'/> <button class='plus-minus__btn js-plus-minus-btn plus-minus__btn_plus js-plus-btn'>+</button>",
    );

    /* default value and variables and jquery elements */
    const defaultValue = 0;
    let inputValue;
    const numberInput$ = $(this).find('.plus-minus__input');
    const incrementerEl$ = $(this).find('.plus-minus__btn_plus');
    const decrementerEl$ = $(this).find('.plus-minus__btn_minus');

    /* hide the default number input spinner */
    $(this).append(
      '<style>' +
        'input[type=number]::-webkit-inner-spin-button, \n' +
        'input[type=number]::-webkit-outer-spin-button { \n' +
        '    -webkit-appearance: none;\n' +
        '    -moz-appearance: none;\n' +
        '    appearance: none;\n' +
        '    margin: 0; \n' +
        '}</style>',
    );

    /* props - dynamic attributes */
    const minAttributeValue = $(this).attr('min');
    const maxAttributeValue = $(this).attr('max');
    const stepAttributeValue = $(this).attr('step');

    if (minAttributeValue) {
      numberInput$.attr('min', +minAttributeValue);
    }

    if (maxAttributeValue) {
      numberInput$.attr('max', +maxAttributeValue);
    }

    if (stepAttributeValue) {
      numberInput$.attr('step', +stepAttributeValue);
    }

    /* set the default value into the input */
    inputValue = minAttributeValue || defaultValue;
    numberInput$.val(inputValue);

    /* incrementer functionality */
    incrementerEl$.click(function() {
      const parentEl = $(this).parent();
      inputValue = parentEl.find('.plus-minus__input').val();
      if (maxAttributeValue) {
        if (maxAttributeValue == inputValue) {
          return;
        }
      }
      if (stepAttributeValue) {
        inputValue = parentEl.find('.plus-minus__input').val();
        parentEl.find('.plus-minus__input').val(+inputValue + +stepAttributeValue);
        return;
      }
      inputValue = parentEl.find('.plus-minus__input').val();
      parentEl.find('.plus-minus__input').val(++inputValue);
    });

    /* decrementer functionality */
    decrementerEl$.click(function() {
      const parentEl = $(this).parent();
      inputValue = parentEl.find('.plus-minus__input').val();
      if (minAttributeValue) {
        if (minAttributeValue == inputValue) {
          return;
        }
      }
      if (stepAttributeValue) {
        inputValue = parentEl.find('.plus-minus__input').val();
        parentEl.find('.plus-minus__input').val(+inputValue - +stepAttributeValue);
        return;
      }
      inputValue = parentEl.find('.plus-minus__input').val();
      parentEl.find('.plus-minus__input').val(--inputValue);
    });

    numberInput$.change(function() {
      if (!maxAttributeValue || !minAttributeValue) return;
      const currentValue = $(this).val();
      if (+currentValue > +maxAttributeValue) {
        $(this).val(maxAttributeValue);
        return;
      }
      if (+currentValue < +minAttributeValue) {
        $(this).val(minAttributeValue);
      }
    });
  };

  $.fn.getSpinnerValue = function() {
    return $(this)
      .find('.plus-minus__input')
      .val();
  };
})(jQuery);

/* eslint-enable */

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
    this.container = $(dropdownEl);
    this.dropdown = this.container.find('.js-dropdown-result');
    this.initialText = this.dropdown.text();

    if (this.dropdown) this.init();
  }

  createInput = () => {
    this.dropdown
      .parent()
      .find('.plus-minus')
      .htmlNumberSpinner();
  };

  close = e => {
    e.preventDefault();
    this.dropdown.next().slideToggle();
  };

  reset = e => {
    e.preventDefault();
    this.dropdown
      .parent()
      .find('.js-dropdown-item input')
      .each((idx, el) => {
        $(el).val(0);
        $(el)
          .parent()
          .find('.js-minus-btn')
          .click();
      });
  };

  changeValue = e => {
    e.preventDefault();
    const dropdown = $(e.target).closest('.js-dropdown');
    dropdown.find('.js-reset').removeClass('dropdown__reset_hidden');

    const resultArr = [];
    const allOptions = dropdown.find('.js-dropdown-option');

    allOptions
      .filter((idx, el) => $(el).data('forms'))
      .each((idx, el) => {
        let currentValue;
        const group = $(el).data('group');

        if (group) {
          const filtered = $(allOptions).filter((index, option) => {
            return $(option).data('group') === group;
          });
          currentValue = 0;

          filtered.each((index, option) => {
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
  };

  init() {
    this.createInput();

    this.dropdown
      .parent()
      .find('.js-apply')
      .click(this.close);
    this.dropdown.click(this.close);

    this.dropdown
      .parent()
      .find('.js-reset')
      .click(this.reset);

    this.dropdown
      .parent()
      .find('.js-dropdown-item input')
      .change(this.changeValue);

    this.dropdown
      .parent()
      .find('.js-dropdown-item .js-plus-minus-btn')
      .click(this.changeValue);

    this.dropdown.click();
  }
}
