/** Scrieți un script care:

Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).*/

const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
const totalCategories = categoryItems.length;
console.log(`Number of categories: ${totalCategories}`);

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    console.log(`Categories: ${categoryName}`);


    const categoryItemsCount = item.querySelectorAll('li').length;
    console.log(`Numers of elements: ${categoryItemsCount}`);
  });