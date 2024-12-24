import { addToDoBtn } from "./dom/addToDoBtn";
import { addToDoBtnClickListener } from "./eventListeners/addToDoBtnClickListener";
import { addToDoExitBtnClickListener } from "./eventListeners/addToDoExitBtnClickListener";

export const renderNavBar = (function () {
  const content = document.querySelector("#navBar");

  function render() {}

  function renderAddToDoBtn() {
    const btn = addToDoBtn.create();
    content.appendChild(btn);

    addToDoBtnClickListener.createListener();
    addToDoExitBtnClickListener.createListener();
  }

  return { renderAddToDoBtn };
})();
