/*
    Assignment: M6A1
    File name:	m6a1.js
    Author:		Thomas Werstlein
    Date:		April 2023
*/

// M6A1 Project Constraints F-a
// Browser Test
function browserTest(){
	document.getElementById("heading").innerHTML = '<h1>' + "Browser Information" + '</h1>';
	outputText = '<ul>' + '<li>' + "Browser Codename: " + navigator.appCodeName + '</li>';
	outputText += '<li>' + "Browser Name: " + navigator.appName + '</li>';
	outputText += '<li>' + "Browser Version: " + navigator.appVersion + '</li>';
	outputText += '<li>' + "Browser Cookies: " + navigator.cookieEnabled + '</li>';
	outputText += '<li>' + "Browser Language: " + navigator.language + '</li>';
	outputText += '<li>' + "Browser Online: " + navigator.onLine + '</li>';
	outputText += '<li>' + "Platform: " + navigator.platform + '</li>';
	outputText += '<li>' + "User-agent Header: " + navigator.userAgent + '</li>' + '</ul>';
	document.getElementById("output").innerHTML = outputText;
}

// M6A1 Project Constraints F-b
// HTML Feature Test
function featureTest(){
	document.getElementById("heading").innerHTML = '<h1>' + "Compatible HTML5 Features" + '</h1>';
	var list = '<ul>';
	var inputs = ["Search", "Number", "Range", "Color", "Tele", "Url", "Email", "Date", "Month", "Week", "Time", "Datetime", "Datetime-local"];
	var inp = document.createElement("input");
	for (var i = 0; i < inputs.length; i++){
		inp.setAttribute("type", inputs[i]);
		if (inp.type == "text"){
			list += '<li>' + inputs[i] + ": NO" + '</li>';
		} else {
			list += '<li>' + inputs[i] + ": YES" + '</li>';
		}
	}
	list += '</ul>';
	document.getElementById("output").innerHTML = list;
}

// M6A1 Project Constraints F-c
// Mobile Tests
function resolution(){
	let testInfo = '<h1>' + "Mobile Screen Information" + '<span id="h3">' + " - Screen Resolution" + '</span>' + '</h1>'
	document.getElementById("heading").innerHTML = testInfo;
	const W = window.screen.availWidth;
	const H = window.screen.availHeight;
	document.getElementById("output").innerHTML = '<ul>' + '<li>' + "Width: &nbsp" + W + '</li>' + '<li>' + "Height: " + H + '</li>' + '</ul>';
}

function orientation(){
	let pageTitle = '<h1>' + "Mobile Screen Information" + '<span id="h3">' + " - Orientation" + '</span>' + '</h1>';
	document.getElementById("heading").innerHTML = pageTitle;
	let O = screen.orientation.type;
	document.getElementById("output").innerHTML = '<ul>' + '<li>' + "Orientation: " + O + '</li>' + '</ul>';
}

// M6A1 Project Constraints F-d
// Canvas Tests
function genSup(){
	document.getElementById("heading").innerHTML = '<h1>' + "Canvas General Support" + '</h1>';
	results = !!document.createElement('canvas').getContext;
	document.getElementById("output").innerHTML = '<p>' + "Canvas Support: " + '<span id="uc">' + results + '</span>' + '</p>';
}

function textSup(){
	document.getElementById("heading").innerHTML = '<h1>' + "Canvas Text Support" + '</h1>';
	var cnvs = document.getElementById("myCanvas");
	var ctxt = cnvs.getContext("2d");
	supportsText = typeof ctxt.fillText;
	if (supportsText == 'function'){
		outputText = "You have chosen your browser wisely for it <span id='green';>DOES</span> supports canvas text.";
	} else {
		outputText = "You have chosen your browser poorly for it does <span id='red';>NOT</span> support canvas text.";
	}
	document.getElementById("output").innerHTML = '<p>' + outputText + '</p>';
}

function drawCanvas(){
	document.querySelector("#heading").innerHTML = '<h1>' + "Draw Canvas" + '</h1>';
	const can = document.querySelector("#myCanvas");
	can.style.width = "840px";
	can.style.height = "600px";
	const con = can.getContext("2d");
	const img = document.getElementById("image");
	// console.log(img.src);
	con.drawImage(img, 1, 1);		
}