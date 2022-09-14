import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

const ENTEREDDATA_KEY = 'feedback-form-state';
const enteredData = {
  email: '',
  message: '',
};

updatePage();

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onInput() {
  enteredData.email = emailInput.value;
  enteredData.message = messageTextarea.value;

  localStorage.setItem(ENTEREDDATA_KEY, JSON.stringify(enteredData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (enteredData.email && enteredData.message) {
    console.log(enteredData);

    event.currentTarget.reset();
    localStorage.removeItem(ENTEREDDATA_KEY);
    enteredData.email = '';
    enteredData.message = '';
  } else {
    console.log('Fill in all fields of the form');
  }
}

function updatePage() {
  const savedData = localStorage.getItem(ENTEREDDATA_KEY);

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageTextarea.value = message;
  }
}