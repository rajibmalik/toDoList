export const descriptionModalExitBtnClickListener = (function () {
  const content = document.querySelector("#content");

  function createListener() {
    content.addEventListener("click", (e) => {
      const descriptionContent = document.querySelector(
        ".descriptionModalWrapper"
      );
      console.log(descriptionContent);

      if (
        e.target.classList.contains("exitBtn") ||
        (descriptionContent && !descriptionContent.contains(e.target))
      ) {
        const descriptionModal = e.target.closest(".descriptionModal");

        if (descriptionModal) {
          descriptionModal.remove();
        }
      }
    });
  }

  return { createListener };
})();
