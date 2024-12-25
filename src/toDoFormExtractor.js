export const toDoFormExtractor = (function () {
  const addToDoForm = document.querySelector("#addToDoForm");

  function extractFormData() {
    const title = addToDoForm.querySelector("#titleInput").value;
    const description = addToDoForm.querySelector("#detailsInput").value;
    const dueDate = addToDoForm.querySelector("#dueDateInput").value;
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
