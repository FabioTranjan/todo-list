import ModalBase from './base'

function create() {
  let form = ModalBase.create('task-modal');  
  console.log('Create task modal form');
}

function update() {
  console.log('Update task modal form');
}

export default {
  create,
  update
}

