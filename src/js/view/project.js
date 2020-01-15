import Base from './modal/base'

function create(projectName, callbacks) {
  console.log('Creating project view');

  let projects = document.getElementById("projects");

  let block = Base.createPanelBlock();
  projects.appendChild(block);
  block.classList.add("project");

  let bookIconPanel = Base.createPanelIcon();
  block.appendChild(bookIconPanel);

  let bookIcon = Base.createIcon('fa-book');
  bookIconPanel.appendChild(bookIcon);

  let text = document.createElement("p");
  block.appendChild(text);
  text.innerText = projectName;

  let editIcons = document.createElement("div");
  block.appendChild(editIcons);
  editIcons.classList.add("project-icons");

  let editIconPanel = Base.createPanelIcon();
  editIcons.appendChild(editIconPanel);

  let editIcon = Base.createIcon('fa-edit');
  editIconPanel.appendChild(editIcon);

  let removeIconPanel = Base.createPanelIcon();
  editIcons.appendChild(removeIconPanel);

  let removeIcon = Base.createIcon('fa-trash-alt');
  removeIconPanel.appendChild(removeIcon);

  editIconPanel.addEventListener("click", function(e) {
    e.preventDefault();
    callbacks.edit.call(this);
  });

  removeIconPanel.addEventListener("click", function(e) {
    e.preventDefault();
    callbacks.remove.call(this);
  });

  bookIconPanel.addEventListener("click", function (e) {
    e.preventDefault();
    callbacks.active.call(this.parentNode);
  });

  return block;
}

function setActive(project, isActive) {
  if (isActive) {
    project.view.classList.add('is-active');
    project.tasks.forEach(function(task) {
      task.view.style.display = 'flex';
    });
  } else {
    project.view.classList.remove('is-active');
    project.tasks.forEach(function(task) {
      task.view.style.display = 'none';
    });
  }
}

export default {
  create,
  setActive
}
