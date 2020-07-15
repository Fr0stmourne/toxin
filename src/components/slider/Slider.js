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
    this.$text = this.$slider.parent().find('.slider__text');
  }

  updateInitialValue() {
    const { $text, $input, $slider } = this;
    const textTemplate = `${formatNumber($slider.slider('values', 0))}₽ - ${formatNumber($slider.slider('values', 1))}₽`
    $input.val(textTemplate);
    $text.text(textTemplate);
  }

  init({ slider, min: initialMin, max: initialMax, values: initialValues }) {
    this.$slider = $(slider);
    this.min = initialMin;
    this.max = initialMax;
    this.values = initialValues;
    this.findElements();

    const { min, max, values, $input, $text, $slider } = this;

    $slider.slider({
      range: true,
      min,
      max,
      values,
      slide(event, ui) {
        const textTemplate = `${formatNumber(ui.values[0])}₽ - ${formatNumber(ui.values[1])}₽`
        $input.val(textTemplate);
        $text.text(textTemplate);
      },
    });

    this.updateInitialValue();
  }
}
