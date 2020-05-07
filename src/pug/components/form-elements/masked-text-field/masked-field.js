import 'inputmask/dist/jquery.inputmask';

function maskField(selector) {
  const today = new Date();
  const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const mm = today.getMonth() < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const maxDate = `${dd}-${mm}-${yyyy}`;

  $(selector).inputmask({
    alias: 'datetime',
    min: '01/01/1993',
    max: maxDate,
    inputFormat: 'dd.mm.yyyy',
    placeholder: '_',
    showMaskOnHover: false,
    showMaskOnFocus: false,
  });
}

maskField('.js-date');
