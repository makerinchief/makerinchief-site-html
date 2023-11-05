function addCards(root, cards, div, clickHandler) {
  const parentDiv = document.getElementById(div);
  clearDiv(parentDiv);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList = root + "-cards-container";

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList = root + "-card-div";

    const cardName = document.createElement("h2");
    cardName.classList = root + "-card-name";
    cardName.textContent = card.name;

    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList = root + "-card-img";
    cardImgDiv.onclick = (event) => {
      event.preventDefault();
      clickHandler(card);
    };

    const cardImg = document.createElement("img");
    cardImg.src = card.photos[0].url;

    const cardShort = document.createElement("h3");
    cardShort.classList = root + "-card-short";
    cardShort.textContent = card.short;

    cardDiv.appendChild(cardName);
    cardImgDiv.appendChild(cardImg);
    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardShort);
    cardsContainer.appendChild(cardDiv);
  });

  parentDiv.appendChild(cardsContainer);
}
