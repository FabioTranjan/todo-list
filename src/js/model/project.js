let projects = [];
let activeProject = null;

let Project = (title, description) => {
  let tasks = [];

  let getParams = () => {
    return { title, description };
  }

  return {
    title,
    description,
    getParams,
    tasks
  }
};

function create(params) {
  console.log('Creating project model');
  return Project(params.title, params.description);
}

function save(project) {
  console.log('Saving project model');
  projects.push(project);
  console.log(projects);
}

function setView(project, view) {
  console.log('Saving project view to model');
  project.view = view;
}

function find(view) {
  console.log('Finding project model');
  return projects.find(project => { return project.view === view }); 
}

function findTask(view) {
  console.log('Finding task model');
  return activeProject.tasks.find(task => { return task.view === view });
}

function removeTask(task, project = activeProject) {
  console.log('Removing task model');
  task.view.remove();
  let index = project.tasks.indexOf(task);
  project.tasks.splice(index, 1);
  task = null;
}

function remove(project) {
  console.log('Removing project model: ' + project.title);
  project.tasks.forEach(function (task) {
    removeTask(task, project); 
  });
  project.view.remove();
  let index = projects.indexOf(project);
  projects.splice(index, 1);
  project = null;
  activeProject = projects[index-1];
}

function addTask(task) {
  console.log('Adding task to project');
  activeProject.tasks.push(task);
  console.log(activeProject.tasks);
}

function setActive(project) {
  console.log('Setting active project');
  activeProject = project;
}

function getActive() {
  return activeProject;
}

export default {
  projects,
  setView,
  create,
  save,
  find,
  remove,
  addTask,
  removeTask,
  setActive,
  getActive,
  findTask,
  removeTask
}
