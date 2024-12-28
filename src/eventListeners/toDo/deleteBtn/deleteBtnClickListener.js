import { deleteToast } from "./deleteToast";
import { ToDoGroupManagerSingleton } from "../../../models/ToDoGroupManagerSingleton";
const toDoManager = ToDoGroupManagerSingleton.getInstance();

export const deleteBtnClickListener = (function () {
  function createListener(element) {
    const btn = element.querySelector(".toDoDeleteBtn");

    btn.addEventListener("click", (e) => {
      const toDoElement = e.target.closest(".toDoContainer");

      if (toDoElement) {
        toDoElement.remove();
        deleteToast.addToDOM(toDoElement);

        console.log("before");
        toDoManager.logToDos();

        const toDoObject = toDoManager.getToDo(toDoElement.id);
        toDoManager.deleteToDo(toDoObject);

        console.log("after");
        toDoManager.logToDos();
      }
    });
  }

  return { createListener };
})();
