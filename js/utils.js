//Random
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  //проверить
  if (max < min) {
    [min, max] = [max, min]
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//проверить
//RandomFl
const getRandomFloat = (min, max, digit = 2) => {
  if (max < min) {
    [min, max] = [max, min]
  }
  if (max > min && min >= 0) {
    return (Math.random() * (max - min) + min).toFixed(digit);
  }


}
//Случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

//Fisher-Yates Shuffle
const shuffleArray = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffleArray;
getRandomInt;
getRandomFloat;

export { shuffleArray, getRandomInt, getRandomFloat, getRandomElementArr }


