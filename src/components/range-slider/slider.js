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

export default function addSlider(options) {
  const input = $(options.sliderSelector)
    .parent()
    .find('input');
  $(options.sliderSelector).slider({
    range: true,
    min: options.min,
    max: options.max,
    values: options.values,
    slide(event, ui) {
      input.val(`${formatNumber(ui.values[0])}₽ - ${formatNumber(ui.values[1])}₽`);
    },
  });

  input.val(
    `${formatNumber($(options.sliderSelector).slider('values', 0))}₽ - ${formatNumber(
      $(options.sliderSelector).slider('values', 1),
    )}₽`,
  );
}
