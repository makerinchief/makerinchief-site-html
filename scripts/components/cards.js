function createCardButton(parentId, imageURL, header, short, clickHandler) {
  const parentDiv = document.getElementById(parentId);

  const cardBtn = document.createElement('button');
  cardBtn.classList = 'card card-button';

  cardBtn.onclick = (event) => {
    event.preventDefault();
    console.log(`${parentId} card clicked`);
    clickHandler();
  };

  const cardHeader = document.createElement('span');
  cardHeader.classList = 'card-header';

  const cardImgDiv = document.createElement('div');
  cardImgDiv.classList = 'card-image-div';
  const cardImg = document.createElement('img');

  const cardShort = document.createElement('span');
  cardShort.classList = 'card-short';

  cardHeader.textContent = header;
  cardImg.src = imageURL;
  cardShort.textContent = short;
  short;

  cardBtn.appendChild(cardHeader);
  cardImgDiv.appendChild(cardImg);
  cardBtn.appendChild(cardImgDiv);
  cardBtn.appendChild(cardShort);
  parentDiv.appendChild(cardBtn);
}

function createCardAnchor(
  parentId,
  imageURL = '',
  header = '',
  short = '',
  anchorUrl = '#'
) {
  const parentDiv = document.getElementById(parentId);

  const cardAnchor = document.createElement('a');
  cardAnchor.classList = 'card card-anchor';
  cardAnchor.href = anchorUrl;
  cardAnchor.target = '_blank';

  const cardHeader = document.createElement('span');
  cardHeader.classList = 'card-header';

  const cardImgDiv = document.createElement('div');
  cardImgDiv.classList = 'card-image-div';
  const cardImg = document.createElement('img');

  const cardShort = document.createElement('span');
  cardShort.classList = 'card-short';

  cardHeader.textContent = header;
  cardImg.src = imageURL;
  cardShort.textContent = short;
  short;

  cardAnchor.appendChild(cardHeader);
  cardImgDiv.appendChild(cardImg);
  cardAnchor.appendChild(cardImgDiv);
  cardAnchor.appendChild(cardShort);
  parentDiv.appendChild(cardAnchor);
}
