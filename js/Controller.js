import Model from "./Model.js";
import View from "./View.js";

/**
 * Classe du controleur.
 */
export default class Controller {
  #model;
  #view;
  constructor() {
    this.#model = new Model();
    this.#view = new View(this);
  }

  /**
   * Méthode d'initialisation de l'application.
   */
  init = () => {
    this.#model.init();
    this.#view.render();
    this.#view.initClickListeners(this.applyFilter);
  };

  /**
   * Méthode qui lance l'application.
   */
  run = () => {
    this.#view.renderCards(this.#model.cards);
  };

  /**
   * Méthode qui, selon le bouton cliqué (target), applique le filtre choisi ((tag : HTML, CSS ou JS)) sur le
   * tableau de Card ou le remet à l'état initial (tag : TOUS) puis lance l'affichage par la vue.
   * @param {Dom Element} target 
   */
  applyFilter = (target) => {
    //console.log('controller : clic sur :', target);
    const spanCurrentFilter = document.getElementById("span-selected-filter");
    let filteredCards = this.#model.cards.slice();
    switch (target.id) {
      case "button-all":
        spanCurrentFilter.innerHTML = "TOUS";
        filteredCards = this.#model.cards.slice();
        break;
      case "button-html":
        spanCurrentFilter.innerHTML = "HTML";
        filteredCards = filteredCards.filter(c => c.tag == "HTML");
        break;
      case "button-css":
        spanCurrentFilter.innerHTML = "CSS";
        filteredCards = filteredCards.filter(c => c.tag == "CSS");
        break;
      case "button-js":
        spanCurrentFilter.innerHTML = "JS";
        filteredCards = filteredCards.filter(c => c.tag == "JS");
        break;
    }
    this.#view.renderCards(filteredCards);
  };
}
