const PROJECTS_JSON_URL =
  "https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/projects.json";
const WORK_JSON_URL =
  "https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/work.json";

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
  backButton.classList = "back-button";

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

const getKits = () => {
  fetch(KITS_JSON_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.makerinchief);
      addCards(data.makerinchief, "kits-container", showKit);
    })
    .catch((error) => console.log("fetching projects url", error));
};

const showKit = (kit) => {
  const kitsContainer = document.getElementById("kits-container");
  clearDiv(kitsContainer);
  addBackButton(kitsContainer);
  const kitDiv = document.createElement("div");
  kitDiv.setAttribute("class", "kit-card-div");

  kitsContainer.append(kitDiv);

  // Carousel
  let photo_urls = [];
  kit.photos.forEach((photo) => {
    photo_urls.push(photo.url);
  });
  addCarousel(photo_urls, kitDiv);

  // Info
  addInfo(kit, kitDiv);
};

window.addEventListener(
  "load",
  function (event) {
    getKits();
  },
  false
);
