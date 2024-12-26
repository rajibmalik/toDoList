export const textAreaKeydown = (function () {
  function createListener() {
    const modal = document.querySelector("#addToDoDialog");
    modal.addEventListener("keydown", (e) => {
      const textareas = Array.from(
        modal.querySelectorAll("#inputContainer textarea")
      );
      const current = document.activeElement;

      if (current.classList.contains("inputBox")) {
        const index = textareas.indexOf(current);

        if (e.key === "ArrowUp") {
          if (index > 0) {
            textareas[index - 1].focus();
            e.preventDefault();
          }
        } else if (e.key === "ArrowDown") {
          if (index < textareas.length - 1) {
            textareas[index + 1].focus();
            e.preventDefault();
          }
        }
      }
    });
  }

  return { createListener };
})();
