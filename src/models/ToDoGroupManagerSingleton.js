// TodoManagerSingleton.js
export class ToDoGroupManagerSingleton {
  #toDoGroups = [];
  static #instance = null;

  constructor() {
    if (ToDoGroupManagerSingleton.#instance) {
      throw new Error("Use ToDoManagerSingleton.getInstance() instead");
    }
    ToDoGroupManagerSingleton.#instance = this;
  }

  static getInstance() {
    if (!ToDoGroupManagerSingleton.#instance) {
      ToDoGroupManagerSingleton.#instance = new ToDoGroupManagerSingleton();
    }
    return ToDoGroupManagerSingleton.#instance;
  }

  getToDoGroups() {
    return this.#toDoGroups;
  }

  addToDoGroup(toDoGroup) {
    const existingGroup = this.#toDoGroups.some(
      (group) => group.getName() === toDoGroup.getName()
    );

    if (existingGroup) {
      console.log("Not adding duplicate group");
      return false;
    }

    this.#toDoGroups.push(toDoGroup);

    return true;
  }

  getToDoGroup(toDoGroupName) {
    const toDoGroup = this.#toDoGroups.find(
      (item) => item.getName() === toDoGroupName
    );

    if (!toDoGroup) {
      console.log(`Could not find the toDoGroup ${toDoGroupName}`);
      return null;
    }
    return toDoGroup;
  }

  getAllToDos() {
    const allToDos = this.#toDoGroups.flatMap((toDoGroup) =>
      toDoGroup.getToDos()
    );

    return allToDos;
  }

  deleteToDoGroup(toDoGroup) {
    const index = this.#toDoGroups.findIndex((item) => item === toDoGroup);

    if (index !== -1) {
      this.#toDoGroups.splice(index, 1);
    }
  }

  // setIsComplete(id) {
  //   const toDo = this.getToDo(id);
  //   toDo.setIsComplete(!toDo.getIsComplete());
  // }

  // logToDos() {
  //   this.#toDoGroups.forEach((toDo) => {
  //     console.log(toDo);
  //   });
  // }
}
