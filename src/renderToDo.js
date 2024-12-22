import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM";
import { checkBoxEventListener } from "./eventListeners/checkBoxEventListener";

export const renderToDo = (function () {
  const content = document.querySelector("#content");

  function createToDo(toDo) {
    const container = createToDoDOM.createContainer();
    const checkBox = createCheckBox(toDo);

    container.appendChild(checkBox);
    content.appendChild(container);
  }

  function createCheckBox(toDo) {
    const toDoElement = createToDoDOM.createCheckBox(toDo);
    checkBoxEventListener.createListener(toDoElement);

    return toDoElement;
  }

  return { createToDo };
})();
