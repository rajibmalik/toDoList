import { renderToDo } from "../renderToDo";
import { ToDo } from "../ToDo";

export const addToDoBtnClickListener = (function () {
  const navBar = document.querySelector("#navBar");

  function createListener() {
    navBar.addEventListener("click", (e) => {
      if (e.target.classList.contains("addToDoBtn")) {
        if (navBar) {
          console.log("Clicked add to do btn");

          const toDo = new ToDo(
            "Buy Groceries",
            "Buy groceries",
            "12/10/12",
            "High",
            "Buy the groceries"
          );

          renderToDo.render(toDo);
        }
      }
    });
  }

  return { createListener };
})();
