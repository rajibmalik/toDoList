export const toDoFormExtractor = (function () {
  const addToDoForm = document.querySelector("#addToDoForm");

  function extractFormData() {
    const title = addToDoForm.querySelector("#titleInput").value;
    const description = addToDoForm.querySelector("#detailsInput").value;
    const dueDate = addToDoForm.querySelector("#dueDateInput").value;
    let priority = extractPriorityData();

    const toDoData = {
      title,
      description,
      dueDate,
      priority,
    };

    return toDoData;
  }

  function extractPriorityData() {
    let priority = null;

    const priorities = Array.from(addToDoForm.querySelectorAll(".priorityBtn"));

    priorities.forEach((btn) => {
      console.log(`Button: ${btn}`);
      console.log(`Button clicked ${btn.dataset.clicked}`);
      if (btn.dataset.clicked === "true") {
        priority = btn.value;
      }
    });

    return priority;
  }

  return { extractFormData };
})();
