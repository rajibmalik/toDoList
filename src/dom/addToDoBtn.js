export const addToDoBtn = (function () {
  function create() {
    const container = document.createElement("div");
    container.classList.add("addToDoBtnContainer");

    const btn = document.createElement("button");
    btn.classList.add("addToDoBtn");
    btn.textContent = "+";
    btn.type = "button";

    container.appendChild(btn);

    return container;
  }

  return { create };
})();
