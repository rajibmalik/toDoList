import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM";
import { checkBoxEventListener } from "./eventListeners/checkBoxEventListener";
import { descriptionBtnClickListener } from "./eventListeners/descriptionBtnClickListener";

export const renderToDo = (function () {
  const content = document.querySelector("#content");

  function createToDo(toDo) {
    const container = createToDoDOM.createContainer();
    const checkBox = createCheckBox();
    const title = createTitle(toDo.getTitle());
    const descriptionBtn = createDescriptioBtn(toDo.getDescription());
    const dueDate = createDueDate(toDo.getDueDate());

    container.appendChild(checkBox);
    container.appendChild(title);
    container.appendChild(descriptionBtn);
    container.appendChild(dueDate);

    content.appendChild(container);
  }

  function createCheckBox() {
    const toDoElement = createToDoDOM.createCheckBox();
    checkBoxEventListener.createListener(toDoElement);

    return toDoElement;
  }

  function createTitle(title) {
    const titleElement = createToDoDOM.createTitle(title);

    return titleElement;
  }

  function createDescriptioBtn(description) {
    const buttonElement = createToDoDOM.createDescriptionBtn();
    descriptionBtnClickListener.createListener(buttonElement);

    return buttonElement;
  }

  function createDueDate(date) {
    const dateElement = createToDoDOM.createDueDate(date);

    return dateElement;
  }

  return { createToDo };
})();
