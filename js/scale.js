const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const scaleValue = scaleInput.value;
let scaleValueWithoutPercent = scaleValue.substring(0, scaleValue.length - 1);

const img = document.querySelector('.img-upload__preview').querySelector('img');

buttonSmaller.addEventListener('click', () => {
  if (scaleValueWithoutPercent > 25) {
    scaleValueWithoutPercent -= 25;
    scaleInput.value = `${scaleValueWithoutPercent  }%`;
    img.style.transform = `scale(${scaleValueWithoutPercent / 100})`;
  }
});

buttonBigger.addEventListener('click', () => {
  if (scaleValueWithoutPercent < 100) {
    scaleValueWithoutPercent += 25;
    scaleInput.value = `${scaleValueWithoutPercent  }%`;
    img.style.transform = `scale(${scaleValueWithoutPercent / 100})`;
  }
});

export {img};
