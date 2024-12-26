export const deleteBtnClickListener = (function () {
  function createListener(element) {
    const btn = element.querySelector(".toDoDeleteBtn");

    btn.addEventListener("click", (e) => {
      console.log("delete btn clicked");
    });
  }

  return { createListener };
})();
