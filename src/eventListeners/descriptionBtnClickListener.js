export const descriptionBtnClickListener = (function () {
  function createListener(element) {
    const btn = element.querySelector(".toDoDescriptionBtn");

    btn.addEventListener("click", (e) => {
      console.log("description btn clicked");
    });
  }

  return { createListener };
})();
