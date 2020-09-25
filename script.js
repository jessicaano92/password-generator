
                      
   var generateBtn = document.querySelector("#generate");
                            
   
     // Created 4 global variables        //Array of capital letters for password
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
   
          

        //Function to prompt user to go through password options
  function heresCriteria() {
    
      var length = parseInt (   //variable that stores the length of the password
        prompt("How many characters do you want your password to have?")
  
  );
        //Conditional statements regarding numbers and length -prompt will end if false
  if (isNaN(length) === true) {   
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

// Variables that store boolean regarding special characters, numbers, lower/upper case letters
  hasCapCharacters = confirm( "Would you like to include capital letters?" );

  hasLowCharacters = confirm ( "Would you like to include lowercase letters?");

  hasNumericCharacters = confirm ("Would you like to include any numbers?");

  hasSymbolCharacters = confirm ("Would you like to include any symbols?");

    //this will check if user doesn't include any of the below characters
    //if all are false, generator will end 
    
    if ( hasCapCharacters === false && hasLowCharacters === false && 
    hasNumericCharacters === false && hasSymbolCharacters === false 
       ){

        alert("Must choose at least one character")
        return;
    
} 
        //Object with keys and values for user input storage

    var passwordOptions = {
      length: length,
      hasCapCharacters, hasCapCharacters,
      hasLowCharacters, hasLowCharacters,
      hasNumericCharacters, hasNumericCharacters,
      hasSymbolCharacters, hasSymbolCharacters,

    };
        return passwordOptions;
}


      //Function for random characters from an array

      function createRandom(arr) {
        var randIndex = Math.floor(Math.random() * arr.length);
        var randElement = arr[randIndex];
        return randElement;
      }

      //function to generate user password
      function generatePassword() {
        var options = heresCriteria();
        //arrays to store characters that will be included in password
        var result = [];
        var possibleChar = [];
        var guaranteedChar = [];

            //Conditional statements that adds arrays with capital/lowercase letters, symbols, and numbers to another array of possible characters depending on the users choice
        if (options.hasCapCharacters === true) {
          possibleChar=possibleChar.concat(capCharacters);
          guaranteedChar.push(createRandom(capCharacters));
        }

        if (options.hasLowCharacters === true) {
          possibleChar=possibleChar.concat(lowCharacters);
          guaranteedChar.push(createRandom(lowCharacters));
        }
        
        if (options.hasNumericCharacters === true) {
          possibleChar=possibleChar.concat(numericCharacters);
          guaranteedChar.push(createRandom(numericCharacters));
        }

        if (options.hasSymbolCharacters === true) {
          possibleChar=possibleChar.concat(symbolCharacters);
          guaranteedChar.push(createRandom(symbolCharacters));
        }


            //for loops 
        for (var i = 0; i < options.length; i++) {
          var possibleChar = createRandom(possibleChar);
          result.push(possibleChar);
        }

        for (var i = 0; i < guaranteedChar.length; i++) {
          result[i] = guaranteedChar[i];
        }
        return result.join('');

      }


  
        function typePassword(){
          var password = generatePassword();
          var passwordText = document.querySelector("#password");
          passwordText.value = password;
        }



// Add event listener to generate button
generateBtn.addEventListener("click", typePassword);



