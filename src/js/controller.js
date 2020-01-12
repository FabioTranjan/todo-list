import ProjectView from './view/project'
import TaskView from './view/task'

import ProjectViewModal from './view/modal/project'
import TaskViewModal from './view/modal/task'

import ProjectModel from './model/project'
import TaskModel from './model/task'


function setListeners() {
  document.getElementById("add-project").addEventListener("click", function(e) {
    e.preventDefault();
    ProjectViewModal.create(createProjectCallback);
  });

  document.getElementById("add-task").addEventListener("click", function(e) {
    e.preventDefault();
    TaskViewModal.create();
  });
}

function setupDefault() {
  createProjectCallback({ title: 'Default', description: 'Default project' });
}

function createProjectCallback(params) {
  console.log('Create project callback');

  const projectModel = ProjectModel.create(params);
  ProjectModel.save(projectModel);
  const projectView = ProjectView.create(projectModel.title, editProjectCallback, removeProjectCallback);
  ProjectModel.setView(projectModel, projectView);
}

function updateProjectCallback(project, params) {
  console.log('Update project callback');

  project.title = params.title;
  project.description = params.description;
  project.view.getElementsByTagName("p")[0].innerText = params.title;
}

function editProjectCallback() {
  console.log('Edit project callback');

  let projectView = this.parentNode.parentNode;
  let projectModel = ProjectModel.find(projectView);
  ProjectViewModal.update(updateProjectCallback, projectModel);
}

function removeProjectCallback() {
  console.log('Remove project callback');

  let projectView = this.parentNode.parentNode;
  let projectModel = ProjectModel.find(projectView);

  if (projectModel.title === 'Default') return;

  ProjectModel.remove(projectModel);
}

export default {
  setListeners,
  setupDefault
}
