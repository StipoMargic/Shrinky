const range = document.querySelector('#range');
const rangeValue = document.querySelector('#rangevalue');

range.addEventListener('input', () => (rangeValue.value = range.value));
