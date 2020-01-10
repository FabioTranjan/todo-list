import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../css/styles.scss';

import Interactor from './interactor'

document.addEventListener("DOMContentLoaded", function(event) {
  console.log(Interactor.setListeners());
});
