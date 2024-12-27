import { ToDo } from "./ToDo.js";
// import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM.js";
import { checkBoxEventListener } from "./eventListeners/toDo/checkBoxEventListener.js";
import { descriptionBtnClickListener } from "./eventListeners/toDo/description/descriptionBtnClickListener.js";
// import { descriptionModalExitBtnClickListener } from "./eventListeners/toDo/description/descriptionModalExitBtnClickListener.js";
import { renderToDo } from "./renderToDo.js";
import { renderNavBar } from "./renderNavBar.js";
// import { addToDoBtn } from "./dom/addToDoBtn.js";
import { ToDoManagerSingleton } from "./ToDoManagerSingleton.js";
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
renderToDo.render(toDo2);

renderNavBar.renderAddToDoBtn();
renderNavBar.addModalEventListeners();

checkBoxEventListener.createListener();
descriptionBtnClickListener.createListener();
// descriptionModalExitBtnClickListener.createListener();

const manager = ToDoManagerSingleton.getInstance();

manager.addToDo(toDo);
manager.addToDo(toDo2);

// let toDos = manager.getToDos();
// console.log("HERE" + toDos[0].getId());
