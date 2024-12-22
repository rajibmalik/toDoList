export const createToDoDOM = (function () {
  const content = document.querySelector("#content");

  function createToDo(selector, toDo) {
    const toDoContainer = document.createElement("div");
    toDoContainer.classList.add("toDoContainer");

    const checkBox = createCheckBox();

    toDoContainer.appendChild(checkBox);

    return toDoContainer;
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
    const titleElement = document.createElement("h1");
    titleElement.classList.add("toDoTitle");
    titleElement.textContent = title;

    return titleElement;
  }

  function createDetailsbutton(title, priority, dueDate, description) {
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("toDoDescription");
    descriptionElement.textContent = description;

    return descriptionElement;
  }

  function createDueDate(dueDate) {}

  function createPriority(priority) {}

  function createNotes(notes) {
    const notesElement = document.createElement("p");
    notesElement.classList.add("toDoNotes");
    notesElement.textContent = notes;

    return notesElement;
  }

  function createCheckList(checkList) {}

  return { createToDo };
})();
