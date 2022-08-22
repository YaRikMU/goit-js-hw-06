const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const elementLi = document.querySelector(`.gallery`);

const elements = images.map ((image) => 
`<li> <img  src="${image.url}" alt="${image.alt}" width: 630px;
height: 375px></li>`)
elementLi.insertAdjacentHTML('beforeEnd', elements);
elementLi.style.cssText = `

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

background-color: red;
list-style:none;`
