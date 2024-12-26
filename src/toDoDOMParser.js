import { ToDoManagerSingleton } from "./ToDoManagerSingleton";

export const toDoDOMParser = (function () {
  const toDoManager = ToDoManagerSingleton.getInstance();
  function parse(toDoDOMElement) {}

  function findToDoObject(toDoDOMElement) {
    const id = parseInt(toDoDOMElement.id);
    const toDo = toDoManager.getToDo(id);
    console.log(`ToDo: ${toDo}`);
  }

  return { parse, findToDoObject };
})();
