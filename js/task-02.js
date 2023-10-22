const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const INGREDIENT_LIST = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const LIST = document.createElement("li");
  const INGRIDIENT = ingredients[i];

  INGREDIENT_LIST.appendChild(LIST);
  LIST.classList.add("item");
  LIST.textContent = INGRIDIENT;
}
