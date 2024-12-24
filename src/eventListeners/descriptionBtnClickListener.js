import { descriptionBtnModal } from "../modals/descriptionBtnModal";
import { ToDo } from "../ToDo";

export const descriptionBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoDescriptionBtn")) {
        const toDoDescriptionBtn = e.target.closest(".toDoDescriptionBtn");

        if (toDoDescriptionBtn) {
          // We need a way to retrive the correct toDo object and pass it to the descriptionBtnModal
          const descriptionModal = descriptionBtnModal.createContainer();
          console.log("Modal: " + descriptionModal);
          content.appendChild(descriptionModal);
          descriptionModal.showModal();
        }
      }
    });
  }

  return { createListener };
})();
