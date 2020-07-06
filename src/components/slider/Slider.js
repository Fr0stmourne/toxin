import 'webpack-jquery-ui/slider';
import 'jquery-ui-touch-punch';

import formatNumber from '../../utils/js/formatNumber';
import '../../vendors/ui-slider/ui-slider.scss';
import './slider.scss';

export default class Slider {
  constructor({ slider, min = 0, max = 1000, values = [0, 1000] }) {
    this.init({ slider, min, max, values });
  }

  findElements() {
    this.$input = this.$slider.parent().find('.slider__input');
  }

  updateInitialValue() {
    const { $input, $slider } = this;
    $input.val(`${formatNumber($slider.slider('values', 0))}₽ - ${formatNumber($slider.slider('values', 1))}₽`);
  }

  init({ slider, min: initialMin, max: initialMax, values: initialValues }) {
    this.$slider = $(slider);
    this.min = initialMin;
    this.max = initialMax;
    this.values = initialValues;
    this.findElements();

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
