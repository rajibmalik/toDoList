import { format } from "date-fns";

export const createToDoDOM = (function () {
  function create(toDo) {
    const container = createContainer(toDo.getId());
    const checkBox = createCheckBox(toDo.getId(), toDo.getIsComplete());
    const title = createTitle(toDo.getTitle(), toDo.getIsComplete());
    const informationContainer = createInformationContainer();
    const descriptionBtn = createDescriptionBtn(toDo.getIsComplete());
    const dueDate = createDueDate(toDo.getDueDate(), toDo.getIsComplete());
    const editAndDeleteBtnContainer = createEditAndDeleteBtnContainer();
    const editBtn = createEditButton(toDo.getIsComplete());
    const deleteBtn = createDeleteButton(toDo.getIsComplete());

    container.appendChild(checkBox);
    container.appendChild(title);
    informationContainer.appendChild(descriptionBtn);
    informationContainer.appendChild(dueDate);
    editAndDeleteBtnContainer.appendChild(editBtn);
    editAndDeleteBtnContainer.appendChild(deleteBtn);

    container.appendChild(informationContainer);
    container.appendChild(editAndDeleteBtnContainer);

    return container;
  }

  function createContainer(id) {
    const container = document.createElement("div");
    container.classList.add("toDoContainer");
    container.id = id;

    return container;
  }

  function createCheckBox(id, isComplete) {
    const checkBoxContainer = document.createElement("label");
    checkBoxContainer.classList.add("toDoCheckBoxContainer");
    checkBoxContainer.setAttribute("for", id);

    const checkBox = document.createElement("input");
    checkBox.classList.add("toDoCheckBox");
    if (isComplete) {
      checkBox.checked = true;
    }
    checkBox.id = id;
    checkBox.type = "checkbox";

    const checkBoxSpan = document.createElement("span");
    checkBoxSpan.classList.add("toDoCheckBoxSpan");

    checkBoxContainer.appendChild(checkBox);
    checkBoxContainer.appendChild(checkBoxSpan);

    return checkBoxContainer;
  }

  function createTitle(title, isComplete) {
    const titleElementContainer = document.createElement("div");
    titleElementContainer.classList.add("toDoTitleContainer");

    const titleElement = document.createElement("p");
    titleElement.classList.add("toDoTitle");
    if (isComplete) {
      titleElement.classList.add("completed");
    }
    titleElement.textContent = title;

    titleElementContainer.appendChild(titleElement);

    return titleElementContainer;
  }

  function createInformationContainer() {
    const container = document.createElement("div");
    container.classList.add("toDoInformationContainer");

    return container;
  }

  function createDescriptionBtn(isComplete) {
    const descriptionBtnContainer = document.createElement("div");
    descriptionBtnContainer.classList.add("toDoDescriptionBtnContainer");

    const descriptionBtn = document.createElement("button");
    descriptionBtn.classList.add("toDoDescriptionBtn");
    if (isComplete) {
      descriptionBtn.classList.add("completed");
    }
    descriptionBtn.textContent = "DETAILS";

    descriptionBtnContainer.appendChild(descriptionBtn);

    return descriptionBtnContainer;
  }

  function createDueDate(dueDate, isComplete) {
    const dateObject = new Date(dueDate);
    console.log("date: " + dueDate);
    console.log("dateObject: " + dateObject);
    const formattedDate = format(dateObject, "dd-MM-yyyy");
    console.log("formatted date: " + formattedDate);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("toDoDateContainer");

    const date = document.createElement("p");
    date.textContent = formattedDate;
    date.classList.add("toDoDate");
    if (isComplete) {
      date.classList.add("completed");
    }

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

  function createEditAndDeleteBtnContainer() {
    const container = document.createElement("div");
    container.classList.add("toDoEditAndDeleteBtnContainer");

    return container;
  }

  function createEditButton(isComplete) {
    const editButtonContainer = document.createElement("div");
    editButtonContainer.classList.add("toDoEditBtnContainer");

    const editButton = document.createElement("button");
    editButton.classList.add("toDoEditBtn");
    if (isComplete) {
      editButton.classList.add("completed");
    }

    editButtonContainer.appendChild(editButton);

    return editButtonContainer;
  }

  function createDeleteButton(isComplete) {
    const deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.classList.add("toDoDeleteBtnContainer");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash");
    deleteButton.classList.add("toDoDeleteBtn");
    if (isComplete) {
      deleteButton.classList.add("completed");
    }

    deleteButtonContainer.appendChild(deleteButton);

    return deleteButtonContainer;
  }

  return {
    create,
    createContainer,
    createCheckBox,
    createTitle,
    createInformationContainer,
    createDescriptionBtn,
    createDueDate,
    createEditAndDeleteBtnContainer,
    createEditButton,
    createDeleteButton,
  };
})();
