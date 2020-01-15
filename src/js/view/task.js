import Base from './modal/base'

function create(taskName, callbacks) {
  console.log('Creating task view');

  let tasks = document.getElementById("tasks");

  let block = Base.createPanelBlock();
  tasks.appendChild(block);
  block.classList.add("task");

  let checkboxLabel = document.createElement("label");
  block.appendChild(checkboxLabel);
  checkboxLabel.classList.add("checkbox");

  let checkboxInput = document.createElement("input");
  checkboxLabel.appendChild(checkboxInput);
  checkboxInput.classList.add("completed");
  checkboxInput.setAttribute("type", "checkbox");

  let taskTitle = document.createElement("p");
  block.appendChild(taskTitle);
  taskTitle.innerText = taskName;

  let taskIcons = document.createElement("div");
  block.appendChild(taskIcons);
  taskIcons.classList.add("task-icons");

  let exclamationPanel = Base.createPanelIcon();
  taskIcons.appendChild(exclamationPanel);
  let exclamationIcon = Base.createIcon('fa-exclamation-circle');
  exclamationPanel.appendChild(exclamationIcon);

  let editPanel = Base.createPanelIcon();
  taskIcons.appendChild(editPanel);
  let editIcon = Base.createIcon('fa-edit');
  editPanel.appendChild(editIcon);

  let removePanel = Base.createPanelIcon();
  taskIcons.appendChild(removePanel);
  let removeIcon = Base.createIcon('fa-trash-alt');
  removePanel.appendChild(removeIcon);

  checkboxInput.addEventListener("change", function(e) {
    e.preventDefault();
    callbacks.completed.call(this);
    if (this.checked) {
      taskTitle.style.textDecoration = 'line-through';
      exclamationPanel.innerHTML = '';
    } else {
      taskTitle.style.textDecoration = 'none';
      exclamationPanel.appendChild(exclamationIcon);
    }
  });

  editPanel.addEventListener("click", function(e) {
    e.preventDefault();
    callbacks.edit.call(this);
  });

  removePanel.addEventListener("click", function(e) {
    e.preventDefault();
    callbacks.remove.call(this);
  });

  return block;
}

export default {
  create
}
