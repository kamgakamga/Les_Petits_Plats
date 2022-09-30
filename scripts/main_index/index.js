let recipes = [];

async function getDataJson() {
  const response = await fetch ('data/recipes.json');
  recipes = (await response.json()).recipes;
  console.log('1 - ExtractionJSON Recipes');
  init();
}
/*** Afficher les cards ***/
function displayData(recipes) {
  const recipeSection = document.getElementById('recipes__cards');
  recipeSection.innerHTML = '';
  for (const recipe of recipes) {
    /* getRecipeCard is defined in recipes_cards.js */
    const recipeCard = getRecipeCard(recipe);
    recipeSection.appendChild(recipeCard);
  }
  console.log('3 - Afficher les Recipes :' ,recipes);
}

function init() {
  
  /* ExtractionJSON recipes */ 
  // const { recipes } = await getDataJson();
  /* Afficher les recipes */ 
  displayData(recipes);
  
  /* Afficher les filtres */ 
  filterIngredients();
  filterAppliances();
  filterUstensils();
  
  /* N'ouvrir qu'un seul filtre à la fois */ 
  isArrowClicked();
  
  /* Remplir les filtres avec les données */ 
  fillFilters(recipes);

  /* Afficher les tags de chaque filtre */ 
  // Se déclenche lors que l'on clique sur arrowDown de chaque filtre.
  
}

getDataJson();