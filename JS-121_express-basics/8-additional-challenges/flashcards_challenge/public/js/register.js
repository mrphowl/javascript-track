/**
 * Custom constraint validation for Confirm password field.
 *
 * Password and Confirm password must have the same value.
 */
const confirmPassword = document.querySelector('input[name=confirmpw]');
const form = document.querySelector('form.newuser-form');

form.addEventListener('click', validateAndSend);

function validateAndSend(event) {
  const formData = new FormData(event.target.parentElement);
  const dataObj = Object.fromEntries(formData.entries());
  const {password, confirmpw} = dataObj;

  if(confirmpw !== password) {
    confirmPassword.setCustomValidity('Password does not match.');
    confirmPassword.reportValidity();
    event.preventDefault();
  } else {
    confirmPassword.setCustomValidity('');
  }
}
