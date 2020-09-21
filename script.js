
// Assign code to button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", userPrompt);


// User Prompts and Confirms (length, uppercase, lowercase, numbers, and symbols)

function userPrompt() {
  console.log('reached userPrompt function')
  
  isLength = prompt("How long do want your password to be?")
  var hasUpper = confirm("Do you want to use uppercase letters?")
  var hasLower = confirm("Do you want to use lowercase letters?")
  var hasNumber = confirm("Do you want to use numbers?")
  var hasSymbol = confirm("Do you want to use symbols?")
  
  /* if ( hasUpper == false ) && ( hasLower == false ) && ( hasNumber == false ) && ( hasSymbol == false ) {
    alert("Please choose one of the choices.")
  } 
  else {
      generatePassword
  } */

  // Append characters to a final character set
  var finalCharSet = ""
  if ( hasUpper ) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (hasLower) finalCharSet += "abcdefghijklmnopqrstuvwxyz";
  if (hasNumber) finalCharSet += "1234567890";
  if (hasSymbol) finalCharSet += "!@#$%?&*()";
  
  
  generatePassword(finalCharSet, isLength)
      
}

// Generate set of random alphanumeric characters

function generatePassword(finalCharSet, isLength) {
  var finalPassword = ""
  console.log("reached the generatePassword function")
  

  for (i=1; i < isLength; i++ ) {
    var characterIdx = Math.floor(Math.random()* finalCharSet.length + 1)
    finalPassword += finalCharSet[characterIdx]
  }

  console.log("Your generated password is: " + finalPassword)
  
  // Replace text in html with generated password  
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;



}