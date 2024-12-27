import { createToDoDOM } from "./dom/createToDoDOM";
import { checkBoxEventListener } from "./eventListeners/toDo/checkBoxEventListener";
import { descriptionBtnClickListener } from "./eventListeners/toDo/description/descriptionBtnClickListener";
import { editBtnClickListener } from "./eventListeners/toDo/editBtnClickListener";
import { deleteBtnClickListener } from "./eventListeners/toDo/deleteBtnClickListener";

export const renderToDo = (function () {
  const content = document.querySelector("#toDoList");

  function render(toDo) {
    const container = createToDoDOM.createContainer(toDo.getId());
    const checkBox = createCheckBox(toDo.getId());
    const title = createTitle(toDo.getTitle());
    const informationContainer = createInformationContainer();
    const descriptionBtn = createDescriptionBtn(toDo.getDescription());
    const dueDate = createDueDate(toDo.getDueDate());
    const editAndDeleteBtnContainer = createEditAndDeleteBtnContainer();
    const editBtn = createEditBtn();
    const deleteBtn = createDeleteBtn();

    container.appendChild(checkBox);
    container.appendChild(title);
    informationContainer.appendChild(descriptionBtn);
    informationContainer.appendChild(dueDate);
    editAndDeleteBtnContainer.appendChild(editBtn);
    editAndDeleteBtnContainer.appendChild(deleteBtn);

    container.appendChild(informationContainer);
    container.appendChild(editAndDeleteBtnContainer);

    content.appendChild(container);
  }

  function createCheckBox(id) {
    const toDoElement = createToDoDOM.createCheckBox(id);
    // checkBoxEventListener.createListener();

    return toDoElement;
  }

  function createTitle(title) {
    const titleElement = createToDoDOM.createTitle(title);

    return titleElement;
  }

  function createInformationContainer() {
    const container = createToDoDOM.createInformationContainer();

    return container;
  }

  function createDescriptionBtn(description) {
    const btnElement = createToDoDOM.createDescriptionBtn();

    return btnElement;
  }

  function createDueDate(date) {
    const dateElement = createToDoDOM.createDueDate(date);

    return dateElement;
  }

  function createEditAndDeleteBtnContainer() {
    const container = createToDoDOM.createEditAndDeleteBtnContainer();

    return container;
  }

  function createEditBtn() {
    const btnElement = createToDoDOM.createEditButton();
    editBtnClickListener.createListener(btnElement);

    return btnElement;
  }

  function createDeleteBtn() {
    const btnElement = createToDoDOM.createDeleteButton();
    deleteBtnClickListener.createListener(btnElement);

    return btnElement;
  }

  return { render };
})();
