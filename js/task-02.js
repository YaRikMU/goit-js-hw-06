const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




// const ulEl = document.querySelector(`#ingredients`);
// const elements = [];
// for(let i = 0; i < ingredients.length; i += 1) {
//   const ing = ingredients[i];
//   const elementLi =document.createElement(`li`);
//   elementLi.textContent = ing;
//   elementLi.classList.add(`item`);
//   elements.push(elementLi);
// }
// ulEl.append(...elements);
// console.log(ulEl);

// const ulEl = document.querySelector(`#ingredients`);





//   for (const ingredient of ingredients){
//    return refs.ulEl.push(`<li>${ingredient}</li>`);
//   }
// console.log(ulEl)


const list = document.querySelector('#ingredients')
const elements = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.className = 'item'
	item.textContent = ingredient
	elements.push(item)
})

list.append(...elements)