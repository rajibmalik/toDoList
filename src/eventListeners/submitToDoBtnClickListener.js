export const submitToDoBtnClickListener = (function () {
  const mainContainer = document.querySelector("#mainContainer");
  const addToDoModal = document.querySelector("dialog");
  const addToDoForm = document.querySelector("#addToDoForm");

  function createListener() {
    addToDoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = addToDoForm.querySelector("#titleInput").value;
      const details = document.querySelector("#detailsInput").value;
      const date = document.querySelector("#dueDateInput").value;
      const priority = document.querySelector("#priorityInput").value;

      console.log(title, details, date, priority);
    });
  }

  return { createListener };
})();
