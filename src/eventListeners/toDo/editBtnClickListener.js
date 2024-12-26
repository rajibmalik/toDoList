export const editBtnClickListener = (function () {
  function createListener(element) {
    const btn = element.querySelector(".toDoEditBtn");

    btn.addEventListener("click", (e) => {
      console.log("edit btn clicked");
    });
  }

  return { createListener };
})();
