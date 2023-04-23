function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isMaxLength(str, maxLength) {
  return (str.length <= maxLength);
}

export {getRandomInt, isMaxLength};
