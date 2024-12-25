import { ToDo } from "../ToDo";
import { renderToDo } from "../renderToDo";

export const submitToDoBtnClickListener = (function () {
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("dialog");
  const addToDoForm = document.querySelector("#addToDoForm");

  function createListener() {
    addToDoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = addToDoForm.querySelector("#titleInput").value;
      const description = addToDoForm.querySelector("#detailsInput").value;
      const dueDate = addToDoForm.querySelector("#dueDateInput").value;
      let priority = "none";

      const priorities = Array.from(
        addToDoForm.querySelectorAll(".priorityBtn")
      );

      priorities.forEach((btn) => {
        console.log(`Button: ${btn}`);
        console.log(`Button clicked ${btn.dataset.clicked}`);
        if (btn.dataset.clicked === "true") {
          priority = btn.value;
        }
      });

      console.log(title, description, dueDate, priority);

      const toDo = new ToDo(title, description, dueDate, priority);

      const toDoDOM = renderToDo.render(toDo);

      addToDoModal.classList.remove("open");
      mainContainer.classList.remove("blur");
      addToDoModal.close();
    });
  }

  return { createListener };
})();
