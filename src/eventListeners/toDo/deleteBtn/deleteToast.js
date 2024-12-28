export const deleteToast = (function () {
  const toDoList = document.querySelector("#toDoList");

  function addToDOM(toDoElement) {
    const toast = createToast();
    const undoButton = createUndoButton(toast, toDoElement);

    toast.appendChild(undoButton);
    toast.classList.add("show");

    toDoList.appendChild(toast);

    deleteToast(toast);
  }

  function createToast() {
    const toast = document.createElement("button");
    toast.className = "toast";
    toast.textContent = "Todo deleted.";

    return toast;
  }

  function createUndoButton(toast, toDoElement) {
    const undoButton = document.createElement("button");
    undoButton.textContent = "Undo";

    createUndoButtonClickListener(undoButton, toast, toDoElement);

    return undoButton;
  }

  function createUndoButtonClickListener(undoButton, toast, toDoElement) {
    undoButton.addEventListener("click", () => {
      toDoList.appendChild(toDoElement);
      toast.remove();
    });
  }

  function deleteToast(toast) {
    setTimeout(() => {
      if (toDoList.contains(toast)) {
        toast.remove();
        toast.classList.remove("show");
      }
    }, 5000);
  }

  return { addToDOM };
})();
