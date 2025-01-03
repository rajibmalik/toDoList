export const addProjectDOM = (function () {
  function create(name) {
    const button = createButton(name);
    console.log("button: " + button.outerHTML);

    return button;
  }

  function createButton(name) {
    const button = document.createElement("button");
    button.className = "projectsList";
    button.type = "button";
    button.textContent = name;

    return button;
  }

  return { create };
})();
