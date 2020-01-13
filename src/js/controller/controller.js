import ProjectController from './project'
import TaskController from './task'

function setListeners() {
  ProjectController.setListeners();
  TaskController.setListeners();
}

function setupDefault() {
  ProjectController.setupDefault();
}

export default {
  setListeners,
  setupDefault
}
