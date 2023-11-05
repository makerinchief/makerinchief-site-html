function addCards(root = "root", cardsData, parentId, clickHandler) {
  const parentDiv = document.getElementById(parentId);
  clearDiv(parentDiv);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList = root + "-cards-container";

  cardsData.forEach((cardInfo) => {
    const card = document.createElement("button");
    card.classList = root + "-card";
    card.onclick = (event) => {
      event.preventDefault();
      clickHandler(cardInfo);
    };

    const cardName = document.createElement("span");
    cardName.classList = root + "-card-name";
    cardName.textContent = cardInfo.name;

    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList = root + "-card-img";

    const cardImg = document.createElement("img");
    cardImg.src = cardInfo.photos[0].url;

    const cardShort = document.createElement("span");
    cardShort.classList = root + "-card-short";
    cardShort.textContent = cardInfo.short;

    card.appendChild(cardName);
    cardImgDiv.appendChild(cardImg);
    card.appendChild(cardImgDiv);
    card.appendChild(cardShort);
    cardsContainer.appendChild(card);
  });

  parentDiv.appendChild(cardsContainer);
}
