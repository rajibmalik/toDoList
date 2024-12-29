import { ToDoGroupManagerSingleton } from "../models/ToDoGroupManagerSingleton";
import { renderToDo } from "./renderToDo";
import { renderContent } from "./renderContent";
const toDoManager = ToDoGroupManagerSingleton.getInstance();
const toDoList = document.querySelector("#toDoList");
const toDoHeader = document.querySelector("#contentHeaderContainer");

export const renderToDoGroup = (function () {
  function renderAllToDos() {
    clearToDoGroup();
    renderContent.renderToDoGroupHeader("All ToDos");

    const allToDos = toDoManager.getAllToDos();

    renderToDosArray(allToDos);
  }

  function renderToDosArray(toDosArray) {
    toDosArray.forEach((toDo) => {
      renderToDo.render(toDo);
    });
  }

  function clearToDoGroup() {
    if (toDoHeader) {
      toDoHeader.innerHTML = "";
    }

    if (toDoList) {
      toDoList.innerHTML = "";
    }
  }

  return { renderAllToDos };
})();
