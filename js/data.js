import { shuffleArray, getRandomInt, getRandomFloat, getRandomElementArr } from './utils.js'

const OFFERS_COUNT = 10;

const MAX_DIGIT = 5;

const locations = {
  x: {
    min: 35.65000,
    max: 35.70000,
  },
  y: {
    min: 139.70000,
    max: 139.80000,
  },
}

let offers = [];

const titles = [
  'Сдается в аренду',
  'Уютные апартаменты',
  'Студия в центре',
  'Лучшее предложение',
  'Сдается впервые',
];

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const checkinTime = [
  '12:00',
  '13:00',
  '14:00',
];

const checkoutTime = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const description = [
  'Просторное жилье в пешей доступности от центра',
  'Все необходимое для семейного отдыха',
  'Ежедневная уборка, скидки при длительной аренде',
  'Лучшее предложение в центральном районе города',
  'Победитель рейтинга букинг 2020',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const addOffers = () => {
  for (let i = 0; i < OFFERS_COUNT; i++) {
    offers.push({
      author: {
        avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
      },
      offer: {
        title: getRandomElementArr(titles),
        address: getRandomInt(1, 100) + ', ' + getRandomInt(1, 100),
        price: getRandomInt(500, 1000),
        type: getRandomElementArr(types),
        rooms: getRandomInt(1, 6),
        guests: getRandomInt(1, 12),
        checkin: getRandomElementArr(checkinTime),
        checkout: getRandomElementArr(checkoutTime),
        features: (shuffleArray(features)).slice(getRandomInt(0, features.length - 1)),
        description: getRandomElementArr(description),
        photos: photos.slice(getRandomInt(0, 2)),
      },
      location: {
        x: getRandomFloat(locations.x.min, locations.x.max, MAX_DIGIT),
        y: getRandomFloat(locations.y.min, locations.y.max, MAX_DIGIT),
      },
    })
  }
}

addOffers();

export { offers };
