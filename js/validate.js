import {sendData} from './load.js';
import {closeOverlay} from './form.js';
import {createMessage} from './util.js';

const submitButton = document.querySelector('#upload-submit');

const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    submitButton.disabled = true;
    sendData(
      () => {
        closeOverlay(false);
        createMessage('success');
        submitButton.disabled = false;
      },
      () => {
        closeOverlay(true);
        createMessage('error');
        submitButton.disabled = false;
      },
      new FormData(evt.target),
    );
  }
});
