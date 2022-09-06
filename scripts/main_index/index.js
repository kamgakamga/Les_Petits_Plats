async function getDataJson() {
  const response = await fetch ('data/recipes.json');
  const recipes = await response.json();
  console.log('1 - ExtractionJSON Recipes');
  return recipes;
}

async function displayData(recipes) {
  const recipeSection = document.getElementById('recipes__cards');
  recipeSection.innerHTML = '';
  for (const recipe of recipes) {
    /* getRecipeCard is defined in recipes_cards.js */
    const recipeCard = getRecipeCard(recipe);
    recipeSection.appendChild(recipeCard);
  }
  console.log('3 - Afficher les Recipes :' ,recipes);
}

async function init() {
  
  /* ExtractionJSON recipes */ 
  const { recipes } = await getDataJson();
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
  addTagFilterIngredients();
  addTagFilterAppliances();
  addTagFilterUstensils();

  // searchRecipesToDisplay();
  // search();
}

init();