import { addToDoBtn } from "./dom/addToDoBtn";
import { addToDoBtnClickListener } from "./eventListeners/addToDoForm/addToDoBtnClickListener";
import { addToDoExitBtnClickListener } from "./eventListeners/addToDoForm/addToDoExitBtnClickListener";
import { textAreaKeydown } from "./eventListeners/addToDoForm/textAreaKeydownListener";
import { submitToDoBtnClickListener } from "./eventListeners/addToDoForm/submitToDoBtnClickListener";
import { priorityBtnClickListener } from "./eventListeners/addToDoForm/priorityBtnClickListener";

export const renderNavBar = (function () {
  const content = document.querySelector("#navBar");

  function render() {}

  function renderAddToDoBtn() {
    const btn = addToDoBtn.create();
    content.appendChild(btn);

    addToDoBtnClickListener.createListener();
  }

  function addModalEventListeners() {
    addToDoExitBtnClickListener.createListener();
    textAreaKeydown.createListener();
    submitToDoBtnClickListener.createListener();
    priorityBtnClickListener.createListener();
  }

  return { renderAddToDoBtn, addModalEventListeners };
})();
