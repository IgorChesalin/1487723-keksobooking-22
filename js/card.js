import { offers } from './data.js'

const cardTemplate = document.querySelector('#card').content

const types = {
  flat: {
    ru: 'Квартира',
  },
  bungalow: {
    ru: 'Бунгало',
  },
  house: {
    ru: 'Дом',
  },
  palace: {
    ru: 'Дворец',
  },
}

const renderCard = (offers) => {
  const offer = cardTemplate.cloneNode(true)
  let {author: {avatar}, offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}} = offers;
  offer.querySelector('.popup__title').textContent = title;
  offer.querySelector('.popup__text--address').textContent = address;
  offer.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  offer.querySelector('.popup__type').textContent = types[type].ru;
  offer.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  offer.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  const featuresList = offer.querySelector('.popup__features');

  if (features.length > 0) {
    const fearturesItems = featuresList.querySelectorAll('.popup__feature')
    fearturesItems.forEach(item => {
      if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
        item.remove()
      }
    });
  }

  offer.querySelector('.popup__description').textContent = description;

  const photosList = offer.querySelector('.popup__photos');
  const photoTemplate = photosList.querySelector('.popup__photo')
  photosList.innerHTML = '';
  const photoFragment = document.createDocumentFragment();
  
  for (let i = 0; i < photos.length; i++) {
    const photo = photoTemplate.cloneNode(true)
    photo.src = photos[i];
    photoFragment.appendChild(photo)
    photosList.appendChild(photoFragment)    
  }

offer.querySelector('.popup__avatar').src = avatar;

  return offer;
}

const mapCanvas = document.querySelector('#map-canvas')
mapCanvas.appendChild(renderCard(offers[0]))
