function createModal(modalName) {
  console.log('Creating base modal');

  let modalContainer = document.getElementById(modalName);

  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.classList.add("is-active");
  modalContainer.appendChild(modal);

  let modalBackground = document.createElement("div");
  modal.appendChild(modalBackground);
  modalBackground.classList.add("modal-background");

  let modalContent = document.createElement("div");
  modal.appendChild(modalContent);
  modalContent.classList.add("modal-content");

  let modalBox = document.createElement("div");
  modalContent.appendChild(modalBox);
  modalBox.classList.add("box");

  let modalButton = document.createElement("button");
  modal.appendChild(modalButton);
  modalButton.classList.add("modal-close");
  modalButton.classList.add("is-large");
  modalButton.setAttribute("aria-label", "close");

  let form = document.createElement("form");
  modalBox.appendChild(form);

  modalButton.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("is-active");
  });

  modalBackground.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("is-active");
  });

  return { modal, form };
}

function createInput(inputText, inputType, value = null) {
  console.log('Creating text input');

  let control = createBaseInput(inputText);

  let input = document.createElement("input");
  control.appendChild(input);
  input.classList.add("input");
  input.setAttribute("type", inputType); 
  input.setAttribute("name", inputText);
  if (value) input.setAttribute("value", value);

  return control.parentNode;
}

function createDropdown(inputText, options, value = null) {
  console.log('Creating dropdown input');

  let control = createBaseInput(inputText);

  let selectDiv = document.createElement("div");
  control.appendChild(selectDiv);
  selectDiv.classList.add("select");

  let select = document.createElement("select");
  select.setAttribute("name", inputText);
  selectDiv.appendChild(select);

  options.forEach(function(el) {
    let option = document.createElement("option");
    if (value && el === value) {
      option.selected = 'selected';
    }
    select.appendChild(option);
    option.innerText = el;
  });

  return control.parentNode;
}

function createBaseInput(inputText) {
  console.log('Creating base input');

  let field = document.createElement("div");
  field.classList.add("field");
  
  let label = document.createElement("label");
  field.appendChild(label);
  label.classList.add("label");
  label.innerText = inputText;

  let control = document.createElement("div");
  field.appendChild(control);
  control.classList.add("control");

  return control;
}

function createButtons() {
  console.log('Creating submit/cancel buttons');

  let field = document.createElement("div"); 
  field.classList.add("field");
  field.classList.add("is-grouped");

  let submitControl = document.createElement("div"); 
  field.appendChild(submitControl);
  submitControl.classList.add("control");

  let submitButton = document.createElement("button");
  submitControl.appendChild(submitButton);
  submitButton.classList.add("button");
  submitButton.classList.add("is-link");
  submitButton.innerText = 'Submit';

  let cancelControl = document.createElement("div"); 
  field.appendChild(cancelControl);
  cancelControl.classList.add("control");

  let cancelButton = document.createElement("button");
  cancelControl.appendChild(cancelButton);
  cancelButton.classList.add("button");
  cancelButton.classList.add("is-link");
  cancelButton.classList.add("is-light");
  cancelButton.innerText = 'Cancel';

  return { field: field, submit: submitButton, cancel: cancelButton };
}

function createIcon(iconName) {
  let icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add(iconName);
  icon.setAttribute("aria-hidden", "true");
  return icon;
}

function createPanelIcon() {
  let iconPanel = document.createElement("span");
  iconPanel.classList.add("panel-icon");
  return iconPanel;
}

function createPanelBlock() {
  let panelBlock = document.createElement("a");
  panelBlock.classList.add("panel-block");
  return panelBlock;
}

export default {
  createModal,
  createInput,
  createDropdown,
  createButtons,
  createIcon,
  createPanelIcon,
  createPanelBlock
}
