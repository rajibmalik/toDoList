import { addToDoBtn } from "./dom/addToDoBtn";
import { addToDoBtnClickListener } from "./eventListeners/addToDoBtnClickListener";
import { addToDoExitBtnClickListener } from "./eventListeners/addToDoExitBtnClickListener";
import { textAreaKeydown } from "./eventListeners/textAreaKeydownListener";
import { submitToDoBtnClickListener } from "./eventListeners/submitToDoBtnClickListener";

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
  }

  return { renderAddToDoBtn, addModalEventListeners };
})();
