import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM";
import { checkBoxEventListener } from "./eventListeners/checkBoxEventListener";

export const renderToDo = (function () {
  const content = document.querySelector("#content");

  function createToDo(toDo) {
    const toDoElement = createToDoDOM.createToDo(toDo);
    checkBoxEventListener.createListener(toDoElement);

    content.appendChild(toDoElement);
  }

  return { createToDo };
})();
