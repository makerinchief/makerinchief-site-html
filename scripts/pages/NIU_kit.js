const KITS_JSON_URL = "../../assets/jsons/kitsData.json";

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const addBackButton = (parentDiv) => {
  const backButton = document.createElement("button");
  backButton.textContent = "BACK";
  backButton.setAttribute("id", "back-button");
  backButton.onclick = (event) => {
    getKits();
  };
  parentDiv.appendChild(backButton);
};

const removeBackButton = () => {
  if (document.getElementById("back-button")) {
    document.getElementById("back-button").remove();
  }
};

const getKit = () => {
  fetch(KITS_JSON_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // addCards(data, "container", showWork);
    })
    .catch((error) => console.log("fetching work url", error));
};

const showKits = (work) => {
  const kitsContainer = document.getElementById("kits-container");
  clearDiv(kitsContainer);
  addBackButton(kitsContainer);

  const workDiv = document.createElement("div");
  workDiv.setAttribute("class", "kits-div");

  kitsContainer.append(workDiv);

  // Carousel
  // addCarousel(work.photos, workDiv);

  // Info
  // addInfo(work, workDiv, "work");
};

window.addEventListener(
  "load",
  function (event) {
    getKits();
  },
  false
);
