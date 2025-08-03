// Character sets
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

// Reference DOM elements
const generateBtn = document.getElementById("generate");
const passwordDisplay = document.getElementById("password");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const length = prompt("How many characters? (8–128)");
  if (!length || isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  const includeLower = confirm("Include lowercase letters?");
  const includeUpper = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSymbols = confirm("Include special characters?");

  let charset = "";
  if (includeLower) charset += lowercase;
  if (includeUpper) charset += uppercase;
  if (includeNumbers) charset += numbers;
  if (includeSymbols) charset += symbols;

  if (charset === "") {
    alert("You must select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charset.length);
    password += charset[randIndex];
  }

  passwordDisplay.value = password;
}