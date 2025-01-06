import { createToDoDOM } from "../dom/createToDoDOM";
import { checkBoxEventListener } from "../eventListeners/toDo/checkBoxEventListener";
import { descriptionBtnClickListener } from "../eventListeners/toDo/description/descriptionBtnClickListener";
import { editBtnClickListener } from "../eventListeners/toDo/editBtnClickListener";
import { deleteBtnClickListener } from "../eventListeners/toDo/deleteBtn/deleteBtnClickListener";

export const renderToDo = (function () {
  const content = document.querySelector("#toDoList");

  function render(toDo) {
    const toDoDOMElement = createToDoDOM.create(toDo);

    content.appendChild(toDoDOMElement);
  }

  return { render };
})();
