import { offers } from './data.js'

const cardTemplate = document.querySelector('#card').content
// const similarCardFragment = document.createDocumentFragment();

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
  // сделать деструктаризацию
  offer.querySelector('.popup__title').textContent = offers.offer.title;
  offer.querySelector('.popup__text--address').textContent = offers.offer.address;
  offer.querySelector('.popup__text--price').textContent = `${offers.offer.price} ₽/ночь`;
  offer.querySelector('.popup__type').textContent = types[offers.offer.type].ru;
  offer.querySelector('.popup__text--capacity').textContent = `${offers.offer.rooms} комнаты для ${offers.offer.guests} гостей`;
  offer.querySelector('.popup__text--time').textContent = `Заезд после ${offers.offer.checkin}, выезд до ${offers.offer.checkout}`;

  const featuresList = offer.querySelector('.popup__features');

  // featuresList.innerHTML = '';
  // const listFragment = document.createDocumentFragment();
  // что-то накосячил с циклом делаю не много лишек, а много УЛ в том числе
  // for (let i = 0; i < offers.offer.features.length; i++) {
  //   const newListElement = document.createElement('li');
  //   newListElement.classList.add('popup__feature', 'popup__feature--'+ offers.offer.features[i]);
  //   // newListElement.classList.add(`popup__feature`, `popup__feature--${offers.offer.features[i]}`);
  //   listFragment.appendChild(newListElement)
  //   featuresList.appendChild(listFragment)
  // }

  if (offers.offer.features.length > 0) {
    const ferturesItems = featuresList.querySelectorAll('.popup__feature')
    ferturesItems.forEach(item => {
      if (offers.offer.features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
        item.remove()
      }
    });
  }

  offer.querySelector('.popup__description').textContent = offers.offer.description;

  const photosList = offer.querySelector('.popup__photos');
  photosList.innerHTML = '';
  const photoFragment = document.createDocumentFragment();

  //склонировать img
  for (let i = 0; i < offers.offer.photos.length; i++) {
    const newPhoto = document.createElement('img');
    newPhoto.classList.add('popup__photo');
    newPhoto.src = offers.offer.photos[i];
    newPhoto.style.width = '45px';
    newPhoto.style.height = '40px';
    photoFragment.appendChild(newPhoto)
    photosList.appendChild(photoFragment)
  }

  return offer;
}

const mapCanvas = document.querySelector('#map-canvas')
mapCanvas.appendChild(renderCard(offers[0]))
