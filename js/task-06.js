// console.log()
const textInput = document.querySelector('#validation-input');


textInput.addEventListener("blur", fnInput);


function fnInput(event) {
    const onInput = event.currentTarget;
    const inputLength = Number(onInput.dataset.length);

if (onInput.value.length > inputLength) {
   onInput.classList.remove('invalid');
   onInput.classList.add('valid');

}
else {
    onInput.classList.remove('valid');
   onInput.classList.add('invalid');
}
}