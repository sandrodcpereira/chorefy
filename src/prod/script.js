import Toastify from 'toastify-js';
import axios from 'axios';
import config from './config';

(() => {
  const form = document.getElementById('contactForm');
  const form1 = document.getElementById('contactFormTop');

  function submitForm(evt) {
    evt.preventDefault();

    const formEl = evt.target;
    const formData = new FormData(formEl);
    const inputButton = formEl.querySelector('input[type="submit"]');
    const inputEmail = formEl.querySelector('input[type="email"]');

    inputButton.value = 'Loading';
    inputButton.setAttribute('disabled', true);

    axios({
        url: config.formKey,
        method: 'post',
        headers: {
            'Accept': 'application/json'
        },
        data: formData
    }).then(() => {
        console.log('email has been sent')
        inputEmail.value = ''
        Toastify({
          text: 'Got it! Stay tuned for updates',
          duration: 5000,
          backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        }).showToast();
    }).catch((err) => {
        console.log('error:', err.message)
        Toastify({
          text: 'Ooops! Something went wrong',
          duration: 5000,
          backgroundColor: "#fa746b"
        }).showToast();
    }).finally(() => {
        inputButton.value = "Request invite"
        inputButton.removeAttribute('disabled')
      })
  }

  form.addEventListener('submit',submitForm);
  form1.addEventListener('submit', submitForm);
})();
