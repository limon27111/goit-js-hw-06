function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


createBtn.addEventListener('click', () => {
  const amount = input.value;

  const boxesCollection = createBoxes(amount);

  boxesContainer.append(...boxesCollection);
});

destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  return boxes;
}