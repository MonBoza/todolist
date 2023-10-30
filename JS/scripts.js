// Business Logic for TaskList --------
function TaskList() {
  this.tasks = {};
}

TaskList.prototype.addTask = function(task) {
    this.tasks[task.taskInfo] = task;
};

// Business Logic for Tasks ---------
function Task(taskName, dueDate, completed) {
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.completed = completed;
}

Task.prototype.taskInfo = function () {
  return this.taskName + this.dueDate + this.completed;
};