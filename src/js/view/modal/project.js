import ModalBase from './base'

function create(submitCallback) {
  console.log('Create project modal form');
  let modal = ModalBase.createModal('project-modal');

  let titleInput = ModalBase.createInput('Title', 'text');
  modal.form.appendChild(titleInput);

  let descriptionInput = ModalBase.createInput('Description', 'text');
  modal.form.appendChild(descriptionInput);

  let buttons = ModalBase.createButtons();
  modal.form.appendChild(buttons.field);

  buttons.submit.addEventListener("click", function(e) {
    e.preventDefault();

    modal.modal.classList.remove("is-active");
    let formData = new FormData(modal.form);
    let params = { title: formData.get('Title'),
	           description: formData.get('Description') };
    submitCallback(params);
  });

  buttons.cancel.addEventListener("click", function(e) {
    e.preventDefault();
    modal.modal.classList.remove("is-active");
  });
}

function update() {
  console.log('Update project modal form');
}

export default {
  create,
  update
}
