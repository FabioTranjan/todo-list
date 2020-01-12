let projects = [];

let Project = (title, description) => {

  let getParams = () => {
    return { title, description };
  }

  let setParams = (params) => {
    this.title = params.title;
    this.description = params.description;
  }

  return {
    title,
    description,
    getParams,
    setParams
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
  project.view = view
}

function find(view) {
  console.log('Finding project model');
  return projects.find(project => { return project.view === view }); 
}

function remove(project) {
  console.log('Removing project model: ' + project.title);
  project.view.remove();
  let index = projects.indexOf(project);
  projects.splice(index, 1);
  project = null;
}

export default {
  projects,
  setView,
  create,
  save,
  find,
  remove
}
