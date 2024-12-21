export class ToDo {
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #checkList = [];

  constructor(title, description, dueDate, priority, notes) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#notes = notes;
  }

  getTitle() {
    return this.#title;
  }

  getDescription() {
    return this.#description;
  }

  getDueDate() {
    return this.#dueDate;
  }

  getPriority() {
    return this.#priority;
  }

  getNotes() {
    return this.#notes;
  }

  getCheckList() {
    return this.#checkList;
  }

  setTitle(title) {
    this.#title = title;
  }

  setDescription(description) {
    this.#description = description;
  }

  setDueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  setPriority(priority) {
    this.#priority = priority;
  }

  setNotes(notes) {
    this.#notes = notes;
  }

  setCheckList(checkList) {
    this.#checkList = checkList;
  }
}
