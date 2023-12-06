// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters)"));

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return "";
    }

    let includeLowerCase = confirm("Include lowercase characters?");
    let includeUpperCase = confirm("Include uppercase characters?");
    let includeNumbers = confirm("Include numbers?");
    let includeSymbols = confirm("Include symbols?");

    if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSymbols) {
      alert("Please select at least one character type.");
      return "";
    }

    let allCharacters = "";
    if (includeLowerCase) allCharacters += lowerCase;
    if (includeUpperCase) allCharacters += upperCase;
    if (includeNumbers) allCharacters += numbers;
    if (includeSymbols) allCharacters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters[randomIndex];
    }

    return generatedPassword;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 if (password !== "" && password !== undefined) 
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
