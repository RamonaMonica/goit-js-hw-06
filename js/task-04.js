
let counterValue = 0;

const DECREMENT_BUTTON = document.querySelector('[data-action="decrement"]'); 
const INCREMENT_BUTTON = document.querySelector('[data-action="increment"]'); 
const COUNTER_SPAN = document.getElementById("value"); 

DECREMENT_BUTTON.addEventListener("click", () => { 
  counterValue--; 
  COUNTER_SPAN.textContent = counterValue; 
});

INCREMENT_BUTTON.addEventListener("click", () => { 
  counterValue++; 
  COUNTER_SPAN.textContent = counterValue;
});