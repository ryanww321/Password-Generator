// Generator functions http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()+=?><.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  };

  passwordText.value = password;
  
  
// Function for generating the random password

function generatePassword() {

var passwordLength = prompt("Between 8 & 128 characters, how long do you want your password to be?");

var numbers = confirm("Do you want numbers in your password?");

var lowerCases = confirm("Do you want lowercases in your password?");

var upperCases = confirm("Do you want uppercases in your password?");

var specialCharacters = confirm("Do you want special characters in your password?");


   
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
