export const checkBoxEventListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoCheckBox")) {
        // Find the parent toDoContainer of the checkbox
        const toDoContainer = e.target.closest(".toDoContainer");

        if (toDoContainer) {
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
        }
      }
    });
  }

  return { createListener };
})();
