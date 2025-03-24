/**
 * Adds a new task.
 */
function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() === '') return alert('Task cannot be empty!');
    const tasks = getTasks();
    tasks.push(input.value.trim());
    saveTasks(tasks);
    input.value = '';
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
