document.addEventListener('DOMContentLoaded', function () {
    const taskId = localStorage.getItem('taskId');
    const tasks = getTasks();
    if (taskId !== null) {
        document.getElementById('updateTaskInput').value = tasks[taskId];
    }
});

/**
 * Updates a task and saves changes.
 */
function updateTask() {
    const taskId = localStorage.getItem('taskId');
    const tasks = getTasks();
    const input = document.getElementById('updateTaskInput');
    if (input.value.trim() === '') return alert('Task cannot be empty!');
    tasks[taskId] = input.value.trim();
    saveTasks(tasks);
    window.location.href = 'index.html';
}
