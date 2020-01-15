const Task = (title, description, dueDate, priority) => {
  let priorities = ['low','medium','high','urgent']
  let completed = false;

  let getParams = () => {
    return { title, description, dueDate, priority };
  }

  return {
    title,
    description,
    dueDate,
    priority,
    completed,
    getParams
  }
};

function create(params) {
  console.log('Creating task model');
  return Task(params.title, params.description, params.dueDate, params.priority);
}

function setView(task, view) {
  console.log('Setting task view to project');
  task.view = view;
}

export default {
  create,
  setView
}
