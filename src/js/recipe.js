class Recipe {
  constructor() {
    this.apiKey = "a6cd38da916ca2ca176368d54041fa2d";
    this.appId = "7bdfdb31";
    this.linkFrom = Math.floor(Math.random() * 9);
    this.linkTo = this.linkFrom + 1;
    this.apiUrl = `http://api.edamam.com/search?q=chicken&app_id=${this.appId}&app_key=${this.apiKey}&cuisinetype=Indian&from=${this.linkFrom}&to=${this.linkTo}`;
    this.recipeEl = document.querySelector(".recipe");
    this.titleEl = document.querySelector(".recipe__title");
    this.imageEl = document.querySelector(".recipe__image");
    this.listEl = document.querySelector(".recipe__list");
    this.spinnerEl = document.querySelector(".spinner");
    this.init();
  }
  showLoading() {
    this.spinnerEl.classList.add("spinner--visible");
    this.recipeEl.classList.add("recipe--invisible");
  }

  hideLoading() {
    this.spinnerEl.classList.remove("spinner--visible");
    this.recipeEl.classList.remove("recipe--invisible");
  }

  getRecipe() {
    return fetch(this.apiUrl)
      .then(resp => resp.json())
      .then(data => data.hits[0].recipe);
  }

  showRecipe(rec) {
    this.titleEl.innerHTML = rec.label;
    this.imageEl.src = rec.image;
    this.listEl.innerHTML = "";
    let items = "";
    rec.ingredientLines.forEach(r => {
      items += `<li class="recipe__list-item">${r}</li>`;
    });
    this.listEl.innerHTML = items;
    this.hideLoading();
  }

  init() {
    this.showLoading();
    this.getRecipe().then(recipe => this.showRecipe(recipe));
  }
}

const button = document.querySelector(".recipes__button");
button.addEventListener("click", () => new Recipe());
