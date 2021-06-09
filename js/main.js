import './card.js';
import './filter.js';

// disable actions
const mapFilterForm = document.querySelector('.map__filters');
mapFilterForm.classList.add('ad-form--disabled');

const mapSelectFilters = mapFilterForm.querySelectorAll('select')
for (let i = 0; i < mapSelectFilters.length; i++) {
  mapSelectFilters[i].setAttribute('disabled', 'disabled')
}

const mainForm = document.querySelector('.ad-form');
mainForm.classList.add('ad-form--disabled');

const mainFormFieldsets = mainForm.querySelectorAll('fieldset');
for (let i = 0; i < mainFormFieldsets.length; i++) {
  mainFormFieldsets[i].setAttribute('disabled', 'disabled')
}

// MAP
const map = L.map('map-canvas')
  .on('load', () => {
    // enable actions
    mapFilterForm.classList.remove('ad-form--disabled');
    for (let i = 0; i < mapSelectFilters.length; i++) {
      mapSelectFilters[i].removeAttribute('disabled', 'disabled')
    }
    mainForm.classList.remove('ad-form--disabled');
    for (let i = 0; i < mainFormFieldsets.length; i++) {
      mainFormFieldsets[i].removeAttribute('disabled', 'disabled')
    }
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const adressInput = document.querySelector('#address')

mainPinMarker.on('moveend', (evt) => {
    let {lat, lng} = evt.target.getLatLng();
    adressInput.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`
});

