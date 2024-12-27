export const descriptionModalExitBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      if (e.target.classList.contains("exitBtn")) {
        const descriptionModal = e.target.closest(".descriptionModal");

        if (descriptionModal) {
          descriptionModal.remove();
        }
      }
    });
  }

  return { createListener };
})();
