/* eslint-disable */

import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

$('#datepicker').datepicker({
  todayHighlight: true,
  clearBtn: true,
  language: 'ru-RU',
});
$('#find-room-datepicker').datepicker({
  todayHighlight: true,
  clearBtn: true,
  language: 'ru-RU',
});
$('#booking-datepicker').datepicker({
  todayHighlight: true,
  clearBtn: true,
  language: 'ru-RU',
});

function addRangeDatepicker() {

  // const datepickerStartClass = '.js-range-datepicker-start';
  // const datepickerEndClass = '.js-range-datepicker-end';
  // const startInput =  $(datepickerStartClass).parent('.datepicker-double').find(datepickerStartClass);
  // const endInput =  $(datepickerStartClass).parent('.datepicker-double').find(datepickerEndClass);


  // $(startInput).datepicker({ 
  //   onSelect: function (fd, d, picker) { 
  //     $(startInput).val(fd.split("-")[0]);
  //     $(endInput).val(fd.split("-")[1]);
  //   }});
  
  $('#cards__start').datepicker({ 
    onSelect: function (fd, d, picker) { 
      $("#cards__start").val(fd.split("-")[0]);
      $("#cards__end").val(fd.split("-")[1]);
    }
  });

  $('#cards__start-1').datepicker({ 
    onSelect: function (fd, d, picker) { 
      $("#cards__start-1").val(fd.split("-")[0]);
      $("#cards__end-1").val(fd.split("-")[1]);
    }
  });
}

addRangeDatepicker();

// $(() => {
//   $('.datepicker').daterangepicker({ linkedCalendars: false });
// });

// var $start = $('#start'),
//     $end = $('#end');

// $start.datepicker({
//     onSelect: function (fd, date) {
//         $end.data('datepicker')
//                 .update('minDate', date);

//         $end.focus();
//     }
// })

// $end.datepicker({
//     onSelect: function (fd, date) {
//         $start.data('datepicker')
//                 .update('maxDate', date)
//     }
// })