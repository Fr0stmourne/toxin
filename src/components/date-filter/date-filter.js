import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

$(() => {
  $('.js-date-filter-range .js-date-filter-input').datepicker({
    dateFormat: 'dd M',
    clearButton: true,
    navTitles: {
      days: 'MM yyyy',
    },
    onShow: dp => {
      dp.$datepicker.find('.datepicker--button[data-action="close"]').click(() => {
        dp.hide();
      });
    },
  });
  $('.datepicker--buttons').append('<span class="datepicker--button" data-action="close">применить</span>');
});
