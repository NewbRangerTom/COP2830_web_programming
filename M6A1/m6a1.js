/*
    Assignment: M6A1
    File name:	m6a1.js
    Author:		Thomas Werstlein
    Date:		April 2023
*/

// M6A1 Project Constraints F-a
// Browser Test
function browserTest(){
	document.getElementById("output")
}

// M6A1 Project Constraints F-b
// HTML Feature Test
function featureTest(){

}

// M6A1 Project Constraints F-c
// Mobile Tests
function resolution(){

}

function orientation(){

}

// M6A1 Project Constraints F-d
// Canvas Tests
function genSup(){

}

function textSup(){

}

function drawCanvas(){
	var cnvs = document.getElementById("myCanvas");
	var ctxt = cnvs.getContext("2d");
	// var img = document.getElementById("scream");
	var img = "../images/transgender-symbol.png";
	ctxt.drawImage(img, 10, 10);
}

function mOver() {
	document.getElementById("heading").innerHTML = "placeholder div."
	document.getElementById("output").innerHTML = "placeholder div."
  }
  
  function mOut() {
	document.getElementById("heading").innerHTML = "This is the heading "
	document.getElementById("output").innerHTML = "This is the output "
  }