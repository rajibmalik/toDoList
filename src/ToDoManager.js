export class ToDoManager {
  #toDos = [];
  //   constructor() {}

  getToDos() {
    return this.#toDos;
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

  //   updateToDo(toDo) {
  //     const index = this.#toDos.findIndex(
  //       (item) => item.getId() === toDo.getId()
  //     );

  //     if (index !== -1) {
  //       this.#toDos[index] = toDo;
  //     }
  //   }
}
