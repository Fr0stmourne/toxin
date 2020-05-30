export default function formatNumber(num) {
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
