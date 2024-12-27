import { descriptionBtnModal } from "../../../modals/descriptionBtnModal";
import { ToDo } from "../../../ToDo";
import { toDoDOMParser } from "../../../toDoDOMParser";

export const descriptionBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoDescriptionBtn")) {
        const toDoContainer = e.target.closest(".toDoContainer");

        if (toDoContainer) {
          // We need a way to retrive the correct toDo object and pass it to the descriptionBtnModal

          const toDoData = toDoDOMParser.parse(toDoContainer);
          console.log(toDoData);

          const modal = descriptionBtnModal.createContainer(toDoData);
          console.log(modal.innerHTML);
          content.appendChild(modal);
          modal.showModal();

          // pass the data to a modal that appears on click
        }
      }
    });
  }

  return { createListener };
})();
