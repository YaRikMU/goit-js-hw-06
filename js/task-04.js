let counterValue = 0;

const counterClicPlus = document.querySelector('button[data-action="increment"]');
const counterClicMinus = document.querySelector('button[data-action="decrement"]');
const valueOfCount = document.querySelector('#value');

counterClicPlus.addEventListener("click", OnBtnCounterClicPlus);
counterClicMinus.addEventListener("click", OnBtnCounterClicMinus);

function OnBtnCounterClicPlus() {

    counterValue += 1;
    valueOfCount.textContent = counterValue;
}

function OnBtnCounterClicMinus() {

    counterValue -= 1;
    valueOfCount.textContent = counterValue;
}