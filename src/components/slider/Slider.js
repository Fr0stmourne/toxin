import 'webpack-jquery-ui/slider';
import 'jquery-ui-touch-punch';

import formatNumber from '../../utils/js/formatNumber';
import '../../vendors/ui-slider/ui-slider.scss';
import './slider.scss';

export default class Slider {
  constructor({ slider, min = 0, max = 1000, values = [0, 1000] }) {
    this.min = min;
    this.max = max;
    this.values = values;
    this.$slider = $(slider);

    this.findElements();
    this.init();
  }

  findElements() {
    this.$input = this.$slider.parent().find('.js-slider-input');
  }

  updateInitialValue() {
    const { $input, $slider } = this;
    $input.val(`${formatNumber($slider.slider('values', 0))}₽ - ${formatNumber($slider.slider('values', 1))}₽`);
  }

  init() {
    const { min, max, values, $input, $slider } = this;

    $slider.slider({
      range: true,
      min,
      max,
      values,
      slide(event, ui) {
        $input.val(`${formatNumber(ui.values[0])}₽ - ${formatNumber(ui.values[1])}₽`);
      },
    });

    this.updateInitialValue();
  }
}
