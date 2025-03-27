/**
 * Renders the task list in the UI.
 */
function renderTasks() {
    const tasks = getTasks();
    localStorage.removeItem('taskId');

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    if (tasks.length)
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="details.html" onclick="viewTask(${index})">${task.name}</a><button onclick="deleteTask(${index})"><img src="../assets/delete.png"/></button>`;
            taskList.appendChild(li);
        });
    else {
        const li = document.createElement('li');
        li.textContent = 'No Todos added.';
        taskList.appendChild(li);
    }
}
document.addEventListener('DOMContentLoaded', renderTasks);
