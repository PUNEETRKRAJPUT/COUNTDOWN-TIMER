const loginForm = document.querySelector('form');
const loginButton = document.getElementById('login-button');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Your login logic here
  if (username === "admin" && password === "password") {
    // Redirect to inventory management system
    window.location.href = "inventory.html";
  } else {
    // Show error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Incorrect username or password";
    loginForm.appendChild(errorMessage);
  }
});
