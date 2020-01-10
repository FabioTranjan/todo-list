function create(modalType) {
  console.log('Creating modal');

  let modalContainer = document.getElementById(modalType);

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
  modalContent.innerHTML = "Test";

  let modalButton = document.createElement("button");
  modal.appendChild(modalButton);
  modalButton.classList.add("modal-close");
  modalButton.classList.add("is-large");
  modalButton.setAttribute("aria-label", "close");

  modalButton.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("is-active");
  });

  modalBackground.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("is-active");
  });
}

export default {
  create
}
