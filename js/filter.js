import { types } from './card.js';

const typeFilter = document.querySelector('#type')
const priceFilter = document.querySelector('#price')

typeFilter.addEventListener('change', () => {
  priceFilter.placeholder = types[typeFilter.value].minPrice;
})

const timeInFilter = document.querySelector('#timein')
const timeInFilterValue = document.querySelector('#timein').getElementsByTagName('option')
const timeOutFilter = document.querySelector('#timeout').getElementsByTagName('option')

timeInFilter.addEventListener('change', () => {
  timeOutFilter.value = timeInFilterValue.value;
})
