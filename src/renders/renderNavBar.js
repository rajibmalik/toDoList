import { addToDoBtn } from "../dom/addToDoBtn";
import { addToDoBtnClickListener } from "../eventListeners/addToDoForm/addToDoBtnClickListener";
import { addToDoExitBtnClickListener } from "../eventListeners/addToDoForm/addToDoExitBtnClickListener";
import { textAreaKeydown } from "../eventListeners/addToDoForm/textAreaKeydownListener";
import { submitToDoBtnClickListener } from "../eventListeners/addToDoForm/submitToDoBtnClickListener";
import { priorityBtnClickListener } from "../eventListeners/addToDoForm/priorityBtnClickListener";

export const renderNavBar = (function () {
  const sideBar = document.querySelector("#sideBar");

  function render() {}

  function renderAddToDoBtn() {
    const btn = addToDoBtn.create();
    sideBar.appendChild(btn);

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
