import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM";
import { checkBoxEventListener } from "./eventListeners/checkBoxEventListener";
import { descriptionBtnClickListener } from "./eventListeners/descriptionBtnClickListener";

export const renderToDo = (function () {
  const content = document.querySelector("#content");

  function createToDo(toDo) {
    const container = createToDoDOM.createContainer();
    const checkBox = createCheckBox(toDo);
    const title = createTitle(toDo);
    const descriptionBtn = createDescriptioBtn(toDo);

    container.appendChild(checkBox);
    container.appendChild(title);
    container.appendChild(descriptionBtn);
    content.appendChild(container);
  }

  function createCheckBox(toDo) {
    const toDoElement = createToDoDOM.createCheckBox(toDo);
    checkBoxEventListener.createListener(toDoElement);

    return toDoElement;
  }

  function createTitle(toDo) {
    const titleElement = createToDoDOM.createTitle(toDo.getTitle());

    return titleElement;
  }

  function createDescriptioBtn(toDo) {
    const buttonElement = createToDoDOM.createDescriptionBtn();
    descriptionBtnClickListener.createListener(buttonElement);

    return buttonElement;
  }

  return { createToDo };
})();
