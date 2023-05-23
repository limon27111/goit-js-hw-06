const inputRef = document.querySelector('#validation-input');
const lengthOfInput = inputRef.dataset.length;

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur (event) {
    if (event.currentTarget.value.length === Number(lengthOfInput)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    };
};