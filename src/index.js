import { ToDo } from "./ToDo.js";
// import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM.js";
import { checkBoxEventListener } from "./eventListeners/toDo/checkBoxEventListener.js";
import { renderToDo } from "./renderToDo.js";
import { renderNavBar } from "./renderNavBar.js";
// import { addToDoBtn } from "./dom/addToDoBtn.js";
import { ToDoManager } from "./ToDoManager.js";
import "./styles.css";

const content = document.querySelector("#content");

const toDo = new ToDo("Buy Groceries", "Buy groceries", "2024-12-01", "LOW");

const toDo2 = new ToDo(
  "This is a really long title for some obnoxious reason that ",
  "Buy groceries",
  "2024-12-01",
  "HIGH"
);

renderToDo.render(toDo);
// renderToDo.render(toDo2);

renderNavBar.renderAddToDoBtn();
renderNavBar.addModalEventListeners();

const manager = new ToDoManager();

manager.addToDo(toDo);

let toDos = manager.getToDos();
toDos.forEach((toDo) => {
  console.log(toDo);
});

manager.updateToDo(t);
