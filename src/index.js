import { ToDo } from "./ToDo.js";

const content = document.querySelector("#content");

const toDo = new ToDo(
  "Groceries",
  "Buy groceries",
  "12/10/12",
  "High",
  "Buy the groceries"
);

console.log(toDo);
