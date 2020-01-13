import ProjectView from '../view/project'
import ProjectViewModal from '../view/modal/project'
import ProjectModel from '../model/project'

function setListeners() {
  document.getElementById("add-project").addEventListener("click", function(e) {
    e.preventDefault();
    ProjectViewModal.create(createCallback);
  });
}

function setupDefault() {
  createCallback({ title: 'Default', description: 'Default project' });
}

function createCallback(params) {
  console.log('Create project callback');

  const projectModel = ProjectModel.create(params);
  ProjectModel.save(projectModel);
  const callbacks = { edit: editCallback, remove: removeCallback };
  const projectView = ProjectView.create(projectModel.title, callbacks);
  ProjectModel.setView(projectModel, projectView);
}

function updateCallback(project, params) {
  console.log('Update project callback');

  project.title = params.title;
  project.description = params.description;
  project.view.getElementsByTagName("p")[0].innerText = params.title;
}

function editCallback() {
  console.log('Edit project callback');

  let projectView = this.parentNode.parentNode;
  let projectModel = ProjectModel.find(projectView);
  ProjectViewModal.update(updateCallback, projectModel);
}

function removeCallback() {
  console.log('Remove project callback');

  let projectView = this.parentNode.parentNode;
  let projectModel = ProjectModel.find(projectView);

  if (projectModel === ProjectModel.projects[0]) return;
  ProjectModel.remove(projectModel);
}

export default {
  setListeners,
  setupDefault
}
