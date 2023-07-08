import { createMarkup } from "./utils/dom.js"

/**
 * Classe de la vue.
 */
export default class View {

    /**
     * Constructeur (injection du controleur)
     * @param {Controller} controller 
     */
    constructor(controller) {
        this.controller = controller;
    }

    /**
     * Méthode qui affiche le début de la page.
     */
    render = () => {
        const rootDom = document.getElementById("root");
        const titreH1 = createMarkup("h1", "Filtrage de Cards par Tags", rootDom, [{class:"h1 text-center"}]);
        const titreH2 = createMarkup("h2", "Filtre choisi : ", rootDom, [{class: "h4"}, {id: "filter-choice-title"}]);
        const spanFilter = createMarkup("span", "TOUS", titreH2, [{id: "span-selected-filter"}, {class: "text-success"}]);
        const divButtons = createMarkup("div", "", rootDom, [{class: "d-flex justify-content-center mt-3 px-3 py-3 border border-1 border-secondary rounded"}]);
        const buttonAllDom = createMarkup("button", "TOUS", divButtons, [{class: "btn btn-success btn-default mx-3 button-filter"}, {id: "button-all"}, {autofocus: "autofocus"}]);
        const buttonHtmlDom = createMarkup("button", "HTML", divButtons, [{class: "btn btn-success btn-default mx-3 button-filter"}, {id: "button-html"}]);
        const buttonCssDom = createMarkup("button", "CSS", divButtons, [{class: "btn btn-success btn-default mx-3 button-filter"}, {id: "button-css"}]);
        const buttonJsDom = createMarkup("button", "JS", divButtons, [{class: "btn btn-success btn-default mx-3 button-filter"}, {id: "button-js"}]);
        const cardsContainerDom = createMarkup("div", "", rootDom, [{id: "root-cards"}, {class: "d-flex flex-row justify-content-center align-items-center flex-wrap mt-2 mb-4"}]);
        setTimeout(() => {
            buttonAllDom.focus();
          }, 0);
    }

    /**
     * Méthode qui affiche les card dans la page.
     * @param {[Card]} cards : tableau des cards à afficher.
     */
    renderCards = (cards) => {
        const rootCards = document.getElementById("root-cards");
        rootCards.innerHTML = "";
        cards.forEach(card => {
            const cardDivDom = createMarkup("div", "", rootCards, [{class: "card-div"}]);
            const cardDom = createMarkup("div", "", cardDivDom, [{class: "card border border-secondary rounded w-100 h-100 text-bg-secondary card-block"}]);
            const cardBodyDom = createMarkup("div", "", cardDom, [{class: "p-4 card-body"}]);
            const cardTitleDom = createMarkup("h3", card.title, cardBodyDom, [{class: "h5 card-title text-center"}]);
            const cardTagDom = createMarkup("h4", card.tag, cardBodyDom, [{class: "h6 card-title text-center text-success"}]);
            const cardTextDom = createMarkup("p", card.text, cardBodyDom, [{class: "h6 card-text"}]);
        });
    }

    /**
     * Méthode qui créé les listeners de l'événement 'click' sur les boutons des filtres.
     */
    initClickListeners = () => {
        const filterButtons = document.getElementsByClassName("button-filter");
        Array.from(filterButtons).forEach((b) =>
            b.addEventListener("click", this.clickEventFilterButton)
        );
    }

    /**
     * Méthode déclenchée lors du clic sur un bouton et qui appelle le controleur en lui envoyant 'event.target'.
     * @param {event} event
     */
    clickEventFilterButton = (event) => {
        this.controller.applyFilter(event.target);
    }
}