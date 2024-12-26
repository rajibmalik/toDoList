import { ToDoManagerSingleton } from "../../ToDoManagerSingleton";

export const checkBoxEventListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoCheckBoxSpan")) {
        // Find the parent toDoContainer of the checkbox
        const toDoContainer = e.target.closest(".toDoContainer");
        const toDoCheckBox = toDoContainer.querySelector(".toDoCheckBox");
        const toDoCheckBoxSpan =
          toDoContainer.querySelector(".toDoCheckBoxSpan");

        if (toDoContainer) {
          toDoCheckBox.checked = !toDoCheckBox.checked;
          const titleElement = toDoContainer.querySelector(".toDoTitle");
          const descriptionBtn = toDoContainer.querySelector(
            ".toDoDescriptionBtn"
          );
          const dateText = toDoContainer.querySelector(".toDoDate");
          const editBtn = toDoContainer.querySelector(".toDoEditBtn");
          const deleteBtn = toDoContainer.querySelector(".toDoDeleteBtn");

          [titleElement, descriptionBtn, dateText, editBtn, deleteBtn].forEach(
            (element) => element?.classList.toggle("completed")
          );

          const toDoManager = ToDoManagerSingleton.getInstance();
          const todo = toDoManager.getToDo(parseInt(toDoContainer.id));
        }
      }
    });
  }

  return { createListener };
})();
