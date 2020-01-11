import Base from './base'

function create(callback) {
  console.log('Create project modal form');
  let projectModal = Base.createModal('project-modal');

  let titleInput = Base.createInput('Title', 'text');
  projectModal.form.appendChild(titleInput);

  let descriptionInput = Base.createInput('Description', 'text');
  projectModal.form.appendChild(descriptionInput);

  let buttons = Base.createButtons();
  projectModal.form.appendChild(buttons.field);

  buttons.submit.addEventListener("click", function(e) {
    e.preventDefault();

    projectModal.modal.classList.remove("is-active");
    let formData = new FormData(projectModal.form);
    let params = { title: formData.get('Title'),
	           description: formData.get('Description') };
    callback(params);
  });

  buttons.cancel.addEventListener("click", function(e) {
    e.preventDefault();
    projectModal.modal.classList.remove("is-active");
  });
}

function update() {
  console.log('Update project modal form');
}

export default {
  create,
  update
}
