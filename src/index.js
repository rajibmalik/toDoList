import { ToDo } from "./models/ToDo.js";
// import { createToDoDOM } from "./toDoDOMRenderers/createToDoDOM.js";
import { checkBoxEventListener } from "./eventListeners/toDo/checkBoxEventListener.js";
import { descriptionBtnClickListener } from "./eventListeners/toDo/description/descriptionBtnClickListener.js";
import { deleteBtnClickListener } from "./eventListeners/toDo/deleteBtn/deleteBtnClickListener.js";
// import { descriptionModalExitBtnClickListener } from "./eventListeners/toDo/description/descriptionModalExitBtnClickListener.js";
import { renderToDo } from "./renders/renderToDo.js";
import { renderNavBar } from "./renders/renderNavBar.js";
// import { addToDoBtn } from "./dom/addToDoBtn.js";
import { ToDoGroupManagerSingleton } from "./models/ToDoGroupManagerSingleton.js";
import { ToDoGroup } from "./models/ToDoGroup.js";
import "./styles.css";
import { descriptionModalExitBtnClickListener } from "./eventListeners/toDo/description/descriptionModalExitBtnClickListener.js";
import { allClickListener } from "./eventListeners/nav/mainNav/allClickListener.js";
import { addProjectClickListener } from "./eventListeners/nav/projects/addProjectClickListener.js";
import { closeProjectClickListener } from "./eventListeners/nav/projects/closeProjectClickListener.js";
import { submitProjectClickListener } from "./eventListeners/nav/projects/submitProjectClickListener.js";
import { renderContent } from "./renders/renderContent.js";
import { projectClickListener } from "./eventListeners/nav/projects/projectClickListener.js";
import { renderToDoGroup } from "./renders/renderToDoGroup.js";

const content = document.querySelector("#content");

const toDo = new ToDo("Buy Groceries", "Buy groceries", "2024-12-01", "LOW");

const toDo2 = new ToDo(
  "This is a really long title for some obnoxious reason that ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis ",
  "2024-12-01",
  "HIGH"
);

renderContent.renderAddToDoBtn();
renderToDoGroup.renderAllToDos();
// renderContent.renderToDoGroupHeader("All");
// renderToDo.render(toDo);

// renderToDo.render(toDo2);

renderNavBar.addModalEventListeners();

checkBoxEventListener.createListener();
descriptionBtnClickListener.createListener();
deleteBtnClickListener.createListener();
descriptionModalExitBtnClickListener.createListener();

allClickListener.createListener();
addProjectClickListener.createListener();
closeProjectClickListener.createListener();
submitProjectClickListener.createListener();
projectClickListener.createListener();

// const toDoGroup1 = new ToDoGroup("Programming");
// toDoGroup1.addToDo(toDo);
// const toDoGroup2 = new ToDoGroup("Hobbies");
// toDoGroup2.addToDo(toDo2);

// const toDoGroupManager = ToDoGroupManagerSingleton.getInstance();
// toDoGroupManager.addToDoGroup(toDoGroup1);

// toDoGroupManager.addToDoGroup(toDoGroup2);

// console.log(toDoGroupManager);

// let toDos = manager.getToDos();
// console.log("HERE" + toDos[0].getId());
