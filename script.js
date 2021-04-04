
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
    var characters = {

    alphabet: 'abcdefghigklmnopqrstuvwxyz',
    upperAlph: 'ABCDEFGHIGKLMNOPQESTUVWXYZ' ,
    moreNumbers: '1234567890',
    symbols: '!@#$%^&*()_+-=|}{[]":;?><,./*|',

    }

    // var outside of function so we can reassign it in function and call it out after its been updated
    var randomPassword = "";

  function getCharacters(){

    // empty string to add all conditions that pass
    var randomChar = "";
 
     
    // gets upper case letters
    if(upperCaseLetters){
      randomChar += characters.upperAlph;
      
      console.log(randomChar);
    }

    // gets lower case letter
    if(lowerCaseLetters){
      randomChar += characters.alphabet;
      
      console.log(randomChar);  
    }

    // gets number 
    if(wantNumber){
      randomChar += characters.moreNumbers;
      
      console.log(randomChar);  
    }

    // gets special char 
    if(specialChar){
      randomChar += characters.symbols;
      
      console.log(randomChar);
    }

    for(var i = randomPassword.length; i < length; i++)
      randomPassword += randomChar.charAt(Math.floor(Math.random() * randomChar.length));

    console.log(randomPassword);
    console.log(randomPassword.length)

  } 

  getCharacters();

  return(`Your password is ${randomPassword}`);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
