import { sub } from "date-fns";

export const addProjectModal = (function () {
  function createModal() {
    const dialog = document.createElement("dialog");
    dialog.id = "addProjectModal";

    const dialogWrapper = document.createElement("div");
    dialogWrapper.id = "addProjectModalWrapper";

    const header = createHeader();
    const content = createContent();
    const buttons = createButtons();

    dialogWrapper.appendChild(header);
    dialogWrapper.appendChild(content);
    dialogWrapper.appendChild(buttons);

    dialog.appendChild(dialogWrapper);

    return dialog;
  }

  function createHeader() {
    const container = document.createElement("div");
    container.id = "addProjectHeaderContainer";

    const header = document.createElement("h2");
    header.id = "addProjectHeader";
    header.textContent = "Adding New Project";

    container.appendChild(header);

    return container;
  }

  function createContent() {
    const container = document.createElement("div");
    container.id = "addProjectContentContainer";

    const informationContainer = document.createElement("div");
    informationContainer.id = "addProjectInformationContainer";

    const subheader = document.createElement("h3");
    subheader.id = "addProjectContentHeader";
    subheader.textContent = "Name: ";

    const nameInput = document.createElement("input");
    nameInput.id = "addProjectNameInput";
    nameInput.type = "text";

    informationContainer.appendChild(subheader);
    informationContainer.appendChild(nameInput);
    container.appendChild(informationContainer);

    return container;
  }

  function createButtons() {
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "addProjectBtnContainer";

    const closeBtn = document.createElement("button");
    closeBtn.id = "addProjectCloseBtn";
    closeBtn.type = "button";
    closeBtn.textContent = "CLOSE";

    const submitBtn = document.createElement("button");
    submitBtn.id = "addProjectSubmitBtn";
    submitBtn.type = "button";
    submitBtn.textContent = "ADD";

    buttonContainer.appendChild(closeBtn);
    buttonContainer.appendChild(submitBtn);

    return buttonContainer;
  }

  return { createModal };
})();
