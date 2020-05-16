import Slider from './slider';

$(() => {
  $('.js-slider').each(
    (idx, el) =>
      new Slider({
        slider: el,
        min: 0,
        max: 15000,
        values: [5000, 10000],
      }),
  );
});
