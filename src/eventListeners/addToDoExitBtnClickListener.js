export const addToDoExitBtnClickListener = (function () {
  const mainContainer = document.querySelector("#mainContainer");
  let addToDoModal = document.querySelector("#addToDoDialog");

  function createListener() {
    console.log("ADDDING EXIT BTN");
    addToDoModal.addEventListener("click", (e) => {
      if (e.target.id.includes("addToDoExitBtn")) {
        addToDoModal.close();
        addToDoModal.classList.remove("open");
        mainContainer.classList.remove("blur");
      }
    });
  }

  return { createListener };
})();
