import { ToDo } from "../../models/ToDo";
import { renderToDo } from "../../renders/renderToDo";
import { toDoFormExtractor } from "../../toDoFormExtractor";
import { ToDoGroupManagerSingleton } from "../../models/ToDoGroupManagerSingleton";
import { ToDoGroup } from "../../models/ToDoGroup";
const toDoManager = ToDoGroupManagerSingleton.getInstance();

export const submitToDoBtnClickListener = (function () {
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("dialog");
  const addToDoForm = document.querySelector("#addToDoForm");

  function createListener() {
    addToDoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const { valid, toDoData } = toDoFormExtractor.extractFormData();

      if (valid) {
        // Create ToDo Manager Class
        console.log(`ToDo: title: ${toDoData.title}
          description: ${toDoData.description}
          dueDate: ${toDoData.dueDate}
          priority: ${toDoData.priority}`);

        const project = document
          .querySelector("#toDoGroupHeader")
          .textContent.toLowerCase();

        const toDo = new ToDo(
          toDoData.title,
          toDoData.description,
          toDoData.dueDate,
          toDoData.priority,
          project
        );

        console.log("toDo ID: " + toDo.getId());
        console.log("toDo project: " + toDo.getProject());

        // 1) Instantiate the ToDo
        // 2) If there is not an existing ToDoGroup, create one
        // 3) Add the ToDoGroup to the ToDoGroup singleton manager
        // 3) Add the ToDo to the ToDoGroup

        // If there is not an existing to do group with the project name
        let existingProject = toDoManager.getToDoGroup(project);
        // Create a ToDoGroup with the relevant name
        if (!existingProject) {
          console.log("adding new group");
          existingProject = new ToDoGroup(project);
          toDoManager.addToDoGroup(existingProject);
          console.log("new project: " + existingProject);
        }

        toDoManager.getToDoGroup(project).addToDo(toDo);
        console.log("here: ", toDoManager.getToDoGroup(project).getToDos());

        // Render the DOM ToDo element
        renderToDo.render(toDo);

        closeModal();
      }
    });
  }

  function closeModal() {
    addToDoModal.classList.remove("open");
    mainContainer.classList.remove("blur");
    addToDoModal.close();
  }

  function createToDo() {}

  return { createListener };
})();
