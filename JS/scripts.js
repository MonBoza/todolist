// Business Logic for TaskList --------
function TaskList() {
    this.tasks = {};
    this.currentId = 0;
}

TaskList.prototype.addTask = function (task) {
    task.id = this.assignId();
    this.tasks[task.id] = task;
};

TaskList.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

TaskList.prototype.findTask = function (id) {
    if (this.tasks[id] !== undefined) {
        return this.tasks[id];
    }
    return false;
};

// Business Logic for Tasks ---------
function Task(taskName, dueDate, completed) {
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.completed = completed;
}

Task.prototype.taskInfo = function () {
    return this.taskName + " " + this.dueDate + this.completed;
};

//UI Logic
let taskList = new TaskList();

function listTasks(taskList) {
    let detailsDiv = document.querySelector("div#list-details");
    detailsDiv.innerText = " ";
    const ul = document.createElement("ul");
    Object.keys(taskList.tasks).forEach(function(key) {
        const task = taskList.findTask(key);
        const li = document.createElement("li");
        li.append(task.taskInfo());
        li.setAttribute("id", task.id);
        ul.append(li);
    });
    detailsDiv.append(ul);
}

function handleFormSubmission(event) {
    event.preventDefault();
    const inputtedTaskName = document.querySelector("#new-task-name").value;
    const inputtedDate = document.querySelector("#new-date").value;
    const inputtedComplete = document.querySelector("#new-completed-status").value;
    let newTask = new Task(inputtedTaskName, inputtedDate, inputtedComplete);
    taskList.addTask(newTask);
    console.log(taskList.tasks);
    listTasks(taskList);
}
window.addEventListener("load", function () {
    document.querySelector("form#new-task").addEventListener("submit", handleFormSubmission);
});