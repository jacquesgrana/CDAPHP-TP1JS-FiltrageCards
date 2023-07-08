/**
 * Classe representant une card.
 */
export default class Card {
    #title;
    #text;
    #tag;

    /**
     * Constructeur.
     * @param {String} title
     * @param {String} text 
     * @param {String} tag 
     */
    constructor(title, text, tag) {
        this.#title = title;
        this.#text = text;
        this.#tag = tag;
    }

    /**
     * Getters et Setters
     */
    get title() {
        return this.#title;
    }

    set title(new_title) {
        this.#title = new_title;
    }

    get text() {
        return this.#text;
    }

    set text(new_text) {
        this.#text = new_text;
    }

    get tag() {
        return this.#tag;
    }

    set tag(new_tag) {
        this.#tag = new_tag;
    }
}