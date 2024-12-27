import { descriptionModalExitBtnClickListener } from "../eventListeners/toDo/description/descriptionModalExitBtnClickListener";

export const descriptionBtnModal = (function () {
  function createContainer(toDo) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("descriptionModal");

    const dialogWrapper = document.createElement("div");
    dialogWrapper.classList.add("descriptionModalWrapper");

    const header = createHeader(toDo.title);
    const informationContainer = document.createElement("div");
    informationContainer.className = "descriptionModalInformationContainer";

    const description = createSubheading("Details:", toDo.description);
    const dueDate = createSubheading("Due Date:", toDo.dueDate);
    const priority = createSubheading("Priority:", toDo.priority);

    dialogWrapper.appendChild(header);

    informationContainer.appendChild(dueDate);
    informationContainer.appendChild(priority);
    informationContainer.appendChild(description);

    dialogWrapper.appendChild(informationContainer);

    dialog.appendChild(dialogWrapper);

    // descriptionModalExitBtnClickListener.createListener();

    return dialog;
  }

  function createHeader(title) {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("descriptionModalHeaderContainer");

    const header = document.createElement("h2");
    header.textContent = title;
    header.classList.add("descriptionModalHeader");

    const exitBtn = document.createElement("button");
    exitBtn.classList.add("fa-solid", "fa-x");
    exitBtn.classList.add("exitBtn");

    headerContainer.appendChild(header);
    headerContainer.appendChild(exitBtn);

    return headerContainer;
  }

  function createSubheading(headerName, infoData) {
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("descriptionModalSubContainer");

    const headerContainer = document.createElement("div");
    headerContainer.className = "descriptionModalSubHeaderContainer";
    const header = document.createElement("h3");
    header.classList.add("descriptionModalSubHeading");
    header.textContent = headerName;

    const infoContainer = document.createElement("div");
    infoContainer.className = "descriptionModalInfoContainer";
    const info = document.createElement("p");
    info.classList.add("descriptionModalInfo");
    info.textContent = infoData;

    headerContainer.appendChild(header);
    infoContainer.appendChild(info);

    descriptionContainer.appendChild(headerContainer);
    descriptionContainer.appendChild(infoContainer);

    return descriptionContainer;
  }

  return { createContainer };
})();
