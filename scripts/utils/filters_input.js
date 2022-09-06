/*** Rechercher dans les inputs des filtres ***/

/** Fonction pour filtrer les ingrédients via input **/
async function getDetailedFilterIngredients() {

  const filterRender = document.querySelectorAll('.filter__ingredients--list li');
  const cards = document.querySelectorAll('.filter__ingredients--items');
  const searchQuery = document.getElementById('ingredients-input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  console.log('Fonction de recherche de nos ingrédients');
  return (filterRender);
}

/* Used on filters_recipes.js */ 
async function getInputIngredient() {
  const searchInputIngredient = document.getElementById('ingredients-input');
  searchInputIngredient.addEventListener('keyup', () => {
  getDetailedFilterIngredients();
  });
}

/** Fonction pour filtrer les appareils via input **/

async function getDetailedFilterAppliances() {
  const filterRender = document.querySelectorAll('.filter__appliances--list li');
  const cards = document.querySelectorAll('.filter__appliances--items');
  const searchQuery = document.getElementById('appliances-input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  console.log('Fonction de recherche de nos appareils');
  return (filterRender);
}

/* Used on filters_recipes.js */ 
async function getInputAppliance() {
  const searchInputAppliance = document.getElementById('appliances-input');
  searchInputAppliance.addEventListener('keyup', () => {
  getDetailedFilterAppliances();
  });
}

/** Fonction pour filtrer les ustensils via input **/

async function getDetailedFilterUstensils() {
  const filterRender = document.querySelectorAll('.filter__ustensils--list li');
  const cards = document.querySelectorAll('.filter__ustensils--items');
  const searchQuery = document.getElementById('ustensils-input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  console.log('Fonction de recherche de nos ustensils');
  return (filterRender);
}

/* Used on filters_recipes.js */ 
async function getInputUstensil() {
  const searchInputUstensil = document.getElementById('ustensils-input');
  searchInputUstensil.addEventListener('keyup', () => {
  getDetailedFilterUstensils();
  });
}

