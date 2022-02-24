(() => {
  const form = document.getElementById('contactForm');
  const inputButton = document.getElementById('submitButton');
  function submitForm(data) {
    inputButton.value = 'Loading';
    inputButton.setAttribute('disabled', true);
    Toastify({
      text: 'Got it! Stay tuned for updates',
      className: 'info',
      gravity: 'bottom',
      duration: 5000,
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
      },
    }).showToast();
    // axios({
    //     url: 'https://formspree.io/f/mrgjqnzp',
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json'
    //     },
    //     data: data
    // }).then(() => {
    //     console.log('email has been sent')
    // }).catch((err) => {
    //     console.log('error:', err.message)
    // }).finally(() => {
    //     inputButton.value = "Request invite"
    //     inputButton.removeAttribute('disabled')
    //   })
  }
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    submitForm(data);
    return false;
  });
})();

//# sourceMappingURL=index.ab7843a3.js.map
