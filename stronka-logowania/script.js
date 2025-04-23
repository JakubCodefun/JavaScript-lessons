const correctUsername = "admin";
const correctPassword = "1234";

function login() {
  const enteredUsername = document.getElementById("username").value.trim();
  const enteredPassword = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Sprawdzenie pustych pól
  if (enteredUsername === "" || enteredPassword === "") {
    message.textContent = "Uzupełnij oba pola!";
    message.style.color = "orange";
    return;
  }

  // Sprawdzenie poprawności loginu i hasła
  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    window.location.href = "welcome.html";
  } else if (enteredUsername === correctUsername && enteredPassword !== correctPassword) {
    message.textContent = "Hasło jest niepoprawne.";
    message.style.color = "red";
  } else if (enteredUsername !== correctUsername && enteredPassword === correctPassword) {
    message.textContent = "Login jest niepoprawny.";
    message.style.color = "red";
  } else {
    message.textContent = "Login i hasło są niepoprawne.";
    message.style.color = "red";
  }
}
