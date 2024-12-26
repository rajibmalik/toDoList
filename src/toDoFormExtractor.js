export const toDoFormExtractor = (function () {
  const addToDoForm = document.querySelector("#addToDoForm");
  const titleElement = addToDoForm.querySelector("#titleInput");
  const descriptionElement = addToDoForm.querySelector("#detailsInput");
  const dueDateElement = addToDoForm.querySelector("#dueDateInput");
  const priorityElements = Array.from(
    addToDoForm.querySelectorAll(".priorityBtn")
  );
  const errorMessage = addToDoForm.querySelector("#priorityError");

  function extractFormData() {
    const title = titleElement.value.trim();
    const description = descriptionElement.value.trim();
    const dueDate = dueDateElement.value;
    let priority = extractPriorityData();

    if (!validatePriority(priority)) {
      return { valid: false, toDoData: null };
    }

    const toDoData = {
      title,
      description,
      dueDate,
      priority,
    };

    clearForm();

    return { valid: true, toDoData };
  }

  function extractPriorityData() {
    let priority = null;

    priorityElements.forEach((btn) => {
      if (btn.dataset.clicked === "true") {
        priority = btn.value;
      }
    });

    return priority;
  }

  function validatePriority(priority) {
    if (priority === null) {
      errorMessage.classList.add("error");
      return false;
    }

    return true;
  }

  function clearForm() {
    addToDoForm.reset();
    priorityElements.forEach((btn) => {
      btn.classList.remove("clicked");
    });
    errorMessage.classList.remove("error");
  }

  return { extractFormData };
})();
