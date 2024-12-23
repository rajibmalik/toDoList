export const checkBoxEventListener = (function () {
  const content = document.querySelector("#content");

  function createListener(element) {
    const input = element.querySelector(".toDoCheckBox");

    input.addEventListener("click", (e) => {
      console.log(input);
      console.log(`CheckBox ${input.id}`);
    });
  }

  return { createListener };
})();
