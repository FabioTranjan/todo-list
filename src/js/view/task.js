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

  let showPanel = Base.createPanelIcon();
  taskIcons.appendChild(showPanel);

  let showIcon = Base.createIcon('fa-angle-down');
  showPanel.appendChild(showIcon);

  let editPanel = Base.createPanelIcon();
  taskIcons.appendChild(editPanel);

  let editIcon = Base.createIcon('fa-edit');
  editPanel.appendChild(editIcon);

  let removePanel = Base.createPanelIcon();
  taskIcons.appendChild(removePanel);

  let removeIcon = Base.createIcon('fa-trash-alt');
  removePanel.appendChild(removeIcon);

  showPanel.addEventListener("click", function(e) {
    e.preventDefault();
    callbacks.show.call(this);
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
