export const addToDoExitBtnClickListener = (function () {
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("#addToDoDialog");
  const addToDoModalContent = document.querySelector("#addToDoDialogContent");

  function createListener() {
    addToDoModal.addEventListener("click", (e) => {
      if (
        e.target.id.includes("addToDoExitBtn") ||
        !addToDoModalContent.contains(e.target) ||
        e.target.id.includes("addToDoCloseBtn")
      ) {
        close();
      }
    });

    function close() {
      addToDoModal.classList.remove("open");
      mainContainer.classList.remove("blur");
      addToDoModal.close();
    }
  }

  return { createListener };
})();
