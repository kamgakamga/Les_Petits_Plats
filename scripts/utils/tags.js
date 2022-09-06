/*** Variables ***/

/** On sélectionne les items dans chaque filtre **/

const filterItemIngredients = document.getElementsByClassName('filter__ingredients--items');;
const filterItemAppliances = document.getElementsByClassName('filter__appliances--items');
const filterItemUstensils = document.getElementsByClassName('filter__ustensils--items');


let tagIngredientAlreadyAdded = false;
let tagApplianceAlreadyAdded = false;
let tagUstensilAlreadyAdded = false;

/** TAGS WRAPPERS - Conteneur des tags **/

const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
const tagApplianceWrapper = document.querySelector('.tag__appliances--wrapper');
const tagUstensilWrapper = document.querySelector('.tag__ustensils--wrapper');

/*** FUNCTIONS ***/

/** Ajouter des tags pour les filtres **/

/* Ingrédients */

function addTagFilterIngredients() {
  if (tagIngredientAlreadyAdded === false) {
    tagIngredientAlreadyAdded = true;
    Array.from(filterItemIngredients).forEach((element) => {
      element.addEventListener('click', (e) => {
        
        const tagIngredient = document.createElement('div');
        tagIngredient.setAttribute('class', 'tag__ingredient');
        tagIngredient.classList.add('tagIngredient')
        tagIngredient.innerHTML = e.target.outerHTML;
        
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.classname = 'deleteIcon';
        
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteIconImg.addEventListener('click', () => {
          tagIngredient.remove();
          return false;
        });
        tagIngredientWrapper.appendChild(tagIngredient);
        tagIngredient.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
      });
    });
  }
  console.log(' 8 - Création des tags pour fil.Ingredient');
}

/* Appareils */ 

function addTagFilterAppliances() {
  if (tagApplianceAlreadyAdded === false) {
    tagApplianceAlreadyAdded = true;
    Array.from(filterItemAppliances).forEach((element) => {
      element.addEventListener('click', (e) => {
        
        const tagAppliance = document.createElement('div');
        tagAppliance.setAttribute('class', 'tag__appliance');
        tagAppliance.classList.add('tagAppliance');
        tagAppliance.innerHTML = e.target.outerHTML;
        
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagAppliance.remove();
          return false;
        });
        tagApplianceWrapper.appendChild(tagAppliance);
        tagAppliance.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
      });
    });
  }
  console.log(' 9 - Création des tags pour fil.Appareil');
}

/* Ustensils */ 

function addTagFilterUstensils() {
  if (tagUstensilAlreadyAdded === false) {
    tagUstensilAlreadyAdded = true;
    Array.from(filterItemUstensils).forEach((element) => {
      element.addEventListener('click', (e) => {
        
        const tagUstensil = document.createElement('div');
        tagUstensil.setAttribute('class', 'tag__ustensil');
        tagUstensil.classList.add('tagUstensil');
        tagUstensil.innerHTML = e.target.outerHTML;
        
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagUstensil.remove();
          return false;
        });
        tagUstensilWrapper.appendChild(tagUstensil);
        tagUstensil.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
      });
    });
  }
  console.log(' 10 - Création des tags pour fil.Ustensil');
}


/** TAG FILTRE RECIPES DISPLAY **/

/* filteredRecipesWithTags */
function filteredRecipesWithTags(recipesToFilter) {
  /* Faire des tableaux des items afficher pour chaque filtre */ 
  const taggedIngredientsDOM = Array.from(document.querySelectorAll('.filter__ingredients--items'));

  const taggedAppliancesDOM = Array.from(document.querySelectorAll('.filter__appliances--items'));

  const taggedustensilsDOM = Array.from(document.querySelectorAll('.filter__ustensils--items'));

  let recipesToDisplay = [];
  let taggedIngredients = [];
  let taggedAppliances = [];
  let taggedUstensils = [];

  /* Créer des tableaux avec map contenant le texte de chaque tableau */
  taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText);
  taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => taggedAppliance.innerText);
  taggedUstensils = taggedustensilsDOM.map((taggedUstensil) => taggedUstensil.innerText);

  /* Définir le tableau recipesToDisplay un filtre de recipes */
  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let ustensilIsMatching = false;

    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;

    let ingredientsInTheRecipe = [];
    let appliancesInTheRecipe = [];
    let ustensilsInTheRecipe = [];

    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => ingredient);
    
    appliancesInTheRecipe.push(recipe.appliance);
    
    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil);

    if(taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          ingredientsMatching += 1;
        }
      });
    }

    if(taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancesInTheRecipe.includes(taggedAppliance)) {
          appliancesMatching += 1;
        }
      });
    }
    
    if (taggedUstensils.length > 0) {
      taggedUstensils.forEach((taggedUstensil) => {
        if (ustensilsInTheRecipe.includes(taggedUstensil)) {
          ustensilsMatching += 1;
        }
      });
    }

    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }

    if (taggedAppliances.length > 0) {
      if (appliancesMatching > 0) {
        applianceIsMatching = true;
      }
    } else applianceIsMatching = true;

    if (ustensilIsMatching === taggedUstensils.length) {
      ustensilIsMatching = true;
    }

    if ((ingredientIsMatching === true) && (applianceIsMatching === true) && (ustensilIsMatching === true)) {
      recipeIsMatching = true;
    }

    return recipeIsMatching;
  });
  
  return recipesToDisplay;
}