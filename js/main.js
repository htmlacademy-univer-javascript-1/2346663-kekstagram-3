function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isMaxLength(str, maxLength) {
  return (str.length <= maxLength);
}

let photos = [];

function createArrayOfUsers(numberOfUsers) {
  for (let i = 1; i <= numberOfUsers; i++) {
  let photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: `Фото номер ${i}`,
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200)
  }
  photos.push(photo);
}}
createArrayOfUsers(25);
