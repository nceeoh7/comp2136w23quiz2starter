"use strict";

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let eighteenYearsAgo= new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear()-18);

const onSubmit = (evt) => {
  // TODO:: Check the following validation and display the appropriate errors:
  // TODO:: Names can't be empty.
  // TODO:: Emails need to match.
  // TODO:: Emails need to be in a valid format.
  // TODO:: Terms need to be agreed upon.
  
  
  // TODO:: Display a GREEN success message that says "Thank you for signing up please check INPUTTED EMAIL ADDRESS"
  // TODO:: INPUTTED EMAIL ADDRESS needs to be the email address they entered
  // TODO:: Only display success message if there are no validation errors.

  evt.preventDefault();
};

const onReset=(evt) =>{
  // TODO:: Resets the form and any errors.
}

document.addEventListener("DOMContentLoaded", () => {
  // TODO:: Make the submit button and reset button functional.
  
});
