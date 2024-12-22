import { ToDo } from "./ToDo.js";
// import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM.js";
import { renderToDo } from "./renderToDo.js";
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

renderToDo.createToDo(toDo);
renderToDo.createToDo(toDo2);
