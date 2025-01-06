import { ToDoGroupManagerSingleton } from "../models/ToDoGroupManagerSingleton";
import { renderToDo } from "./renderToDo";
import { renderContent } from "./renderContent";
import { addToDoBtn } from "../dom/addToDoBtn";
const toDoManager = ToDoGroupManagerSingleton.getInstance();
const toDoList = document.querySelector("#toDoList");
const toDoHeader = document.querySelector("#contentHeaderContainer");

export const renderToDoGroup = (function () {
  function renderAllToDos() {
    clearToDoGroup();
    console.log("render all");

    const allToDos = toDoManager.getAllToDos();
    console.log("here");
    console.log(allToDos);

    renderToDoGroup(allToDos);
    renderContent.renderToDoGroupHeader("All");
  }

  function renderToDoGroup(toDosArray) {
    clearToDoGroup();
    toDosArray.forEach((toDo) => {
      renderToDo.render(toDo);
    });
  }

  function renderToDosArray(toDosArray) {
    clearToDoGroup();
    renderContent.renderToDoGroupHeader(toDosArray.getName());
    toDosArray.getToDos().forEach((toDo) => {
      renderToDo.render(toDo);
    });
  }

  function clearToDoGroup() {
    if (toDoHeader) {
      toDoHeader.innerHTML = "";
    }

    if (toDoList) {
      toDoList.innerHTML = "";
      toDoList.appendChild(addToDoBtn.create());
    }
  }

  return { renderAllToDos, renderToDosArray };
})();
