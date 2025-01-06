import { deleteToast } from "./deleteToast";
import { ToDoGroupManagerSingleton } from "../../../models/ToDoGroupManagerSingleton";
const toDoManager = ToDoGroupManagerSingleton.getInstance();

export const deleteBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoDeleteBtn")) {
        const toDoElement = e.target.closest(".toDoContainer");

        if (toDoElement) {
          const projectName = document
            .querySelector("#toDoGroupHeader")
            .textContent.toLowerCase();

          toDoElement.remove();
          deleteToast.addToDOM(toDoElement);
          const toDoGroup = toDoManager.getToDoGroup(projectName);
          toDoGroup.deleteToDo(toDoElement.id);
        }
      }
    });
  }

  return { createListener };
})();
