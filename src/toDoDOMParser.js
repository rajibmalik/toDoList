import { ToDoGroupManagerSingleton } from "./models/ToDoGroupManagerSingleton";

export const toDoDOMParser = (function () {
  const toDoManager = ToDoGroupManagerSingleton.getInstance();

  function parse(project, toDoDOMElement) {
    const toDoObject = findToDoObject(project, toDoDOMElement);
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

  function findToDoObject(project, toDoDOMElement) {
    const id = parseInt(toDoDOMElement.id);
    const toDoGroup = toDoManager.getToDoGroup(project);
    const toDo = toDoGroup.getToDo(id);

    return toDo;
  }

  return { parse, findToDoObject };
})();
