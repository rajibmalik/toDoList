export class ToDo {
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #checkList = [];
  #isComplete;
  static #id = 1;
  #instanceId;

  constructor(title, description, dueDate, priority, notes) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#notes = notes;
    this.#instanceId = ToDo.#id++;
    this.#isComplete = false;
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

  getId() {
    return this.#instanceId;
  }

  getIsComplete() {
    return this.#isComplete;
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

  setIsComplete(isComplete) {
    this.#isComplete = isComplete;
  }

  toString() {
    return `${this.#title}, ${this.#description}, ${this.#dueDate}, ${
      this.#priority
    }, ${this.#instanceId}`;
  }
}
