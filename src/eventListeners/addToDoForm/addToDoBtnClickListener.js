export const addToDoBtnClickListener = (function () {
  const toDoList = document.querySelector("#toDoList");
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("dialog");

  function createListener() {
    toDoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("addToDoBtn")) {
        if (toDoList) {
          addToDoModal.showModal();
          addToDoModal.classList.add("open");
          mainContainer.classList.add("blur");
        }
      }
    });
  }

  return { createListener };
})();
