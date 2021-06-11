// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// create global variable array for variables that go in password
// DISCOVERED Dictionaries for arrays!!!! How to use it tho...

   var numbers = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9];
   var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
   var upprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var lowrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  
  
  
  // choices = ["numbers", "specialChar", "upperCase", "lowerCase"]
  // chartype = choices[Math.floor(Math.random() * 4)]
  // passValue[chartype][Math.floor(Math.random()*10)]
// characters.numbers etc
// possiblity array, ask what characters


// THINK IT OUT
// I want to create a function that will take variables, in this case, upper and lower case letters, numbers 0-9, special characters, and store those values for future use.
// Next I need to set parameters for how many characters I want to be generated in a random password. Between 8-128.
// Then I want my stored values to be randomly selected, and from my parameters, return a string the falls in the confines of how many characters I want.
function chooseOption() {
// Need variables for password length
// Need variables for length to be <= 8 and >=128

// prompt for password length
  var passLength = parseInt(prompt("How long would you like your password to be?"));

  if ((passLength < 8) || (length > 128)) {
    alert("The password must have a minimum of 8 characters!");
    return;
  }
}
 









function generatePassword() {
  
  // var allCharacters = (numbers, specChar, upprCase, lowrCase);
  var result = "";



  for(i=0; i < upprCase.length; i++){
    var randomIndex = [Math.floor(Math.random() * upprCase.length)]
     
    result += upprCase[randomIndex];
  }
  
  return result
};



// Write password to the #password input
function writePassword() {
  // debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

