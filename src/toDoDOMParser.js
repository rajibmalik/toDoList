import { ToDoManagerSingleton } from "./ToDoManagerSingleton";

export const toDoDOMParser = (function () {
  const toDoManager = ToDoManagerSingleton.getInstance();

  function parse(toDoDOMElement) {
    const toDoObject = findToDoObject(toDoDOMElement);
    const title = toDoObject.getTitle();
    const description = toDoObject.getDescription();
    const dueDate = toDoObject.getDueDate();
    const priority = toDoObject.getPriority();

    const toDoData = {
      title,
      description,
      dueDate,
      priority,
    };

    return toDoData;
  }

  function findToDoObject(toDoDOMElement) {
    const id = parseInt(toDoDOMElement.id);
    const toDo = toDoManager.getToDo(id);
    // console.log(`ToDo: ${toDo}`);

    return toDo;
  }

  return { parse, findToDoObject };
})();
