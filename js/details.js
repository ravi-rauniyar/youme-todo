/**
 * Stores task index in localStorage for viewing.
 * @param {number} index - The index of the task.
 */
function viewTask(index) {
    localStorage.setItem('taskId', index);
}

document.addEventListener('DOMContentLoaded', function () {
    const taskId = localStorage.getItem('taskId');
    const tasks = getTasks();
    taskDetail = document.getElementById('taskDetail');
    if (taskDetail) {
        taskDetail.textContent = tasks[taskId] || 'Task not found';
    }
});
