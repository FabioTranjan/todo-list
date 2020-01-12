import ModalBase from './base'

function create(submitCallback) {
  console.log('Create project modal');
  createForm(submitCallback);
}

function update(submitCallback, project) {
  console.log('Update project modal: ' + project.title);
  createForm(submitCallback, project);
}

function createForm(submitCallback, project = null) {
  console.log('Creating project form');

  let modal = ModalBase.createModal('project-modal');

  let titleInput;
  if (project) {
    titleInput = ModalBase.createInput('Title', 'text', project.title);
  } else {
    titleInput = ModalBase.createInput('Title', 'text');
  }
  modal.form.appendChild(titleInput);

  let descriptionInput;
  if (project) {
    descriptionInput = ModalBase.createInput('Description', 'text', project.description);
  } else {
    descriptionInput = ModalBase.createInput('Description', 'text');
  }
  modal.form.appendChild(descriptionInput);

  let buttons = ModalBase.createButtons();
  modal.form.appendChild(buttons.field);
  
  buttons.submit.addEventListener("click", function(e) {
    e.preventDefault();

    modal.modal.classList.remove("is-active");
    let formData = new FormData(modal.form);
    let params = { title: formData.get('Title'),
                   description: formData.get('Description') };
    if (project) {
      submitCallback(project, params);
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
