/* eslint-disable */
(function($) {
  $.fn.htmlNumberSpinner = function() {
    /* creating the counter buttons */
    $(this).append(
      "<button class='plus-minus__btn plus-minus__btn--minus'>-</button> <input class='plus-minus__input' type='number'/> <button class='plus-minus__btn plus-minus__btn--plus'>+</button>",
    );

    /* default value and variables and jquery elements */
    const defaultValue = 0;
    let inputValue;
    const numberInput$ = $(this).find('.plus-minus__input');
    const incrementerEl$ = $(this).find('.plus-minus__btn--plus');
    const decrementerEl$ = $(this).find('.plus-minus__btn--minus');

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

    /* styling the counter buttons */
    // $(this)
    //   .find('.plus-minus__btn')
    //   .css({
    //     display: 'inline-block',
    //     width: '50px',
    //     height: '30px',
    //     'font-size': '25px',
    //     'text-align': 'center',
    //     'vertical-align': 'middle',
    //     'line-height': '1',
    //     cursor: 'pointer',
    //     'user-select': 'none',
    //   });
    // incrementerEl$.css({ 'background-color': 'slateblue', color: 'white', border: '1px solid slateblue' });
    // decrementerEl$.css({
    //   'background-color': 'hotpink',
    //   color: 'white',
    //   'font-size': '25px',
    //   border: '1px solid hotpink',
    // });
    // numberInput$.css({
    //   'background-color': 'white',
    //   border: '1px solid',
    //   color: 'black',
    //   'text-align': 'center',
    //   width: '55px',
    //   'font-size': '18px',
    //   'line-height': 'normal',
    //   padding: '0',
    //   outline: 'none',
    //   'border-left-color': 'hotpink',
    //   'border-right-color': 'slateblue',
    //   'border-top-color': 'lightblue',
    //   'border-bottom-color': 'lightblue',
    // });

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

function addPlusMinus(id) {
  $(id).htmlNumberSpinner();
}


function addDropdown(options) {
  console.log('id', options.id);
  
  options.inputIdList.forEach(inputId => {
    addPlusMinus(inputId);
  })

  const dropdownSelector = `#${options.id}`;

  $(dropdownSelector).click(() => {

    $(dropdownSelector).next().slideToggle();
  });

  $(dropdownSelector).click();

}

$(() => {
  addDropdown({
    id: 'guest',
    inputIdList: ['#bathroom','#bed', '#bedroom']
  })
  addDropdown({
    id: 'find-room',
    inputIdList: ['#adult','#child']
  })
})

