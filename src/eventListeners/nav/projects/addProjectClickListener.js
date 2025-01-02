export const addProjectClickListener = (function () {
  const projects = document.querySelector("#projects");
  const addProjectBtn = document.querySelector("#addProjectBtn");

  function createListener() {
    addProjectBtn.addEventListener("click", () => {
      console.log("clicked");
    });
  }

  return { createListener };
})();
