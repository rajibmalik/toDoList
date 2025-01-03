import { renderToDoGroup } from "../../renders/renderToDoGroup";
import { ToDoGroupManagerSingleton } from "../../models/ToDoGroupManagerSingleton";
const manager = ToDoGroupManagerSingleton.getInstance();

const projectSectionContainer = document.querySelector(
  "#projectSectionContainer"
);

export const projectClickListener = (function () {
  function createListener() {
    projectSectionContainer.addEventListener("click", (e) => {
      console.log("clicked project click listener");
      const project = e.target.closest(".projectsList");

      if (project) {
        const projectName = project.textContent;
        const toDos = manager.getToDoGroup(projectName);
        console.log("ToDo's: ");
        console.log(toDos);
        renderToDoGroup.renderToDosArray(toDos);
      }
    });
  }

  return { createListener };
})();

// const toDoElement = e.target.closest(".toDoContainer");
