/** On sélectionne les items dans chaque filtres **/

let filterItemIngredients = document.getElementsByClassName('filter__ingredients--items');;
const filterItemAppliances = document.getElementsByClassName('filter__appliances--items');
const filterItemUstensils = document.getElementsByClassName('filter__ustensils--items');

// console.log(filterItemIngredients);

let tagIngredientAlreadyAdded = false;
let tagApplianceAlreadyAdded = false;
let tagUstensilAlreadyAdded = false;

/** TAGS WRAPPERS **/

const tagIngredientWrapper = document.querySelector('.tag__ingredients--wrapper');
const tagApplianceWrapper = document.querySelector('.tag__appliances--wrapper');
const tagUstensilWrapper = document.querySelector('.tag__ustensils--wrapper');

/** Add tag for filters **/

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
}


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
}


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
}

/** TAG FILTRE RECIPES **/

function filteredRecipesWithTags(recipesToFilter) {
  const taggedIngredientsDOM = Array.from(document.querySelectorAll('.tag__ingredients--wrapper .tag__ingredient .filter__ingredients--items'));

  const taggedAppliancesDOM = Array.from(document.querySelectorAll('tag__appliances--wrapper .tag__appliance .filter__appliances--items'));

  const taggedustensilsDOM = Array.from(document.querySelectorAll('.tag__ustensils--wrapper .tag__ustensil .filter__ustensils--items'));

  let recipesToDisplay = [];
  let taggedIngredients = [];
  let taggedAppliances = [];
  let taggedUstensils = [];

  taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText);
  taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => taggedAppliance.innerText);
  taggedUstensils = taggedustensilsDOM.map((taggedUstensil) => taggedUstensil.innerText);

  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let ustensilIsMatching = false;

    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;

    let ingredientsInTheRecipe = [];
    let appliancessInTheRecipe = [];
    let ustensilsInTheRecipe = [];

    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => ingredient);
    appliancessInTheRecipe.push(recipe.appliance);
    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil);

    if(taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          ingredientsMatching+= 1;
        }
      });
    }

    if(taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancessInTheRecipe.includes(taggedAppliance)) {
          appliancesMatching+= 1;
        }
      });
    }
    
    if (taggedUstensils.length > 0) {
      taggedUstensils.forEach((taggedUstensil) => {
        if (ustensilsInTheRecipe.includes(taggedUstensil)) {
          ustensilsMatching+= 1;
        }
      });
    }

    if (ingredientMatching === taggedIngredients.length) {
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

  /* FillFilters est défini dans utils/filters_recipes.js (ligne 276) */
   fillFilters(recipesToDisplay);
  return recipesToDisplay;
} 