function clearDiv(parentId = '') {
  console.log(`Clearing: ${parentId}`);
  const parentDiv = document.getElementById(parentId);

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
}
