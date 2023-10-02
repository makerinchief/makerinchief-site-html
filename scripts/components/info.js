// const MODELS_URL = 'https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/models.json';

async function getModelType(type) {
  try {
    const response = await fetch(MODELS_URL);
    const data = await response.json();
    return data[type];
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function addInfo(info, parentDiv) {
  console.log(info);

  // Create the container to add all info components
  const infoContainer = document.createElement("div");
  infoContainer.classList = "info-container";

  const infoRow = document.createElement("div");
  infoRow.classList = "info-row";

  const infoKey = document.createElement("div");
  infoKey.classList = "info-key";

  const infoValue = document.createElement("div");
  infoValue.classList = "info-value";

  const infoName = document.createElement("div");
  infoName.classList = "info-name";
  infoName.textContent = info.name;
  infoContainer.appendChild(infoName);

  const 

  // const techTagDiv = document.createElement("div");
  // techTagDiv.classList = "tech-tag-div";
  // info.tech.map((value) => {
  //   const tag = document.createElement("a");
  //   tag.classList = "tech-tag";
  //   tag.textContent = value[0];
  //   tag.href = value[1];
  //   tag.target = "_blank";
  //   techTagDiv.append(tag);
  // });
  // infoValue.append(techTagDiv);

  // infoContainer.appendChild(techTagDiv);

  parentDiv.appendChild(infoContainer);
}
