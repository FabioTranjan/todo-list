import ProjectController from './project'

function setListeners() {
  ProjectController.setListeners();

  document.getElementById("add-task").addEventListener("click", function(e) {
    e.preventDefault();
    TaskViewModal.create();
  });
}

function setupDefault() {
  ProjectController.setupDefault();
}
export default {
  setListeners,
  setupDefault
}
