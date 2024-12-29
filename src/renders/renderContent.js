import { addToDoGroupHeader } from "../dom/addToDoGroupHeader";

export const renderContent = (function () {
  const content = document.querySelector("#contentHeaderContainer");

  function renderToDoGroupHeader(headerText) {
    const header = addToDoGroupHeader.addHeader(headerText);
    content.appendChild(header);
  }

  return { renderToDoGroupHeader };
})();
