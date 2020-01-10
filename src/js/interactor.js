import ProjectModal from './modal/project'
import TaskModal from './modal/task'

function setListeners() {
  document.getElementById("add-project").addEventListener("click", function(e) {
    e.preventDefault();
    ProjectModal.create();
  });

  document.getElementById("add-task").addEventListener("click", function(e) {
    e.preventDefault();
    TaskModal.create();
  });
}

export default {
  setListeners
}
