function create(projectName) {
  console.log('Creating project view');

  let projects = document.getElementById("projects");

  let block = document.createElement("a");
  projects.appendChild(block);
  block.classList.add("project");
  block.classList.add("panel-block");

  let iconPanel = document.createElement("span");
  block.appendChild(iconPanel);
  iconPanel.classList.add("panel-icon");

  let icon = document.createElement("i");
  iconPanel.appendChild(icon);
  icon.classList.add("fas");
  icon.classList.add("fa-book");
  icon.setAttribute("aria-hidden", "true");

  let text = document.createElement("p");
  block.appendChild(text);
  text.innerText = projectName;

  let editIcons = document.createElement("div");
  block.appendChild(editIcons);
  editIcons.classList.add("project-icons");

  let editIconPanel = document.createElement("span");
  editIcons.appendChild(editIconPanel);
  editIconPanel.classList.add("panel-icon");

  let editIcon = document.createElement("i");
  editIconPanel.appendChild(editIcon);
  editIcon.classList.add("fas");
  editIcon.classList.add("fa-edit");
  editIcon.setAttribute("aria-hidden", "true");

  let removeIconPanel = document.createElement("span");
  editIcons.appendChild(removeIconPanel);
  removeIconPanel.classList.add("panel-icon");

  let removeIcon = document.createElement("i");
  removeIconPanel.appendChild(removeIcon);
  removeIcon.classList.add("fas");
  removeIcon.classList.add("fa-trash-alt");
  removeIcon.setAttribute("aria-hidden", "true");

  return block;
}

export default {
  create
}
