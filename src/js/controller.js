import ProjectModal from './view/modal/project'
import TaskModal from './view/modal/task'

function setListeners() {
  document.getElementById("add-project").addEventListener("click", function(e) {
    e.preventDefault();
    ProjectModal.create(createProjectCallback);
  });

  document.getElementById("add-task").addEventListener("click", function(e) {
    e.preventDefault();
    TaskModal.create();
  });
}

function createProjectCallback(params) {
  console.log('Create project callback');
  console.log(params);
}

export default {
  setListeners
}
