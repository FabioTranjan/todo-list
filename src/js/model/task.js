let tasks = [];

const Task = (title, description, dueDate, priority) => {
  let priorities = ['low','medium','high','urgent']

  let getParams = () => {
    return { title, description, dueDate, priority };
  }

  return {
    title,
    description,
    dueDate,
    priority,
    getParams
  }
};

function create(params) {
  console.log('Creating task model');
  return Task(params.title, params.description, params.dueDate, params.priority);
}

function save(task) {
  console.log('Saving project model');
  tasks.push(task);
  console.log(tasks); 
}

export default {
  tasks,
  create,
  save
}
