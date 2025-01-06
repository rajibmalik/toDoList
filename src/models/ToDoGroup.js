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
    id = parseInt(id);
    return this.#toDos.find((item) => item.getId() === id);
  }

  setName(name) {
    this.#name = name;
  }

  addToDo(toDo) {
    this.#toDos.push(toDo);
  }

  deleteToDo(id) {
    id = parseInt(id);

    const index = this.#toDos.findIndex((item) => item.getId() === id);

    if (index !== -1) {
      console.log("deleting");
      this.#toDos.splice(index, 1);
    }
  }
}
