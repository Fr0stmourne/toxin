function addSlider(options) {
  $(options.inputSelector).slider({
    range: true,
    min: options.min,
    max: options.max,
    values: options.values,
    slide(event, ui) {
      $(options.textSelector).val(`${ui.values[0]} - ${ui.values[1]}`);
    },
  });

  $(options.textSelector).val(
    `${$(options.inputSelector).slider('values', 0)}₽ - ${$(options.inputSelector).slider('values', 1)}₽`,
  );
}

$(() => {
  addSlider({
    inputSelector: '#slider-range',
    min: 0,
    max: 15000,
    values: [5000, 10000],
    textSelector: '#amount',
  });
});
