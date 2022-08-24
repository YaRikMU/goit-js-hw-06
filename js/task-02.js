const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ulEl = document.querySelector(`#ingredients`);
const elements = [];
for(let i = 0; i < ingredients.length; i += 1) {
  const ing = ingredients[i];
  const elementLi =document.createElement(`li`);
  elementLi.textContent = ing;
  elementLi.classList.add(`item`);
  elements.push(elementLi);
}
ulEl.append(...elements);
console.log(ulEl);