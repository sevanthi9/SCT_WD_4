// Select DOM elements
const taskInput = document.getElementById('task-input');
const taskDatetime = document.getElementById('task-datetime');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task event
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const taskDate = taskDatetime.value;

    if (!taskText) {
        alert("Task cannot be empty!");
        return;
    }

    addTask(taskText, taskDate);
    taskInput.value = '';
    taskDatetime.value = '';
});

// Function to add task
function addTask(taskText, taskDate) {
    const li = document.createElement('li');
    li.className = 'task-item';

    li.innerHTML = `
        <div>
            <span class="task-text">${taskText}</span>
            <small>${taskDate ? new Date(taskDate).toLocaleString() : ''}</small>
        </div>
        <div class="task-actions">
            <button class="complete-btn">✔</button>
            <button class="edit-btn">✎</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;

    // Add event listeners for buttons
    li.querySelector('.complete-btn').addEventListener('click', () => toggleComplete(li));
    li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
    li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(li));

    taskList.appendChild(li);
}

// Function to toggle task completion
function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
}

// Function to edit a task
function editTask(taskItem) {
    const taskText = taskItem.querySelector('.task-text');
    const newTaskText = prompt("Edit your task:", taskText.textContent);

    if (newTaskText !== null) {
        taskText.textContent = newTaskText.trim();
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}
