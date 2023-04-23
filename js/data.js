import {getRandomInt} from './util.js';

function createArrayOfUsers(numberOfUsers) {
  const photos = [];
  for (let i = 1; i <= numberOfUsers; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Фото номер ${i}`,
      likes: getRandomInt(15, 200),
      comments: getRandomInt(0, 200)
    };
    photos.push(photo);
  }
  return photos;
}

export {createArrayOfUsers};
