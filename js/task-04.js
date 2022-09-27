const result = document.querySelector("#value");

const counterValue = 0;
const buttonPlus = document.querySelector('[data-action="increment"]');
const buttonMinus = document.querySelector('[data-action="decrement"]');

const clickPlus = () => {
	counterValue += 1;
	result.textContent = counterValue;
};


const clickMinus = () => {
	counterValue -= 1;
	result.textContent = counterValue;
};

// buttonPlus.addEventListener("click", clickPlus);
// buttonMinus.addEventListener("click", clickMinus);