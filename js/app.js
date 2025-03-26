/**
 * Adds a new task.
 */
function addTask() {
    const taskInput = document.getElementById('taskNameField');
    const taskName = taskInput.value.trim();
    if (!taskName) return alert('Task name cannot be empty!');

    const taskDetailsInput = document.getElementById('taskDetailsField');
    const taskDetails = taskDetailsInput.value.trim();

    const tasks = getTasks();
    tasks.push({ name: taskName, details: taskDetails });
    saveTasks(tasks);

    window.location.href = 'index.html';
}

/**
 * Deletes a task.
 * @param {number} index - The index of the task to delete.
 */
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        let tasks = getTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    }
}
