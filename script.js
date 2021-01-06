const form = document.getElementById('newsletter-form');
const errorIcon = document.getElementById('error-icon');
const validationMsg = document.getElementById('validation-msg');

form.addEventListener('submit', (e) => {
  pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailInput = document.getElementById('email-address');

  if (emailInput.value.length == 0) {
    emailInput.classList.add('input-error');
    errorIcon.classList.add('show');
    validationMsg.classList.add('show', 'has-error');
    validationMsg.classList.remove('no-error');
    validationMsg.textContent = 'Your email field is empty.';
  } else if (!pattern.test(emailInput.value)) {
    emailInput.classList.add('input-error');
    errorIcon.classList.add('show');
    validationMsg.classList.add('show', 'has-error');
    validationMsg.classList.remove('no-error');
    validationMsg.textContent = 'Please provide a valid email.';
  } else {
    emailInput.classList.remove('input-error');
    errorIcon.classList.remove('show');
    validationMsg.classList.remove('has-error');
    validationMsg.classList.add('no-error');
    validationMsg.textContent = 'Valid email ✔️';
  }
  e.preventDefault();
});
