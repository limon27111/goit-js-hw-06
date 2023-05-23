function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const nameColorRef = document.querySelector('.color')


btnRef.addEventListener('click', onBtnRefClick);

function onBtnRefClick (_event) {
  bodyRef.style.backgroundColor = getRandomHexColor();

  nameColorRef.textContent = getRandomHexColor();
}