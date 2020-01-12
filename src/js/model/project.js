let projects = [];

let Project = (title, description) => {

  return {
    title,
    description
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
  console.log('Saving project view');
  project.view = view
}

export default {
  projects,
  create,
  save,
  setView
}
