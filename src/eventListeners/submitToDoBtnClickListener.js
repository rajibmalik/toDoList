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

      const toDoData = toDoFormExtractor.extractFormData();

      const toDo = new ToDo(
        toDoData.title,
        toDoData.description,
        toDoData.dueDate,
        toDoData.priority
      );

      const toDoDOM = renderToDo.render(toDo);

      addToDoModal.classList.remove("open");
      mainContainer.classList.remove("blur");
      addToDoModal.close();
    });
  }

  return { createListener };
})();
