import { ToDo } from "../ToDo";
import { renderToDo } from "../renderToDo";
import { toDoFormExtractor } from "../toDoFormExtractor";

export const submitToDoBtnClickListener = (function () {
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("dialog");
  const addToDoForm = document.querySelector("#addToDoForm");

  function createListener() {
    addToDoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const { valid, toDoData, error } = toDoFormExtractor.extractFormData();

      if (!valid) {
        alert(error);
        return;
      }

      // Create ToDo Manager Class
      const toDo = new ToDo(
        toDoData.title,
        toDoData.description,
        toDoData.dueDate,
        toDoData.priority
      );

      // Render the ToDo DOM element
      renderToDo.render(toDo);

      closeModal();
    });
  }

  function closeModal() {
    addToDoModal.classList.remove("open");
    mainContainer.classList.remove("blur");
    addToDoModal.close();
  }

  return { createListener };
})();
