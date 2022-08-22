// console.log()

const buttonToChangeColor = document.querySelector('button.change-color')
const spanEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;}


    buttonToChangeColor.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute('style', 'background-color: ' + spanEl.textContent);
});



