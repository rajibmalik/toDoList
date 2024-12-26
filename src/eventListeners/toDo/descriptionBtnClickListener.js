import { descriptionBtnModal } from "../../modals/descriptionBtnModal";
import { ToDo } from "../../ToDo";
import { toDoDOMParser } from "../../toDoDOMParser";

export const descriptionBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoDescriptionBtn")) {
        // const toDoDescriptionBtn = e.target.closest(".toDoDescriptionBtn");
        const toDoContainer = e.target.closest(".toDoContainer");

        if (toDoContainer) {
          // We need a way to retrive the correct toDo object and pass it to the descriptionBtnModal

          // console.log("toDo: " + toDoContainer);
          toDoDOMParser.findToDoObject(toDoContainer);
          // const descriptionModal = descriptionBtnModal.createContainer();
          // console.log("Modal: " + descriptionModal);
          // content.appendChild(descriptionModal);
          // descriptionModal.showModal();
        }
      }
    });
  }

  return { createListener };
})();
