export const descriptionBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("toDoDescriptionBtn")) {
        const toDoDescriptionBtn = e.target.closest(".toDoDescriptionBtn");

        if (toDoDescriptionBtn) {
          console.log("clicked description btn");
        }
      }
    });
  }

  return { createListener };
})();
