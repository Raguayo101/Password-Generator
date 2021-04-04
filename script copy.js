/*
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = Number(prompt("Please choose length of password."));
  console.log(length);

  // stops program is password length is not between 8 and 128
  if(length < 8 || length > 128){
    return("Password must be between 8 and 128 characters");
  }

  var upperCaseLetters = confirm("Would you like uppercase letters?");
  var lowerCaseLetters = confirm("Would you like lowercase letters?");
  var wantNumber = confirm("Would you like a number?");
  var specialChar = confirm("Woud you like special characters?");

  // gettings all of the characters 
  var alphabet = "abcdefghigklmnopqrstuvwxyz";
  var upperAlph = "ABCDEFGHIGKLMNOPQESTUVWXYZ"; 
  var moreNumbers = "1234567890";
  var symbols = "!@#$%^&*()_+-=";

  function getCharacters(){

    // Getting random chars 
    var ranUpperLetter = upperAlph.charAt(Math.floor(Math.random() * upperAlph.length));
    var ranLowerLetter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    var ranNumber = moreNumbers.charAt(Math.floor(Math.random() * moreNumbers.length));
    var ranSpecialChar = symbols.charAt(Math.floor(Math.random() * symbols.length));

    var randomPassword = "";

    var ranString = ranSpecialChar + ranNumber + ranLowerLetter + ranUpperLetter;  
     
    // gets random upper case letter
    if(upperCaseLetters){
        randomPassword += ranUpperLetter; 

      
      console.log(randomPassword);
      console.log(ranUpperLetter);
    }

    // gets random lower case letter
    if(lowerCaseLetters){
      randomPassword += ranLowerLetter;
      
      console.log(randomPassword);
      console.log(ranLowerLetter);
    }

    // gets random number 
    if(wantNumber){
      randomPassword += ranNumber;
      
      console.log(randomPassword);
      console.log(ranNumber);
    }

    // gets random special char 
    if(specialChar){
      randomPassword += ranSpecialChar;
      
      console.log(randomPassword);
      console.log(ranSpecialChar);
    }

    for(var i = randomPassword.length; i < length; i++)
      randomPassword += ranString.charAt(Math.floor(Math.random() * i));

    console.log(randomPassword);
  

  } 

  getCharacters();


  





}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/