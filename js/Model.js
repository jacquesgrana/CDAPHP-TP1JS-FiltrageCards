import Card from "./classes/Card.js";

/**
 * Classe du modèle.
 */
export default class Model {
  #cards;
  #tags;

  /**
   * Constructeur
   * cards ([Card]) : tableau des cards.
   * tags ([string]) : tableau des tags.
   */
  constructor() {
    this.#cards = [];
    this.#tags = [];
  }

  /**
   * Méthode d'initialisation.
   */
  init = () => {
    this.#tags = ["HTML", "CSS", "JS", "TOUS"];

    this.#cards.push(new Card("Miner du BC en js", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "JS"));
    this.#cards.push(new Card("Bootstrap news Css", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "CSS"));
    this.#cards.push(new Card("Animations Css", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "CSS"));
    this.#cards.push(new Card("HTML for dummies", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "HTML"));
    this.#cards.push(new Card("Doom en js", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "JS"));
    this.#cards.push(new Card("Bootstrap news Js", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "JS"));
    this.#cards.push(new Card("Animations Js", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "JS"));
    this.#cards.push(new Card("HTML breaking News", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "HTML"));

    this.#cards.push(new Card("Tout HTML5 en 5 min", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "HTML"));
    this.#cards.push(new Card("Pourquoi HTML c'est cool", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ", "HTML"));
    this.#cards.push(new Card("CEO Google HTML5", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "HTML"));
    this.#cards.push(new Card("HTML for boomers", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "HTML"));
    this.#cards.push(new Card("Js for hackers", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "JS"));
    this.#cards.push(new Card("Pourquoi Css c'est cool", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "CSS"));
    this.#cards.push(new Card("Pourquoi Js c'est cool", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "JS"));
    this.#cards.push(new Card("HTML challenge 2023", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid repudiandae omnis.", "HTML"));
  }

  /**
   * Getters et Setters
   */
  get cards() {
    return this.#cards;
  }

  set cards(newCards) {
    this.#cards = newCards;
  }
}
