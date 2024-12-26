// TodoManagerSingleton.js
export class ToDoManagerSingleton {
  #toDos = [];
  static #instance = null;

  constructor() {
    if (ToDoManagerSingleton.#instance) {
      throw new Error("Use ToDoManagerSingleton.getInstance() instead");
    }
    ToDoManagerSingleton.#instance = this;
  }

  static getInstance() {
    if (!ToDoManagerSingleton.#instance) {
      ToDoManagerSingleton.#instance = new ToDoManagerSingleton();
    }
    return ToDoManagerSingleton.#instance;
  }

  getToDos() {
    return this.#toDos;
  }

  getToDo(id) {
    id = parseInt(id);

    const toDo = this.#toDos.find((item) => item.getId() === id);
    return toDo;
  }

  addToDo(toDo) {
    this.#toDos.push(toDo);
  }

  deleteToDo(toDo) {
    const index = this.#toDos.findIndex(
      (item) => item.getId() === toDo.getId()
    );

    if (index !== -1) {
      this.#toDos.splice(index, 1);
    }
  }

  logToDos() {
    this.#toDos.forEach((toDo) => {
      console.log(toDo);
    });
  }
}
