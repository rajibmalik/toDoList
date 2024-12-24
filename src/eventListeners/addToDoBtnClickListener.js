export const addToDoBtnClickListener = (function () {
  const navBar = document.querySelector("#navBar");
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("dialog");

  function createListener() {
    navBar.addEventListener("click", (e) => {
      if (e.target.classList.contains("addToDoBtn")) {
        if (navBar) {
          addToDoModal.showModal();
          addToDoModal.classList.add("open");
          mainContainer.classList.add("blur");
        }
      }
    });
  }

  return { createListener };
})();
