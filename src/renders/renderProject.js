import { ToDoGroup } from "../models/ToDoGroup";
import { ToDoGroupManagerSingleton } from "../models/ToDoGroupManagerSingleton";
import { addProjectDOM } from "../dom/nav/addProjectDOM";
const manager = ToDoGroupManagerSingleton.getInstance();

export const renderProject = (function () {
  const projects = document.querySelector("#projects");

  function render(name) {
    const toDoGroup = new ToDoGroup(name);
    const newGroup = manager.addToDoGroup(toDoGroup);

    if (!newGroup) {
      console.log("Cannot add duplicate group");
      return;
    }

    const newProjectDOM = addProjectDOM.create(toDoGroup.getName());
    projects.appendChild(newProjectDOM);
  }

  return { render };
})();
