// const list = document.querySelector(`#categories`);
// const itemCat = list.children;


// console.log(`Number of categories: ${itemCat.length}`);

// const item = document.querySelectorAll('.item');
// for (let i = 0; i < item.length; i += 1) {
//     const elementList = item[i].children;
//     const elementListTitle = elementList[0].textContent;
//     const elementListLenth = elementList[1].querySelectorAll(`li`).length;
//     console.log('Category: ', elementListTitle);
//     console.log('Elements: ', elementListLenth);
// }

const item = document.querySelectorAll('.item');
const nameList = document.querySelectorAll('h2');
const numerItem = nameList[0].nextElementSibling.children.length;

console.log(`Number of categories: ${item.length}`);


console.log(`Category: ${nameList[0].textContent}`);
console.log(`Elements: ${numerItem}`);


console.log(`Category: ${nameList[1].textContent}`);
console.log(`Elements: ${nameList[1].nextElementSibling.children.length}`);

console.log(`Category: ${nameList[2].textContent}`);
console.log(`Elements: ${nameList[2].nextElementSibling.children.length}`);

