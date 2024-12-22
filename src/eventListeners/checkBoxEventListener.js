export const checkBoxEventListener = (function () {
  const content = document.querySelector("#content");

  function createListener(element) {
    const input = element.querySelector(".toDoCheckBox");

    input.addEventListener("click", (e) => {
      console.log("Checkbox was clicked");
    });
  }

  return { createListener };
})();
