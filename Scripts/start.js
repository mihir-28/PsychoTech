document.querySelector('.welcome_form').addEventListener('submit', function (event) {
  event.preventDefault();
  var email = document.querySelector('input[name="email"]').value;
  localStorage.setItem('email', email);
});