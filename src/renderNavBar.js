import { addToDoBtn } from "./dom/addToDoBtn";
import { addToDoBtnClickListener } from "./eventListeners/addToDoBtnClickListener";

export const renderNavBar = (function () {
  const content = document.querySelector("#navBar");

  function render() {}

  function renderAddToDoBtn() {
    const btn = addToDoBtn.create();
    addToDoBtnClickListener.createListener();
    content.appendChild(btn);
  }

  return { renderAddToDoBtn };
})();
