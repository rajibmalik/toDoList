export const textAreaKeydown = (function () {
  function createListener() {
    document.addEventListener("keydown", (e) => {
      console.log("HERE " + e);
      const textareas = Array.from(
        document.querySelectorAll("#inputContainer textarea")
      );
      const current = document.activeElement;
      if (current.tagName === "TEXTAREA") {
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
