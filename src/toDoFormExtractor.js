export const toDoFormExtractor = (function () {
  const addToDoForm = document.querySelector("#addToDoForm");

  function extractFormData() {
    const title = addToDoForm.querySelector("#titleInput").value;

    if (!title) {
      return { valid: false, error: "Please fill out the title" };
    }

    const description = addToDoForm.querySelector("#detailsInput").value;

    if (!description) {
      return { valid: false, error: "Please fill out the description" };
    }
    const dueDate = addToDoForm.querySelector("#dueDateInput").value;

    if (!dueDate) {
      return { valid: false, error: "Please fill out the due date" };
    }

    let priority = extractPriorityData();

    if (!priority) {
      return { valid: false, error: "Please fill out the priority" };
    }

    const toDoData = {
      title,
      description,
      dueDate,
      priority,
    };

    return { valid: true, toDoData };
  }

  function extractPriorityData() {
    let priority = "none";
    const priorities = Array.from(addToDoForm.querySelectorAll(".priorityBtn"));

    priorities.forEach((btn) => {
      if (btn.dataset.clicked === "true") {
        priority = btn.value;
      }
    });

    return priority;
  }

  return { extractFormData };
})();
