import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

export const defaultOptions = {
  navTitles: {
    days: 'MM yyyy',
  },
};

export const inlineOptions = {
  inline: true,
  clearButton: true,
  navTitles: {
    days: 'MM yyyy',
  },
};

export function addDefaultDatepicker(selector) {
  $(`${selector}`).datepicker({
    todayHighlight: true,
    clearBtn: true,
    language: 'ru-RU',
  });
}

export function addRangeDatepicker(startElSelector, endElSelector, options) {
  $(`${startElSelector}`).datepicker({
    ...options,
    onSelect(fd) {
      $(`${startElSelector}`).val(fd.split('-')[0]);
      $(`${endElSelector}`).val(fd.split('-')[1]);
    },
  });
}

// addDefaultDatepicker('#datepicker');
// addDefaultDatepicker('#find-room-datepicker');
// addDefaultDatepicker('#booking-datepicker');
