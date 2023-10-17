const RESOURCES_JSON_URL = "../../assets/jsons/resources.json";

const getResources = () => {
  fetch(RESOURCES_JSON_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showResources(data);
    })
    .catch((error) => console.log("fetching projects url", error));
};

const showResources = (resources) => {
  console.log(resources);
  const resourcesContainer = document.getElementById("resources-container");

  resources.map((resource) => {
    const resourceDiv = document.createElement("div");
    resourceDiv.classList = "resource-div";

    // const resourceName = document.createElement("h3");
    // const resourceInfo = document.createElement("p");

    // const resourceImageDiv = document.createElement("div");
    const resourceImage = document.createElement("img");
    resourceImage.classList = "resource-image";
    resourceImage.src = resource.photo;
    // resourceImageDiv.appendChild(resourceImage);

    const resourceLink = document.createElement("a");
    resourceLink.classList = "resource-link";
    // resourceLink.textContent = resource.name;
    resourceLink.href = resource.url;
    resourceLink.target = "_blank";
    resourceLink.appendChild(resourceImage);

    resourceDiv.appendChild(resourceLink);
    // resourceDiv.appendChild(resourceImage);
    // resourceDiv.appendChild(resourceInfo);

    resourcesContainer.append(resourceDiv);
  });
};

window.addEventListener(
  "load",
  function (event) {
    getResources();
  },
  false
);
