/*
    Assignment: M6A1
    File name:	m6a1.js
    Author:		Thomas Werstlein
    Date:		11 April 2023
*/

// Global Variables (used in multiple functions)
const W = window.screen.availWidth;
const H = window.screen.availHeight;
let head = document.getElementById('heading');
let out = document.getElementById('output');
let myCanvas = document.getElementById('myCanvas');

// M6A1 Project Constraints F-a

// function to "hide" the canvas div element
// -- closes the canvas after selecting a different function after showing the canvas
function setCanvasToZero(){
	myCanvas.style.width = 0;
	myCanvas.style.height = 0;
}

// Browser Test
function browserTest(){
	// document.getElementById("heading").innerHTML = String(`<h1>Browser Information</h1>`);
	head.innerHTML = String(`<h1>Browser Information</h1>`);
	outputText = String(`<ul><li>Browser Codename: ${navigator.appCodeName}</li>`);
	outputText += String(`<li>Browser Name: ${navigator.appName}</li>`);
	outputText += String(`<li>Browser Version: ${navigator.appVersion}</li>`);
	outputText += String(`<li>Browser Cookies: ${navigator.cookieEnabled}</li>`);
	outputText += String(`<li>Browser Language: ${navigator.language}</li>`);
	outputText += String(`<li>Browser Online: ${navigator.onLine}</li>`);
	outputText += String(`<li>Platform: ${navigator.platform}</li>`);
	outputText += String(`<li>User-agent Header: ${navigator.userAgent}</li></ul>`);
	out.innerHTML = outputText;
	setCanvasToZero();
}

// M6A1 Project Constraints F-b
// HTML Feature Test
function featureTest(){
	head.innerHTML = String(`<h1>Compatible HTML5 Features</h1>`);
	var list = '<ul>';
	var inputs = ["Search", "Number", "Range", "Color", "Tele", "Url", "Email", "Date", "Month", "Week", "Time", "Datetime", "Datetime-local"];
	var inp = document.createElement("input");
	for (var i = 0; i < inputs.length; i++){
		inp.setAttribute("type", inputs[i]);
		if (inp.type == "text"){
			list += String(`<li>${inputs[i]}: NO</li>`);
		} else {
			list += String(`<li>${inputs[i]}: YES</li>`);
		}
	}
	list += '</ul>';
	out.innerHTML = list;
	setCanvasToZero();
}

// M6A1 Project Constraints F-c
// Mobile Tests
function resolution(){
	let testInfo = String(`<h1>Mobile Screen Information<span id="h3"> - Screen Resolution</span></h1>`);
	head.innerHTML = testInfo;
	let testOutput = String(`<ul><li>Width: &nbsp${W}</li><li>Height: ${H}</li></ul>`);
	out.innerHTML = testOutput;
	setCanvasToZero();
}

function orientation(){
	let pageTitle = `<h1>Mobile Screen Information<span id="h3"> - Orientation</span></h1>`;
	head.innerHTML = pageTitle;
	let O = screen.orientation.type;
	out.innerHTML = `<ul><li>Orientation: ${O}</li></ul>`;
	setCanvasToZero();
}

// M6A1 Project Constraints F-d
// Canvas Tests
function genSup(){
	head.innerHTML = String(`<h1>Canvas General Support</h1>`);
	results = !!document.createElement('canvas').getContext;
	out.innerHTML = String(`<p>Canvas Support: <span id="uc">${results}</span></p>`);
	setCanvasToZero();
}

function textSup(){
	head.innerHTML = String(`<h1>Canvas Text Support</h1>`);
	var ctxt = myCanvas.getContext("2d");
	supportsText = typeof ctxt.fillText;
	if (supportsText == 'function'){
		outputText = "You have chosen your browser wisely, for it <span id='green';>DOES</span> supports canvas text.";
	} else {
		outputText = "You have chosen your browser poorly, for it does <span id='red';>NOT</span> support canvas text.";
	}
	out.innerHTML = String(`<p>${outputText}</p>`);
	setCanvasToZero();
}

function drawCanvas(){
	head.innerHTML = String(`<h1>Draw Canvas</h1>`);
	out.innerHTML = "";
	myCanvas.style.width = String(`${W}px`);
	myCanvas.style.height = String(`${H}px`);
	const con = myCanvas.getContext("2d");
	const img = new Image();
	img.addEventListener("load", 
		() => {
			let img_X = img.width * .28; 
			let img_Y = img.height * .28;
			con.drawImage(img, 2, 15, img_X, img_Y);}, false);
	img.src = "mad-max-fury-road-kritik.jpg";
}