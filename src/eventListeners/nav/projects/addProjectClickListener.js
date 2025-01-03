import { addProjectModal } from "../../../dom/nav/addProjectModal";

export const addProjectClickListener = (function () {
  const content = document.querySelector("#content");
  const projects = document.querySelector("#projects");
  const addProjectBtn = document.querySelector("#addProjectBtn");

  function createListener() {
    addProjectBtn.addEventListener("click", () => {
      console.log("clicked");
      const projectModal = addProjectModal.createModal();
      content.appendChild(projectModal);
      projectModal.showModal();
    });
  }

  return { createListener };
})();
