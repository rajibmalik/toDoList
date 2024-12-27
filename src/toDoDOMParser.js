import { ToDoManagerSingleton } from "./ToDoManagerSingleton";

export const toDoDOMParser = (function () {
  const toDoManager = ToDoManagerSingleton.getInstance();

  function parse(toDoDOMElement) {
    const toDoObject = findToDoObject(toDoDOMElement);
    console.log("TODO OBJECT: " + toDoObject);
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
    console.log("ID: " + id);
    const toDo = toDoManager.getToDo(id);
    console.log("TODO: " + toDo);

    return toDo;
  }

  return { parse, findToDoObject };
})();
