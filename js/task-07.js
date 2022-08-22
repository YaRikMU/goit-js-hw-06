const refs = {
input: document.querySelector('#font-size-control'),
textSize : document.querySelector('#text'),
}
refs.textSize.style.cssText = `
font-size: 56px`
console.log(refs.textSize)
refs.input.addEventListener("input", fnInput);

function fnInput (event) {
 
    refs.textSize.style.fontSize = event.currentTarget.value + 'px';
}