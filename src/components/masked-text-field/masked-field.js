import 'inputmask/dist/jquery.inputmask';

export default class MaskField {
  constructor(maskFieldEl) {
    this.field = $(maskFieldEl);

    this.init();
  }

  init() {
    const today = new Date();
    const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const mm = today.getMonth() < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const maxDate = `${dd}-${mm}-${yyyy}`;

    this.field.inputmask({
      alias: 'datetime',
      min: '01/01/1900',
      max: maxDate,
      inputFormat: 'dd.mm.yyyy',
      placeholder: '_',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    });
  }
}
