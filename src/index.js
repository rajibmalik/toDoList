import { ToDo } from "./ToDo.js";
// import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM.js";
import { checkBoxEventListener } from "./eventListeners/toDo/checkBoxEventListener.js";
import { renderToDo } from "./renderToDo.js";
import { renderNavBar } from "./renderNavBar.js";
// import { addToDoBtn } from "./dom/addToDoBtn.js";
import "./styles.css";

const content = document.querySelector("#content");

const toDo = new ToDo(
  "Buy Groceries",
  "Buy groceries",
  "12/10/12",
  "High",
  "Buy the groceries"
);

const toDo2 = new ToDo(
  "This is a really long title for some obnoxious reason that ",
  "Buy groceries",
  "12/10/12",
  "High",
  "Buy the groceries"
);

console.log(toDo);

renderToDo.render(toDo);
renderToDo.render(toDo2);

renderNavBar.renderAddToDoBtn();
renderNavBar.addModalEventListeners();
