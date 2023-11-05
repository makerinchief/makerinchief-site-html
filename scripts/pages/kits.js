const KITS_JSON_URL = "../../assets/jsons/kitsData.json";

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// Adds a back button when kit is shown to allow user to
// go back to kits list.
const addBackButton = (parentDiv) => {
  const backButton = document.createElement("button");
  backButton.textContent = "BACK";
  backButton.classList = "back-button";

  backButton.onclick = (event) => {
    getKits();
  };

  parentDiv.appendChild(backButton);
};

// Remove the back button when showing the kits list.
const removeBackButton = () => {
  if (document.getElementById("back-button")) {
    document.getElementById("back-button").remove();
  }
};

// Gets the current kitsData.json and creates a card for
// each kit.
const getKits = () => {
  fetch(KITS_JSON_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // from /scripts/cards.js
      addCards("kits-container", data.makerinchief, "kits-container", showKit);

      // Use for testing/styling
      // showKit(data.makerinchief[0]);
    })
    .catch((error) => console.log("fetching projects url", error));
};

// Shows the info and media for the kit being clicked.
const showKit = (kit) => {
  const kitsContainer = document.getElementById("kits-container");
  clearDiv(kitsContainer);
  addBackButton(kitsContainer);

  const kitDiv = document.createElement("div");
  kitDiv.setAttribute("class", "kit-div");

  kitsContainer.append(kitDiv);

  // Carousel
  let photo_urls = [];
  kit.photos.forEach((photo) => {
    photo_urls.push(photo.url);
  });

  // from /scripts/carousel.js
  addCarousel(photo_urls, kitDiv);

  // from /scripts/kitInfo.js
  addKitInfo(kit, kitDiv);
};

// Get the kits when the page loads.
window.addEventListener(
  "load",
  function (event) {
    getKits();
  },
  false
);
