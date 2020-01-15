import TaskView from '../view/task'
import TaskViewModal from '../view/modal/task'
import TaskModel from '../model/task'

import ProjectModel from '../model/project'

function setListeners(saveTaskCallback) {
  document.getElementById("add-task").addEventListener("click", function(e) {
    e.preventDefault();
    TaskViewModal.create(createCallback);
  });
}

function createCallback(params) {
  console.log('Create task callback');

  const taskModel = TaskModel.create(params);
  const callbacks = { edit: editCallback, remove: removeCallback, completed: completedCallback };
  const taskView = TaskView.create(taskModel.title, callbacks);
  TaskModel.setView(taskModel, taskView);
  changeExclamationColor(taskView, params.priority);

  ProjectModel.addTask(taskModel);
}

function updateCallback(task, params) {
  console.log('Update task callback');

  task.title = params.title;
  task.description = params.description;
  task.dueDate = params.dueDate;
  task.priority = params.priority;
  task.view.getElementsByTagName("p")[0].innerText = params.title;
  changeExclamationColor(task.view, params.priority);
}

function changeExclamationColor(view, priority) {
  console.log('Changing task priority color');

  let exclamation = view.getElementsByClassName("fa-exclamation-circle")[0];
  if (priority === 'urgent') {
    exclamation.style.color = 'red';
  } else if (priority === 'high') {
    exclamation.style.color = 'orange';
  } else if (priority === 'medium') {
    exclamation.style.color = 'gold';
  } else if (priority === 'low') {
    exclamation.style.color = 'blue';
  }
}

function completedCallback() {
  console.log('Completed task callback');

  let taskView = this.parentNode.parentNode;
  let taskModel = ProjectModel.findTask(taskView);
  taskModel.completed = !taskModel.completed;
  console.log(taskModel.completed);
}

function editCallback() {
  console.log('Edit task callback');

  let taskView = this.parentNode.parentNode;
  let taskModel = ProjectModel.findTask(taskView);
  TaskViewModal.update(updateCallback, taskModel);
}

function removeCallback() {
  console.log('Remove task callback');

  let taskView = this.parentNode.parentNode;
  let taskModel = ProjectModel.findTask(taskView);
  ProjectModel.removeTask(taskModel);
}

export default {
  setListeners
}
