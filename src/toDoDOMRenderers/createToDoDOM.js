export const createToDoDOM = (function () {
  const content = document.querySelector("#content");

  function createContainer() {
    const container = document.createElement("div");
    container.classList.add("toDoContainer");

    return container;
  }

  function createCheckBox() {
    const checkBoxContainer = document.createElement("div");
    checkBoxContainer.classList.add("toDoCheckBoxContainer");

    const checkBox = document.createElement("input");
    checkBox.classList.add("toDoCheckBox");
    checkBox.type = "checkbox";

    checkBoxContainer.appendChild(checkBox);

    return checkBoxContainer;
  }

  function createTitle(title) {
    const titleElementContainer = document.createElement("div");
    titleElementContainer.classList.add("toDoTitleContainer");

    const titleElement = document.createElement("p");
    titleElement.classList.add("toDoTitle");
    titleElement.textContent = title;

    titleElementContainer.appendChild(titleElement);

    return titleElementContainer;
  }

  function createDescriptionBtn() {
    const descriptionBtnContainer = document.createElement("div");
    descriptionBtnContainer.classList.add("toDoDescriptionBtnContainer");

    const descriptionBtn = document.createElement("button");
    descriptionBtn.classList.add("toDoDescriptionBtn");
    descriptionBtn.textContent = "DETAILS";

    descriptionBtnContainer.appendChild(descriptionBtn);

    return descriptionBtnContainer;
  }

  function createDueDate(dueDate) {
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("toDoDateContainer");

    const date = document.createElement("p");
    date.textContent = dueDate;
    date.classList.add("toDoDate");

    dateContainer.appendChild(date);

    return dateContainer;
  }

  function createPriority(priority) {}

  function createNotes(notes) {
    const notesElement = document.createElement("p");
    notesElement.classList.add("toDoNotes");
    notesElement.textContent = notes;

    return notesElement;
  }

  function createCheckList(checkList) {}

  return {
    createContainer,
    createCheckBox,
    createTitle,
    createDescriptionBtn,
    createDueDate,
  };
})();
