function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      taskList.appendChild(li);
      input.value = "";
    }
  }
  