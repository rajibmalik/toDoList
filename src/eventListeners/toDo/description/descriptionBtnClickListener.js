import { descriptionBtnModal } from "../../../modals/descriptionBtnModal";
import { toDoDOMParser } from "../../../toDoDOMParser";

export const descriptionBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoDescriptionBtn")) {
        const project = document
          .querySelector("#toDoGroupHeader")
          .textContent.toLowerCase();
        const toDoContainer = e.target.closest(".toDoContainer");

        if (toDoContainer) {
          const toDoData = toDoDOMParser.parse(project, toDoContainer);
          console.log(toDoData);

          const modal = descriptionBtnModal.createContainer(toDoData);
          content.appendChild(modal);
          modal.showModal();
        }
      }
    });
  }

  return { createListener };
})();
