async function getDataJson() {
  const response = await fetch ('data/recipes.json');
  const recipes = await response.json();
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
}

async function init() {
  const { recipes } = await getDataJson();
  displayData(recipes);
}

init();