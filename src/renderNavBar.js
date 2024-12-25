import { addToDoBtn } from "./dom/addToDoBtn";
import { addToDoBtnClickListener } from "./eventListeners/addToDoBtnClickListener";
import { addToDoExitBtnClickListener } from "./eventListeners/addToDoExitBtnClickListener";
import { textAreaKeydown } from "./eventListeners/textAreaKeydownListener";

export const renderNavBar = (function () {
  const content = document.querySelector("#navBar");

  function render() {}

  function renderAddToDoBtn() {
    const btn = addToDoBtn.create();
    content.appendChild(btn);

    addToDoBtnClickListener.createListener();
    addToDoExitBtnClickListener.createListener();
    textAreaKeydown.createListener();
  }

  return { renderAddToDoBtn };
})();
