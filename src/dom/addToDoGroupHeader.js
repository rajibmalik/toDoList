export const addToDoGroupHeader = (function () {
  function addHeader(headerText) {
    const header = document.createElement("h1");
    header.id = "toDoGroupHeader";
    header.textContent = headerText;

    return header;
  }

  return { addHeader };
})();
