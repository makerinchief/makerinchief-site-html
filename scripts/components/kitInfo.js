async function addKitInfo(kit, parentDiv) {
  console.log(kit);

  const { name, info, tech, repos } = kit;

  // Create the container to add all info components
  const infoContainer = document.createElement("div");
  infoContainer.classList = "info-container";

  const infoName = document.createElement("h3");
  infoName.classList = "kit-name";
  infoName.textContent = name;
  infoContainer.appendChild(infoName);

  const infoDescription = document.createElement("p");
  infoDescription.classList = "kit-description";
  infoDescription.textContent = info;
  infoContainer.appendChild(infoDescription);

  const techTags = document.createElement("div");
  techTags.classList = "kit-tags";

  tech.map((value) => {
    const tag = document.createElement("a");
    tag.classList = "kit-tag";
    tag.textContent = value.name;
    tag.href = value.url;
    tag.target = "_blank";
    techTags.append(tag);
  });

  infoContainer.appendChild(techTags);

  const kitRepos = document.createElement("div");
  kitRepos.classList = "kit-repos";

  repos.map((value) => {
    const repo = document.createElement("a");
    repo.classList = "kit-repo";
    repo.textContent = value.name;
    repo.href = value.url;
    repo.target = "_blank";
    kitRepos.append(repo);
  });

  infoContainer.appendChild(kitRepos);

  parentDiv.appendChild(infoContainer);
}
