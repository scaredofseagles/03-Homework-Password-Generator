
// Assign code to button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", userPrompt);


// User Prompts and Confirms (length, uppercase, lowercase, numbers, and symbols)

function userPrompt() {
  
  isLength = prompt("How long do want your password to be?")
  var hasUpper = confirm("Do you want to use uppercase letters?")
  var hasLower = confirm("Do you want to use lowercase letters?")
  var hasNumber = confirm("Do you want to use numbers?")
  var hasSymbol = confirm("Do you want to use symbols?")

  // Append characters to a final character set
  finalCharSet = ""
  if ( hasUpper ) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (hasLower) finalCharSet += "abcdefghijklmnopqrstuvwxyz";
  if (hasNumber) finalCharSet += "1234567890";
  if (hasSymbol) finalCharSet += "!@#$%?&*()";
  
  // Checks if at least one of the character options were chosen
  if ( hasUpper == true  || hasLower == true  || hasNumber == true  || hasSymbol == true ) {
    if ( isLength >= 8 && isLength <= 128 ){
      generatePassword(finalCharSet, isLength)
    } else {
      alert('Please choose between 8 and 128 characters');
      userPrompt()
    }

  } else {
    alert('Please select at lease ONE option');
    userPrompt()
  }
  
}

// Generate set of random alphanumeric characters

function generatePassword(finalCharSet, isLength) {
  var finalPassword = ""

  for (i=1; i < isLength; i++ ) {
    var characterIdx = Math.floor(Math.random()* finalCharSet.length + 1)
    finalPassword += finalCharSet[characterIdx]
  }
  
  // Replace text in html with generated password  
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}