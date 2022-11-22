function generatePass() {

    var length = prompt ("What is the length for the passwords?")

    var lower_charset = "abcdefghijklmnopqrstuvwxyz"; 
    var upper_charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var special_charset="?.$@;:_^#![]{}"; 
    
    var numset="0123456789";
    
    var minLength=8; 
    
    var maxLength=128; 
    
    var includeUpper = confirm ("Do you want to include uppercase letter?")
    var includeLower = confirm ("Do you want to include lower letter?")
    var includeSpecialChar = confirm ("Do you want to include special character?")
    var includeNumber = confirm ("Do you want to include number?")
    

   
    
    var pass="";
    
    
    
    
    var selectedSet = ""
    if (includeUpper == true) {
        selectedSet = selectedSet + upper_charset
    }
    
    if (includeLower == true) {
        selectedSet = selectedSet + lower_charset
    }
    
    if (includeSpecialChar == true) {
        selectedSet = selectedSet + special_charset
    }
    
    if (includeNumber == true) {
        selectedSet = selectedSet + numset
    }
    
    for(var i=0;i<length;i++){
    
    pass+=selectedSet.charAt(Math.floor(Math.random() * selectedSet.length));
    
    }
    
    
    
   
    return pass 
    }

// / Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);