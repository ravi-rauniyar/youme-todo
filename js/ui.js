/**
 * Renders the task list in the UI.
 */
function renderTasks() {
    const tasks = getTasks();
    const taskList = document.getElementById('taskList');
    if (taskList) {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="details.html" onclick="viewTask(${index})">${task}</a>
                            <button onclick="deleteTask(${index})">Delete</button>`;
            taskList.appendChild(li);
        });
    }
}
document.addEventListener('DOMContentLoaded', renderTasks);
