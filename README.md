# Password Generator

## Description

A web application that generates a random set of alphanumeric characters and symbols based on the user's parameters. With the click of the "Generate Password" button, the user will be prompted to provide their desired length and if they would like uppercase and/or lowercase letters, numbers, and symbols. The generated password will populate the box in the middle of the screen.

## Technologies

* HTML
* CSS
* Javascript

<!-- ## Goal of the Project

**Create a Password Generator web application**

In order to ensure  -->


## Usage

The following image is an example of the web application's appearance and functionality:

![Image](Assets/03-javascript-homework-demo.png)

## What I Did

#### Prompting User for Parameters

Asking the user for desired length and characters to assign to a character set

```
isLength = prompt("How long do want your password to be?")
var hasUpper = confirm("Do you want to use uppercase letters?")
var hasLower = confirm("Do you want to use lowercase letters?")
var hasNumber = confirm("Do you want to use numbers?")
var hasSymbol = confirm("Do you want to use symbols?")

finalCharSet = ""
```

#### Randomizing Set of Characters

Function to generate a random index of a character set to add to the password string

```
function generatePassword(finalCharSet, isLength) {
  var finalPassword = ""

  for (i=1; i < isLength; i++ ) {
    var characterIdx = Math.floor(Math.random()* finalCharSet.length + 1)
    finalPassword += finalCharSet[characterIdx]
  }
}
```

#### Working Buttons

Assign code to deploy when button is clicked using DOM

```
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", userPrompt);
```

## URL

See the web application [here](https://scaredofseagles.github.io/03-Homework-Password-Generator/)

## License

MIT License

Copyright (c) 2020 Dailey Kaze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
