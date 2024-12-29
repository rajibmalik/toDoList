import { renderToDoGroup } from "../../../renders/renderToDoGroup";

export const allClickListener = (function () {
  const allBtn = document.querySelector("#allBtn");

  function createListener() {
    allBtn.addEventListener("click", () => {
      renderToDoGroup.renderAllToDos();
    });
  }

  return { createListener };
})();
