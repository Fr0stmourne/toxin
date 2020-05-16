function formatNumber(num) {
  return String(num)
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .reverse()
    .map(el =>
      el
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');
}

export default class Slider {
  constructor({ slider, min = 0, max = 1000, values = [0, 1000] }) {
    this.slider = $(slider);
    this.input = this.slider.parent().find('input');
    this.min = min;
    this.max = max;
    this.values = values;

    this.init();
  }

  updateInitialValue() {
    const { input, slider } = this;
    input.val(`${formatNumber(slider.slider('values', 0))}₽ - ${formatNumber(slider.slider('values', 1))}₽`);
  }

  init() {
    const { min, max, values, input, slider } = this;

    slider.slider({
      range: true,
      min,
      max,
      values,
      slide(event, ui) {
        input.val(`${formatNumber(ui.values[0])}₽ - ${formatNumber(ui.values[1])}₽`);
      },
    });

    this.updateInitialValue();
  }
}
