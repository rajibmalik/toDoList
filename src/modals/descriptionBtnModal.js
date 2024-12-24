export const descriptionBtnModal = (function () {
  function createContainer(toDo) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("descriptionModal");

    const header = createHeader(toDo.getTitle());

    dialog.appendChild(header);

    return dialog;
  }

  function createHeader(title) {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("descriptionModalHeaderContainer");

    const header = document.createElement("h1");
    header.textContent = title;
    header.classList.add("descriptionModalHeader");

    headerContainer.appendChild(header);

    return headerContainer;
  }

  return { createContainer };
})();
