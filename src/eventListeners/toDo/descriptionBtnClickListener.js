import { descriptionBtnModal } from "../../modals/descriptionBtnModal";
import { ToDo } from "../../ToDo";
import { toDoDOMParser } from "../../toDoDOMParser";

export const descriptionBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoDescriptionBtn")) {
        const toDoContainer = e.target.closest(".toDoContainer");

        if (toDoContainer) {
          // We need a way to retrive the correct toDo object and pass it to the descriptionBtnModal

          const toDo = toDoDOMParser.parse(toDoContainer);
          console.log(toDo);
        }
      }
    });
  }

  return { createListener };
})();
