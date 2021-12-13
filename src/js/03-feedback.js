var throttle = require('lodash.throttle');

const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');
const throttled = throttle(onFormElInput, 500);
formEl.addEventListener('input', throttled);
formEl.addEventListener('submit', handleSubmit);

let feedbackFormState = localStorage.getItem('feedback-form-state');

const returnObj = JSON.parse(localStorage.getItem('feedback-form-state'));

inputEl.value = returnObj.email;
textAreaEl.value = returnObj.message;

function onFormElInput(event) {
      
    const obj = {
        email: inputEl.value,
        message: textAreaEl.value,
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(obj));  
    
}

function handleSubmit(event) {
    event.preventDefault();

    console.log(`Email: ${inputEl.value}, Message: ${textAreaEl.value}`);
  event.currentTarget.reset();
}
