function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector('.change-color');
const nameColorRef = document.querySelector('.color')


btnRef.addEventListener('click', onBtnRefClick);

function onBtnRefClick (_event) {
  document.body.style.backgroundColor = nameColorRef.textContent = getRandomHexColor();

}