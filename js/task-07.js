const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('change', onInputRefChange);

function onInputRefChange (event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}