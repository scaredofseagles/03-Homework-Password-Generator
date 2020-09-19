// Assignment Code
var generateBtn = document.querySelector("#generate");

// User Prompts and Confirms (length, uppercase, lowercase, numbers, and symbols)
var finalPassword = ""

var isLength = prompt("How long do want your password to be?")
var hasUpper = confirm("Do you want to use uppercase letters?")
var hasLower = confirm("Do you want to use lowercase letters?")
var hasNumber = confirm("Do you want to use numbers?")
var hasSymbol = confirm("Do you want to use symbols?")


// Append characters to a final character set

var finalCharSet = ""
if ( hasUpper ) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if (hasLower) finalCharSet += "abcdefghijklmnopqrstuvwxyz"
if (hasNumber) finalCharSet += "1234567890"
if (hasSymbol) finalCharSet += "!@#$%?&*()"

// Loop through final character set for random indexes and add to password text

for (i=0; i > isLength; i++){
  var characterIdx = parseInt(Math.random * finalCharSet.length)
  finalPassword += finalCharSet[characterIdx]

}
console.log(`Your generated password is: ${finalPassword} `)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
