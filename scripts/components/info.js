async function addInfo(data, parentDiv) {
  const { name, info, tech, repos } = data;

  // Create the container to add all info components
  const infoContainer = document.createElement('div');
  infoContainer.classList = 'info-container';

  const infoName = document.createElement('h3');
  infoName.classList = 'info-name';
  infoName.textContent = name;
  infoContainer.appendChild(infoName);

  const infoDescription = document.createElement('p');
  infoDescription.classList = 'info-description';
  infoDescription.textContent = info;
  infoContainer.appendChild(infoDescription);

  const infoTags = document.createElement('div');
  infoTags.classList = 'info-tags';

  tech.map((value) => {
    const tag = document.createElement('a');
    tag.classList = 'info-tag';
    tag.textContent = value.name;
    tag.href = value.url;
    tag.target = '_blank';
    infoTags.append(tag);
  });

  infoContainer.appendChild(infoTags);

  const infoRepos = document.createElement('div');
  infoRepos.classList = 'info-repos';

  repos.map((repo) => {
    console.log(repo);
    const repoAnchor = document.createElement('a');
    repoAnchor.classList = 'kit-repo';
    // repoAnchor.textContent = repo.name;
    repoAnchor.href = repo.url;
    repoAnchor.target = '_blank';

    const repoIcon = document.createElement('i');

    console.log(repoIcon);
    if (repo.key === 'github') {
      repoIcon.classList = 'repo-icon fa-brands fa-github';
    } else if (repo.key === 'youtube') {
      repoIcon.classList = 'repo-icon fa-brands fa-youtube';
    }

    repoAnchor.append(repoIcon);
    infoRepos.append(repoAnchor);
  });

  infoContainer.appendChild(infoRepos);

  parentDiv.appendChild(infoContainer);
}
