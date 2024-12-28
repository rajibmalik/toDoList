export class ToDoGroup {
  #name;
  #toDos = [];

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getToDos() {
    return this.#toDos;
  }

  getToDo(id) {
    return this.#toDos.find((item) => item.getId() === id);
  }

  setName(name) {
    this.#name = name;
  }

  addToDo(toDo) {
    this.#toDos.push(toDo);
  }

  deleteToDo(toDo) {
    const index = this.#toDos.findIndex((item) => item.getId() === toDo);

    if (index !== -1) {
      this.#toDos.splice(index, 1);
    }
  }
}
