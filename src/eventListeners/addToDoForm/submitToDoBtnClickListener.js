import { ToDo } from "../../ToDo";
import { renderToDo } from "../../renderToDo";
import { toDoFormExtractor } from "../../toDoFormExtractor";
import { ToDoManagerSingleton } from "../../ToDoManagerSingleton";
const toDoManager = ToDoManagerSingleton.getInstance();

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

        const toDo = new ToDo(
          toDoData.title,
          toDoData.description,
          toDoData.dueDate,
          toDoData.priority
        );

        console.log("toDo ID: " + toDo.getId());

        // Render the ToDo DOM element
        renderToDo.render(toDo);
        toDoManager.addToDo(toDo);

        closeModal();
      }
    });
  }

  function closeModal() {
    addToDoModal.classList.remove("open");
    mainContainer.classList.remove("blur");
    addToDoModal.close();
  }

  return { createListener };
})();
