import { ToDoGroupManagerSingleton } from "../../../models/ToDoGroupManagerSingleton";
import { renderToDo } from "../../../renders/renderToDo";
import { renderContent } from "../../../renders/renderContent";
const toDoManager = ToDoGroupManagerSingleton.getInstance();

export const allClickListener = (function () {
  const allBtn = document.querySelector("#allBtn");
  const toDoList = document.querySelector("#toDoList");

  function createListener() {
    allBtn.addEventListener("click", () => {
      toDoList.innerHTML = "";

      // Get the ToDo objects
      // Convert them to DOM elements
      // Append the DOM elements to the toDoList container

      renderContent.renderToDoGroupHeader("All ToDos");

      const allToDos = toDoManager.getAllToDos();

      allToDos.forEach((toDo) => {
        console.log(toDo);
        renderToDo.render(toDo);
      });
    });
  }

  return { createListener };
})();
