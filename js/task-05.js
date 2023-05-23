const inputRef = document.querySelector('#name-input');
const outRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputRefListener);

function onInputRefListener (event) {
    if (event.currentTarget.value === '') {
        outRef.textContent = 'Anonymous';
    }
    else {
        outRef.textContent = event.currentTarget.value;
    };
};