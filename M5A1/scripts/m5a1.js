// Assignment M5A1
// Author:     Thomas Werstlein
// Date:       Mar 2023
// https://stackoverflow.com/questions/7056770/changing-the-way-a-javascript-alert-or-prompt-looks

function Prompt(){
    
    // if (typeof UI !== "string") 
    var UI = window.prompt("Script Prompt:\nEnter a whole number to test as a prime number:");
    var TV = parseInt(UI);  // TV = test value
    var text = "";
    var HITS = 0;           // number of successful int divisions
    var DD = TV;            // division denominator 
    for (var i = 1; i < DD; DD--){
        if (TV % DD == 0){
        HITS += 1;
        }
        if (HITS > 1){
            text = UI + " is not"
        }
        else{
            text = UI + " is";
        }
    }
    return text;
}

document.getElementById("promptBox").innerHTML = Prompt();