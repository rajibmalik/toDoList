import { addToDoGroupHeader } from "../dom/addToDoGroupHeader";
import { addToDoBtn } from "../dom/addToDoBtn";
import { addToDoBtnClickListener } from "../eventListeners/addToDoForm/addToDoBtnClickListener";

export const renderContent = (function () {
  const content = document.querySelector("#contentHeaderContainer");
  const toDoList = document.querySelector("#toDoList");

  function renderToDoGroupHeader(headerText) {
    const header = addToDoGroupHeader.addHeader(headerText);
    content.appendChild(header);
  }

  function renderAddToDoBtn() {
    const btn = addToDoBtn.create();
    console.log("Btn: " + btn);
    toDoList.appendChild(btn);

    addToDoBtnClickListener.createListener();
  }

  return { renderToDoGroupHeader, renderAddToDoBtn };
})();
