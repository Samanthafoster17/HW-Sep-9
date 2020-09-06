// Assignment Code
var generateBtn = document.querySelector("#generate");

//create variable for element id generator
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
var symbols = "!@#$%^&*()_-+=;:<>,.?/\\|][{}~`".split('');
var numbers = "0123456789".split('');
var userOptions = lowercase + uppercase + symbols + numbers;

// generate password function
function generatePassword() {
  var password = "";
  var passwordLength = prompt("choose a password between 8-128 characters");

  var isUpper = false;
  var isLower = false;
  var isNumbers = false;
  var isSymbols = false;

  if (passwordLength >= 8 && passwordLength <= 128) {

    isUpper = confirm("do you want your password to contain upper case letters?");
    isLower = confirm("do you want your password to contain lower case letters?");
    isNumbers = confirm("do you want your password to contain numbers?");
    isSymbols = confirm("do you want your password to contain symbols?");

    if (isUpper) {
      password = password + uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    if (isLower) {
      password = password + lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    if (isNumbers) {
      password = password + numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (isSymbols) {
      password = password + symbols[Math.floor(Math.random() * symbols.length)];
    }

    var remainingPasswordLength = passwordLength - password.length;
    var leftOverPassword = "";
    console.log(remainingPasswordLength);

    for (var i = 0; i < remainingPasswordLength; i++) {
      console.log(remainingPasswordLength);
      console.log(" l :" + leftOverPassword.length);
      console.log(" r : " + remainingPasswordLength);

      if (leftOverPassword.length === remainingPasswordLength) {
        break
      }
      if (isUpper && leftOverPassword.length < remainingPasswordLength) {
        leftOverPassword = leftOverPassword + uppercase[Math.floor(Math.random() * uppercase.length)];
      }
      if (isLower && leftOverPassword.length < remainingPasswordLength) {
        leftOverPassword = leftOverPassword + lowercase[Math.floor(Math.random() * lowercase.length)];
      }
      if (isNumbers && leftOverPassword.length < remainingPasswordLength) {
        leftOverPassword = leftOverPassword + numbers[Math.floor(Math.random() * numbers.length)];
      }
      if (isSymbols && leftOverPassword.length < remainingPasswordLength) {
        leftOverPassword = leftOverPassword + symbols[Math.floor(Math.random() * symbols.length)];
      }

      console.log(isUpper);
    }

    password = password + leftOverPassword;
    console.log(password);
  }

  else {
    alert("does not meet password requirement");
  }

  console.log(password.length);
  return password;
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

