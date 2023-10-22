

let counterValue = 0; 
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener('click', function() {
    counterValue += 1;
    valueElement.textContent = counterValue;
  });
  decrementButton.addEventListener('click', function() {
    counterValue -= 1;
    valueElement.textContent = counterValue;
  });