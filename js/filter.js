import { types } from './card.js';

const typeFilter = document.querySelector('#type')
const priceFilter = document.querySelector('#price')

typeFilter.addEventListener('change', () => {
  priceFilter.placeholder = types[typeFilter.value].minPrice;
})

const timeInFilter = document.querySelector('#timein')
const timeOutFilter = document.querySelector('#timeout')

timeInFilter.addEventListener('change', () => {
  timeOutFilter.value = timeInFilter.value;
})

timeOutFilter.addEventListener('change', () => {
  timeInFilter.value = timeOutFilter.value;
})
