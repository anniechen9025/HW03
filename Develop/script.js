// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  chars = [];
  
}

var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "_", "+", "?", "~",];
var numberCharacter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var chars = [];


function generatePassword() {
  var pwLength = 0;
  while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {

    pwLength = prompt("How long do you want your password ? ");
    var number = !isNaN(pwLength);
    if (!number) {
      alert("Please select a number !");
      continue
    } else{
      pwLength = parseInt(pwLength)
      if (pwLength < 8 || pwLength > 128) {
        alert("Please enter a number between 8 and 128 !")
      };
    };
  };

  const upper = confirm("Do you want UPPERCASEs in your random password?");
  const lower = confirm("Do you want LOWERCASEs in your random password?");
  const numberic = confirm("Do you want NUMBERs in your random password?");
  const special = confirm("Do you want SPECIALCHARACTERs in your random password?");

  if (upper == true) {
    chars.push(...upperLetter);
    // console.log(chars);
  }
  if (lower == true) {
    chars.push(...lowerLetter);
    // console.log(chars);
  }
  if (special == true) {
    chars.push(...specialCharacter);
    // console.log(chars);
  }
  if (numberic == true) {
    chars.push(...numberCharacter);
    // console.log(chars);
  };
  if(upper == false && lower == false && special == false && numberic == false){
    alert("Please select at least one");
    return generatePassword();
  }

  // console.log(chars);

  var pws = "";
  var stringChars = chars.join("");


  for (var i = 0; i < pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    pws += stringChars.substring(randomNumber, randomNumber + 1);
  };
  // console.log(pws)
  return pws;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




/*
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
====================================
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Math.random()).substring(0, pwlength)

```*/

/*var upper = confirm("Do you want UPPERCASEs in your random password?");

  var lower = confirm("Do you want LOWERCASEs in your random password?");

  var special = confirm("Do you want SPECIALCHARACTERs in your random password?");

  var numberic = confirm("Do you want NUMBERs in your random password?");

  var chars = [];

  if(upper == true){

    chars.push(...upperLetter);
    // console.log(chars);

  }else{
    return chars;
  };

  if(lower == true){

    chars.push(...lowerLetter);

  }else{
    return chars;
  };

  if(special == true){

    chars.push(...specialCharacter);

  }else{
    return chars;
  };

  if(numberic == true){

    chars.push(...numberCharacter);

  }else{
    return chars;
  };

  console.log(chars);

  var pws ="";
  var stringChars = chars.toString();
  console.log(chars);

  for(var i = 0; i < pwLength; i++){
    var randomNumber = Math.floor(Math.random()*chars.length);
    pws += stringChars.substring(randomNumber, randomNumber+1);
  };

  ================================================================


random generator within digit range
Math.random()).substring(0, pwlength)

example:
function getPassword(){

  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
  var passwordLength = 16;
  var password = "";

  fot(var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber+1);
  }
}*/