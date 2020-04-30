/* eslint-disable */

import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';


const defaultOptions = {
  navTitles: {
    days: 'MM yyyy'
  }
};

const inlineOptions = {
  inline: true,
  clearButton: true,
  navTitles: {
    days: 'MM yyyy'
  }
}

function addDefaultDatepicker(selector) {
  $(`${selector}`).datepicker({
    todayHighlight: true,
    clearBtn: true,
    language: 'ru-RU',
  });
}

function addRangeDatepicker(startElSelector, endElSelector, options) {

  $(`${startElSelector}`).datepicker({
    ...options,
    onSelect: function (fd, d, picker) {
      $(`${startElSelector}`).val(fd.split("-")[0]);
      $(`${endElSelector}`).val(fd.split("-")[1]);
    }
  });
}

addDefaultDatepicker('#datepicker');
addDefaultDatepicker('#find-room-datepicker');
addDefaultDatepicker('#booking-datepicker');

addRangeDatepicker('#cards__start', '#cards__end', defaultOptions);
addRangeDatepicker('#cards__start-1', '#cards__end-1', defaultOptions);
addRangeDatepicker('#cards__start-1', '#cards__end-1', inlineOptions);