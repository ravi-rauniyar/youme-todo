document.addEventListener('DOMContentLoaded', function () {
    const tasks = getTasks();
    const taskId = localStorage.getItem('taskId');
    if (!(taskId || window.location.pathname.endsWith('index.html'))) {
        window.location.href = 'index.html';
    }
    const viewedTask = tasks[taskId];
    if (viewedTask) {
        const { name, details } = viewedTask;
        document.getElementById('updateTaskName').value = name;
        document.getElementById('updateTaskDetails').value = details;
    }
});

/**
 * Updates a task and saves changes.
 */
function updateTask() {
    const tasks = getTasks();
    const taskId = localStorage.getItem('taskId');

    const taskNameInput = document.getElementById('updateTaskName');
    const taskName = taskNameInput.value.trim();
    if (!taskName) return alert('Task name cannot be empty!');

    const taskDetailsInput = document.getElementById('updateTaskDetails');
    const taskDetails = taskDetailsInput.value.trim();

    const viewedTask = tasks[taskId];
    if (viewedTask) {
        viewedTask.name = taskName;
        viewedTask.details = taskDetails;
    }

    saveTasks(tasks);
    window.location.href = 'details.html';
}
