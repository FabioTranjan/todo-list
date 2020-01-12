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

function createProjectCallback(params) {
  console.log('Create project callback');

  const projectModel = ProjectModel.create(params);
  ProjectModel.save(projectModel);
  const projectView = ProjectView.create(projectModel.title);
  ProjectModel.setView(projectModel, projectView);
}

export default {
  setListeners
}
