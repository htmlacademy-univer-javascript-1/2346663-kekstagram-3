import {img} from './scale.js';

const effects = document.querySelector('.effects__list');

let effect;

effects.addEventListener('click', (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    img.classList.remove(`effects__preview--${effect}`);
    effect = evt.target.value;
    img.classList.add(`effects__preview--${effect}`);
  }
});
