import Base from './modal/base'

function create(projectName, callbacks) {
  console.log('Creating project view');

  let projects = document.getElementById("projects");

  let block = Base.createPanelBlock();
  projects.appendChild(block);
  block.classList.add("project");

  let iconPanel = Base.createPanelIcon();
  block.appendChild(iconPanel);

  let bookIcon = Base.createIcon('fa-book');
  iconPanel.appendChild(bookIcon);

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

  block.addEventListener("click", function (e) {
    e.preventDefault();
    callbacks.active.call(this);
  });

  return block;
}

export default {
  create
}
