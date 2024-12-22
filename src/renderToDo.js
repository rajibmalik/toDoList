import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM";

export const renderToDo = (function () {
  const content = document.querySelector("#content");

  function createToDo(toDo) {
    const toDoElement = createToDoDOM.createToDo(toDo);
    content.appendChild(toDoElement);
  }

  return { createToDo };
})();
