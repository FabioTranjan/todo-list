import Base from './base'

function create() {
  Base.create('task-modal');  
  console.log('Create task modal');
}

function update() {
  console.log('Update task modal');
}

export default {
  create,
  update
}

