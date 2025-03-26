/**
 * Stores task index in localStorage for viewing.
 * @param {number} index - The index of the task.
 */
function viewTask(index) {
    localStorage.setItem('taskId', index);
}

document.addEventListener('DOMContentLoaded', function () {
    const tasks = getTasks();
    const taskId = localStorage.getItem('taskId');
    if (!(taskId || window.location.pathname.endsWith('index.html'))) {
        window.location.href = 'index.html';
    }
    const viewedTask = tasks[taskId];
    if (viewedTask) {
        const { name, details } = tasks[taskId];
        taskName = document.getElementById('taskName');
        if (taskName) {
            taskName.textContent = `Name: ${name || 'Task name not found'}`;
        }
        taskDetails = document.getElementById('taskDetails');
        if (taskDetails) {
            taskDetails.textContent = `Details: ${details || 'Not Available'}`;
        }
    }
});
