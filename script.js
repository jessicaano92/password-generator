  //Assignment code
  var generateBtn = document.querySelector("#generate");
   // Created 4 global variables 



            //Array of capital letters for password
   var capCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
   "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
            //Array of lower case letters for password     
   var lowCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
   "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            //Array of numbers for password
   var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            //Array of symbols for  password
   var symbolCharacters = ["!", "}", "{", "[", "]", "(", ")", "@", "#", "$", "%",
    "^", "&", "*", "-", "+", "=", "?", ".", "<", "/", "|", "\\"];
    // var pwPossibleCharacters = ("");   //not sure about this yet

    var finalPassword = ("");     //come back to this

          

        //Function to prompt user to go through password options
  function heresPasswordOptions() {
      // Variables that store boolean regarding special characters, numbers, lower/upper case letters
      hasCapCharacters = confirm( "Click OK to include capital characters" );

      hasLowCharacters = confirm ( "Click OK to include lowercase characters");
  
      hasNumericCharacters = confirm ("Click OK to include numbers");
  
      hasSymbolCharacters = confirm ("Click OK to include symbols");




      var length = parseInt (             //variable that stores the length of the password
    prompt("How many characters do you want your password to have?")
  
  );
        //Conditional statements regarding numbers and length -prompt will end if false
  if (numbers(length) === true) {   //come back to this 
    alert ("Password length must include a number");
    return;
  }
        
  if (length > 128) {
    alert ("Password must be less than 129 characters");
    return;
  }
     
  if (length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

    //this will check if user doesn't include any of the below characters
    //if all are false, generator will end 
    if (
    hasCapCharacters === false &&
    hasLowCharacters === false &&
    hasNumericCharacters === false &&
    hasSymbolCharacters === false 
       ){

        alert("Select at least one character")
        return;
    
} 
        //Object with keys and values for user input storage

    var passwordOptions = {
      length: length,
      hasCapCharacters: hasCapCharacters,
      hasLowCharacters: hasLowCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasSymbolCharacters: hasSymbolCharacters,

    };
        return passwordOptions;
}


      //Function for random elements from an array

      function makeRandom(arr) {
        var randCharacter = Math.floor(Math.random() * arr.length);
        var randFactor = arr[randCharacter];
        return randFactor;
      }


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);









// var password = generatePassword();
  // var passwordText = document.querySelector("#password");





   

  

  


  // passwordText.value = password;