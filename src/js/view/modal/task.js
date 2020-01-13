import ModalBase from './base'

function create(submitCallback) {
  console.log('Create task modal');
  createForm(submitCallback);
}

function update(submitCallback, task) {
  console.log('Update task modal: ' + task.title);
  createForm(submitCallback, task);
}

function createForm(submitCallback, task = null) {
  console.log('Creating task form');

  let modal = ModalBase.createModal('task-modal');

  let titleInput;
  if (task) {
    titleInput = ModalBase.createInput('Title', 'text', task.title);
  } else {
    titleInput = ModalBase.createInput('Title', 'text');
  }
  modal.form.appendChild(titleInput);

  let descriptionInput;
  if (task) {
    descriptionInput = ModalBase.createInput('Description', 'text', task.description);
  } else {
    descriptionInput = ModalBase.createInput('Description', 'text');
  }
  modal.form.appendChild(descriptionInput);

  let dueDateInput;
  dueDateInput = ModalBase.createInput('Date', 'date');
  modal.form.appendChild(dueDateInput);

  let priorities = ['low','medium','high','urgent'];
  let priorityInput = ModalBase.createDropdown('Priority', priorities);
  modal.form.appendChild(priorityInput);

  let buttons = ModalBase.createButtons();
  modal.form.appendChild(buttons.field);
  
  buttons.submit.addEventListener("click", function(e) {
    e.preventDefault();

    modal.modal.classList.remove("is-active");
    let formData = new FormData(modal.form);
    let params = { title: formData.get('Title'),
                   description: formData.get('Description'),
    		   dueDate: formData.get('Date'),
                   priority: formData.get('Priority') };
    if (task) {
      submitCallback(task, params);
    } else {
      submitCallback(params);
    }
  });
  
  buttons.cancel.addEventListener("click", function(e) {
    e.preventDefault();
    modal.modal.classList.remove("is-active");
  });
}

export default {
  create,
  update
}
