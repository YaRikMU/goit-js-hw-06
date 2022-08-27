// console.log()
// const textInput = document.querySelector('#validation-input');


// textInput.addEventListener("blur", fnInput);


// function fnInput(event) {

//     const onInput = event.currentTarget;
  
//     const inputLength = onInput.dataset.length;

   

// if (onInput.value.length >= inputLength) {
//    onInput.classList.remove('invalid');
//    onInput.classList.add('valid');
//    console.log(onInput);
// }
// else {
//     onInput.classList.remove('valid');
//    onInput.classList.add('invalid');
// }
// } 



const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})