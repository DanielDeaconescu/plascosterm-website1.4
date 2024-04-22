"use strict";
// selecting the form icon button
const formIcon = document.querySelector(".form-icon");
// selecting the form modal
const formModal = document.querySelector(".form-modal");
// selecting the overlay
const theOverlay = document.querySelector(".overlay");
// selecting the Cancel button
const formCancelButton = document.querySelector(".cancel-btn-custom");
// selecting the form HTML element
const formElement = document.querySelector("#myForm");
// buttons that open the modal
const buttonsThatOpenModal = document.querySelectorAll(".open-modal");

// function to display the modal
const displayModal = function () {
  // display the form modal
  formModal.classList.remove("no-display");
  // display the overlay
  theOverlay.classList.remove("no-display");
  //remove the scroll from the body
  document.querySelector("body").style.overflowY = "hidden";
};

// function to close the modal
const closeModal = function () {
  // hide the form modal
  formModal.classList.add("no-display");
  // hide the overlay
  theOverlay.classList.add("no-display");
  // put back the scroll
  document.querySelector("body").style.overflowY = "scroll";
  // reset the form input data
  formElement.reset();
};

formIcon.addEventListener("click", displayModal);
theOverlay.addEventListener("click", closeModal);
formCancelButton.addEventListener("click", closeModal);
buttonsThatOpenModal.forEach((e) => e.addEventListener("click", displayModal));
