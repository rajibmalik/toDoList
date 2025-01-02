export const priorityBtnClickListener = (function () {
  //   const mainContainer = document.querySelector("#mainContainer");
  //   const addToDoModal = document.querySelector("dialog");
  const addToDoForm = document.querySelector("#addToDoForm");

  const priorityBtns = Array.from(document.querySelectorAll(".priorityBtn"));

  function createListener() {
    addToDoForm.addEventListener("click", (e) => {
      console.log("PRIORITY LISTENER");
      console.log(e);

      if (e.target.classList.contains("priorityBtn")) {
        const clickedButton = e.target;

        priorityBtns.forEach((btn) => {
          if (btn != clickedButton) {
            btn.classList.remove("clicked");
            btn.dataset.clicked = "false";
          }
        });

        clickedButton.classList.add("clicked");
        clickedButton.dataset.clicked = "true";

        console.log(clickedButton);
      }
    });
  }

  return { createListener };
})();
