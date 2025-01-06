import { renderProject } from "../../../renders/renderProject";
import { ToDoGroupManagerSingleton } from "../../../models/ToDoGroupManagerSingleton";
const toDoManager = ToDoGroupManagerSingleton.getInstance();

export const submitProjectClickListener = (function () {
  const content = document.querySelector("#content");
  const projects = document.querySelector("#projects");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.id.includes("addProjectSubmitBtn")) {
        console.log("clicked submit");
        const modal = content.querySelector("#addProjectModal");
        if (modal) {
          const name = content.querySelector("#addProjectNameInput").value;
          const existingGroup = toDoManager.getToDoGroup(name);
          if (name != "" && !existingGroup) {
            renderProject.render(name);
          }
          modal.remove();
        }
      }
    });
  }

  return { createListener };
})();
