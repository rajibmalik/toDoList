import { addToDoGroupHeader } from "../dom/addToDoGroupHeader";

export const renderContent = (function () {
  const content = document.querySelector("#contentHeaderContainer");

  function renderToDoGroupHeader(headerText) {
    console.log("appending header");
    const header = addToDoGroupHeader.addHeader(headerText);
    console.log("HERE: " + header.innerHTML);
    content.appendChild(header);
  }

  return { renderToDoGroupHeader };
})();
