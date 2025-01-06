import { ToDoGroupManagerSingleton } from "../../models/ToDoGroupManagerSingleton";
const toDoManager = ToDoGroupManagerSingleton.getInstance();

export const checkBoxEventListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoCheckBoxSpan")) {
        // Find the parent toDoContainer of the checkbox
        const toDoContainer = e.target.closest(".toDoContainer");
        const toDoCheckBox = toDoContainer.querySelector(".toDoCheckBox");

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

          const projectName = document
            .querySelector("#toDoGroupHeader")
            .textContent.toLowerCase();

          console.log("projectName: ", projectName);

          const id = toDoContainer.id;

          console.log("ID: ", id);
          console.log("ID TYPE: ", typeof id);

          const toDoGroup = toDoManager.getToDoGroup(projectName);
          console.log("toDoGroup: ", toDoGroup);
          const toDo = toDoGroup.getToDo(id);
          console.log("toDo: ", toDo);
          toDo.setIsComplete(true);
          console.log("toDo: ", toDo);
        }
      }
    });
  }

  return { createListener };
})();
