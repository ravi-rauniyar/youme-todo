/**
 * Retrieves tasks from localStorage.
 * @returns {string[]} Array of tasks.
 */
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

/**
 * Saves tasks to localStorage.
 * @param {string[]} tasks - Array of tasks to save.
 */
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
