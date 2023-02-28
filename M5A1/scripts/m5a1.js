// Assignment M5A1
// Author:     Thomas Werstlein
// Date:       Mar 2023 

function Prompt(){
    var text = "";
    var HITS = 0;
    var UI = prompt("");
    var TV = parseInt(UI);
    var DD = TV;
    while (DD > 0){
        if (TV % DD == 0) {
            HITS += 1;
            DD -= 1;
            if (HITS > 2) {
                text = UI + " is not a prime number";
              }
            else {
                text = UI + " is a prime number";
              }
            }   
        }
    document.getElementById("Prompt").innerHTML = text;
    document.getElementById("Prompt").style.setProperty("background-color", "lightgrey");
    // document.getElementById("Prompt")
    // document.getElementById("Prompt")
    // document.getElementById("Prompt")
    // document.getElementById("Prompt")
    // document.getElementById("Prompt")
}
window.prompt("Script Prompt:\nEnter a whole number to test as a prime number:")