export const closeProjectClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.id.includes("addProjectCloseBtn")) {
        console.log("clicked close");
        const modal = content.querySelector("#addProjectModal");
        if (modal) {
          console.log(modal);
          modal.remove();
        }
      }
    });
  }

  return { createListener };
})();
