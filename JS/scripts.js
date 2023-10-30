// Business Logic for TaskList --------
function TaskList() {
  this.tasks = {};
  this.currentId = 0;
}

TaskList.prototype.addTask = function(task) {
    task.id = this.assignId();
    this.tasks[task.id] = task;
};

TaskList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

TaskList.prototype.findTask = function(id) {
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
  return this.taskName + this.dueDate + this.completed;
};