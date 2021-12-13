var throttle = require('lodash.throttle');
import storage from './storage';

const formEl = document.querySelector('.feedback-form');
const throttled = throttle(onFormElInput, 500);
formEl.addEventListener('input', throttled);
formEl.addEventListener('submit', handleSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';

updateInput();

function onFormElInput() {
      
    const obj = {
        email: formEl.elements.email.value,
        message: formEl.elements.message.value,
    }
    storage.save(LOCALSTORAGE_KEY, obj); 
}

function handleSubmit(event) {
    event.preventDefault();
    
    console.log(`Email: ${formEl.elements.email.value}, Message: ${formEl.elements.message.value}`);
    
    event.currentTarget.reset();
    storage.clear(LOCALSTORAGE_KEY);
}

function updateInput() {
    const storageLoadEmailValue = storage.load(LOCALSTORAGE_KEY);
    const storageLoadMessageValue = storage.load(LOCALSTORAGE_KEY);
    formEl.elements.email.value = storageLoadEmailValue.email || "";
    formEl.elements.message.value = storageLoadMessageValue.message || "";
    
}   