import TaskView from '../view/task'
import TaskViewModal from '../view/modal/task'
import TaskModel from '../model/task'

function setListeners() {
  document.getElementById("add-task").addEventListener("click", function(e) {
    e.preventDefault();
    TaskViewModal.create(createCallback);
  });
}

function createCallback(params) {
  console.log('Create task callback');

  const taskModel = TaskModel.create(params);
  TaskModel.save(taskModel);
  const callbacks = { edit: editCallback, remove: removeCallback, show: showCallback };
  const taskView = TaskView.create(taskModel.title, callbacks);
  //ProjectModel.setView(projectModel, projectView);
}

function updateCallback(project, params) {
  console.log('Update task callback');

  //project.title = params.title;
  //project.description = params.description;
  //project.view.getElementsByTagName("p")[0].innerText = params.title;
}

function showCallback() {
  console.log('Show task callback');

}

function editCallback() {
  console.log('Edit task callback');

  //let projectView = this.parentNode.parentNode;
  //let projectModel = ProjectModel.find(projectView);
  //ProjectViewModal.update(updateCallback, projectModel);
}

function removeCallback() {
  console.log('Remove task callback');

  //let projectView = this.parentNode.parentNode;
  //let projectModel = ProjectModel.find(projectView);

  //if (projectModel === ProjectModel.projects[0]) return;
  //ProjectModel.remove(projectModel);
}

export default {
  setListeners
}
