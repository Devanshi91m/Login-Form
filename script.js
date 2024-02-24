alert("Registration Form");
const signInButton = document.getElementById('sign-in');
const signUpButton = document.getElementById('sign-up');

signUpButton.addEventListener('click', () => {
   alert("Registration Successful");
});
signInButton.addEventListener('click', () => {
   prompt("Logged In Successfully");
});