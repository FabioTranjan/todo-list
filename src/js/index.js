import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../css/styles.scss';

import Controller from './controller'

document.addEventListener("DOMContentLoaded", function(event) {
  console.log(Controller.setListeners());
});
