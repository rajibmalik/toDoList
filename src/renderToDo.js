import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM";
import { checkBoxEventListener } from "./eventListeners/checkBoxEventListener";

export const renderToDo = (function () {
  const content = document.querySelector("#content");

  function createToDo(toDo) {
    const container = createToDoDOM.createContainer();
    const checkBox = createCheckBox(toDo);
    const title = createTitle(toDo);

    container.appendChild(checkBox);
    container.appendChild(title);
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

  return { createToDo };
})();
