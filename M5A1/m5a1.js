/*
 Assignment M5A1
 Author:     Thomas Werstlein
 Date:       Mar 2023
*/

// this function determins if a user provided number is a prime number or not by
// using the window.prompt method.

function Prompt(){
    
    var UI = window.prompt("Script Prompt:\nEnter a whole number to test as a prime number:");
    var TV = parseInt(UI);  // TV = test value
    var result = "";
    var HITS = 0;           // number of successful int divisions
    var DD = TV;            // division denominator 
    for (var i = 1; i < DD; DD--){
        if (TV % DD == 0){
        HITS += 1;
        }
        if (HITS > 1){
            result = UI + " is not"
        }
        else{
            result = UI + " is";
        }
    }
    return result;
}

document.getElementById("promptBox").innerHTML = Prompt();
document.getElementById("main").style.display = "block";