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
var characters = 
  {
    numbers: ["0", "1", "2", "3", "4", "5", "6" , "7", "8", "9"],
    specChar: ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"],
    upprCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowrCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 
  }
  
  
  choices = ["numbers", "specialChar", "upperCase", "lowerCase"]
  // chartype = choices[Math.floor(Math.random() * 4)]
  // passValue[chartype][Math.floor(Math.random()*10)]


// THINK IT OUT
// I want to create a function that will take variables, in this case, upper and lower case letters, numbers 0-9, special characters, and store those values for future use.
// Next I need to set parameters for how many characters I want to be generated in a random password. Between 8-128.
// Then I want my stored values to be randomly selected, and from my parameters, return a string the falls in the confines of how many characters I want.
  function generatePassword() {
    debugger;
    var characters = choices
    charType = choices[Math.floor(Math.random() * 4)]
    // characters[chartype][Math.floor(Math.random()*10)]
  // var character = "qwertyhfhg"
  var result = "";
  for(i=0; i<10; i++){
    var randomIndex = Math.floor(Math.random() * characters.length)
    // console.log(randomIndex, word[randomIndex])
    result += chars[randomIndex]
  }
  
  return result
}

// var addition = function(numOne, numTwo){
//   return numOne + numTwo;
// }
// addition(1, 2)

// Write password to the #password input
function writePassword() {
  // debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

