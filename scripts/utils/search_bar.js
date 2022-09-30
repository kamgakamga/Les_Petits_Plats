
const searchBarInput = document.querySelector('.search__input');
const noResultText = document.querySelector('.no-result-message');

/*** Recherche les cards qui inclus ce que l'on tape dans la main input. (sans les tags) ***/
function searchRecipesToDisplay() {

  const article = document.getElementsByName('article');
  const cards = document.querySelectorAll('article');
  const searchQuery = document.querySelector('.search__input').value.trim();

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  console.log('fonction de recherche des recettes à afficher - simple');
  return(article);
}


/** Fonction de recherche  **/
function searchLive() {
  let tagsUsed = false;
  recipesToDisplay = [];
  let mainInput;

  // Retourne un tableau 'recipeToDisplay' qui suit les règles de ma regex.
  if (searchBarInput.value.length > 2) {
    mainInput = searchBarInput.value;

    const regex = new RegExp(`${mainInput.trim().toLowerCase()}`);
    recipesToDisplay = recipes.filter((recipe) => {
      let recipeIsMatching = false;
      if (regex.test(recipe.name)) {
        recipeIsMatching = true;
      } else if (regex.test(recipe.description)) {
        recipeIsMatching = true;
      }
      recipe.ingredients.forEach(({ ingredient }) => {
        if (regex.test(ingredient)) {
          recipeIsMatching = true;
        }
      });
      return recipeIsMatching;
    });
    /* Remplir les filtres avec le tableau retourné */
    fillFilters(recipesToDisplay);
  }
  
  // déboguage empêche une recherche correct pour le moment.
  if (Array.from(document.querySelectorAll('.tag__ingredients--wrapper .tag__ingredient .tag-blue')).length > 0
  || Array.from(document.querySelectorAll('.tag__appliances--wrapper .tag__appliance .tag-green')).length > 0
  || Array.from(document.querySelectorAll('.tag__ustensils--wrapper .tag__ustensil .tag-red')).length > 0) {
    tagsUsed = true;
    console.log('on passe ici');
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
    recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }

  /** Message erreur dans le cas d'une mauvaise recherche **/
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = '';
    displayData(recipesToDisplay);
  } else {
    displayData(recipesToDisplay);
     noResultText.innerHTML = '<p>Aucune recette ne correspond à votre critère...</p>';
  }

  // Si la barre de recherche est vide ou moins de 3 caractères.
  if (((searchBarInput.value === '') || (searchBarInput.value.length < 3)) && tagsUsed === false) {
    fillFilters(recipes);
    displayData(recipes);
    noResultText.innerHTML = '';
  }
}

/*** EVENTS ***/
let typingTimer;
const typeInterval = 100;
searchBarInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(searchLive(), typeInterval);
});
