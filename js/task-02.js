const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const elements = [];

for(let i = 0; i < ingredients.length; i += 1) {
  const ing = ingredients[i];
  const elementLi =document.createElement(`li`);
  elementLi.textContent = ing;
  elementLi.classList.add(`item`)
  elements.push(elementLi);
  
console.log(elementLi);
}

const ulList = document.querySelector(`#ingredients`);

ulList.append(...elements);
console.log(ulList);