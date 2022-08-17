//  function filterIngredients créer et fait apparaitre le filtre Ingrédients.

function filterIngredients() {
  /* getDataJson is defined on index.js */
  // getDataJson();
  
  const ingredientsBox = document.getElementsByClassName('filter__ingredients');
  const template = document.createElement('div');
  template.className = 'filter__ingredients--template';

  const article = document.createElement('div');
  article.className = 'filter__ingredients--close';

  const headerIngredients = document.createElement('header');
  headerIngredients.className = 'filter__ingredients--header'

  const title = document.createElement('h2');
  title.textContent = 'Ingredients';
  title.className = 'filter__ingredients--name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter__ingredients--angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter__ingredients--angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';

  const inputIngredients = document.createElement('input');
  inputIngredients.setAttribute('id', 'ingredients-input');
  inputIngredients.setAttribute('placeholder', 'Sélectionner un ingrédient...');
  inputIngredients.className = 'filter__ingredients--input';

  // Append Section 
  ingredientsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngredients);
  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputIngredients);

  return(article);
}


//  function filterAppliances créer et fait apparaitre le filtre appareils.

function filterAppliances() {
  /* getDataJson is defined on index.js */
  // getDataJson();
  
  const appliancesBox = document.getElementsByClassName('filter__appliances');
  const template = document.createElement('div');
  template.className = 'filter__appliances--template';

  const article = document.createElement('div');
  article.className = 'filter__appliances--close';

  const headerAppliances = document.createElement('header');
  headerAppliances.className = 'filter__appliances--header'

  const title = document.createElement('h2');
  title.textContent = 'Appareils';
  title.className = 'filter__appliances--name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter__appliances--angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter__appliances--angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';

  const inputAppliances = document.createElement('input');
  inputAppliances.setAttribute('id', 'appliances-input');
  inputAppliances.setAttribute('placeholder', 'Sélectionner un appareil...');
  inputAppliances.className = 'filter__appliances--input';

  // Append Section 
  appliancesBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliances);
  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputAppliances);

  return(article);
}

//  function filterUstensils créer et fait apparaitre le filtre ustensils.

function filterUstensils() {
  /* getDataJson is defined on index.js */
  // getDataJson();
  
  const ustensilsBox = document.getElementsByClassName('filter__ustensils');
  const template = document.createElement('div');
  template.className = 'filter__ustensils--template';

  const article = document.createElement('div');
  article.className = 'filter__ustensils--close';

  const headerUstensils = document.createElement('header');
  headerUstensils.className = 'filter__ustensils--header'

  const title = document.createElement('h2');
  title.textContent = 'Ustensils';
  title.className = 'filter__ustensils--name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter__ustensils--angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter__ustensils--angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';

  const inputUstensils = document.createElement('input');
  inputUstensils.setAttribute('id', 'ustensils-input');
  inputUstensils.setAttribute('placeholder', 'Sélectionner un ustensil...');
  inputUstensils.className = 'filter__ustensils--input';

  // Append Section 
  ustensilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputUstensils);

  return(article);
}


async function getDataRecipes() {
  const response = await fetch('data/recipes.json');
  return await response.json();
  
}

/* Initialisation des fonctions des filtres de manière asynchrone.
*/ 

async function init() {
  filterIngredients();
  filterAppliances();
  filterUstensils();

  const { recipes } = await getDataRecipes();
}

init();


