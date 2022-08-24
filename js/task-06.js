// console.log()
const textInput = document.querySelector('#validation-input');


textInput.addEventListener("blur", fnInput);


function fnInput(event) {

    const onInput = event.currentTarget;
  
    const inputLength = onInput.dataset.length;

   

if (onInput.value.length >= inputLength) {
   onInput.classList.remove('invalid');
   onInput.classList.add('valid');
   console.log(onInput);
}
else {
    onInput.classList.remove('valid');
   onInput.classList.add('invalid');
}
} 
