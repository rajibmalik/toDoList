export const addToDoBtnClickListener = (function () {
  const sideBar = document.querySelector("#sideBar");
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("dialog");

  function createListener() {
    sideBar.addEventListener("click", (e) => {
      if (e.target.classList.contains("addToDoBtn")) {
        if (sideBar) {
          addToDoModal.showModal();
          addToDoModal.classList.add("open");
          mainContainer.classList.add("blur");
        }
      }
    });
  }

  return { createListener };
})();
