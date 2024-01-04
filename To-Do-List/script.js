document.addEventListener('DOMContentLoaded', function () {
    // Add task button click event listener
    document.getElementById('addTaskBtn').addEventListener('click', addTask);

    // Counters for tasks
    let totalTasks = 0;
    let completedTasks = 0;

    function updateNoItemsMessage() {
        const noItemsMessage = document.getElementById('noItemsImage');
        const taskList = document.getElementById('taskList');
        noItemsMessage.style.display = taskList.children.length === 0 ? 'block' : 'none';
    }

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const taskCount = document.getElementById('taskCount');
        const highPriorityCount = document.getElementById('highPriorityCount');

        // Get the task name from the input
        const taskName = taskInput.value.trim();
        updateNoItemsMessage();

        if (taskName !== '') {
            // Create a new task element
            const taskElement = document.createElement('div');
            taskElement.className = 'task';

            // Create a checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';

            // Create a span for the task name
            const taskSpan = document.createElement('span');
            taskSpan.className = 'task-name';
            taskSpan.textContent = taskName;

            // Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-task-btn';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

            // Append elements to the task element
            taskElement.appendChild(checkbox);
            taskElement.appendChild(taskSpan);
            taskElement.appendChild(deleteBtn);

            // Append the task element to the task list
            taskList.appendChild(taskElement);

            // Increment the task count
            totalTasks++;
            taskCount.textContent = `${completedTasks} of ${totalTasks}`;
            highPriorityCount.textContent = `${completedTasks} of ${totalTasks}`;

            // Clear the input field
            taskInput.value = '';

            // Add event listener to the delete button
            deleteBtn.addEventListener('click', function () {
                taskElement.remove();
                totalTasks--;
                taskCount.textContent = `${completedTasks} of ${totalTasks}`;
                highPriorityCount.textContent = `${completedTasks} of ${totalTasks}`;
            });

            // Add event listener to the checkbox
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    // Update completed tasks count
                    completedTasks++;
                } else {
                    // Update completed tasks count when unchecked
                    completedTasks--;
                }

                // Update task count display
                taskCount.textContent = `${completedTasks} of ${totalTasks}`;
                highPriorityCount.textContent = `${completedTasks} of ${totalTasks}`;
            });
        }
    }
});
