/*
    Assignment: M6A1
    File name:	m6a1.js
    Author:		Thomas Werstlein
    Date:		11 April 2023
*/

// Global Variables
const W = window.screen.availWidth;					// get the screen width
const H = window.screen.availHeight;				// get the screen height
let O = screen.orientation.type;					// get the screen orientation
let head = document.getElementById('heading');		// shorthard variable for heading
let out = document.getElementById('output');		// shorthand variable for output
let myCanvas = document.getElementById('myCanvas');	// shorthand variable for myCanvas
// create a 2 dimentional canvas object (https://www.w3schools.com/graphics/canvas_reference.asp)
const con = myCanvas.getContext("2d");

// M6A1 Project Constraints F-a

// function to "hide" the canvas div element
// -- effectively closes the canvas after selecting a different function after showing the canvas
function clearCanvas(){
	// myCanvas.style.width = 0;
	// myCanvas.style.height = 0;
	con.clearRect(0, 0, W, H);
}

/* Browser Test
  -- changes the heading and concatinates an unordered list where the list items
  -- are populated with calls to the various navigator api calls */
function browserTest(){
	// heading div
	head.innerHTML = String(`<h1>Browser Information</h1>`);
	// output div
	outputText = String(`<ul><li>Browser Codename: ${navigator.appCodeName}</li>`);
	outputText += String(`<li>Browser Name: ${navigator.appName}</li>`);
	outputText += String(`<li>Browser Version: ${navigator.appVersion}</li>`);
	outputText += String(`<li>Browser Cookies: ${navigator.cookieEnabled}</li>`);
	outputText += String(`<li>Browser Language: ${navigator.language}</li>`);
	outputText += String(`<li>Browser Online: ${navigator.onLine}</li>`);
	outputText += String(`<li>Platform: ${navigator.platform}</li>`);
	outputText += String(`<li>User-agent Header: ${navigator.userAgent}</li></ul>`);
	out.innerHTML = outputText;
	// canvas div
	clearCanvas();
}

// M6A1 Project Constraints F-b
/* HTML Feature Test
 -- changes heading and loops through a list containing the various forms of input
 -- then check the return of the query and disploays the result */
function featureTest(){
	// heading div
	head.innerHTML = String(`<h1>Compatible HTML5 Features</h1>`);
	// output div
	var inputs = ["Search", "Number", "Range", "Color", "Tele", "Url", "Email", "Date", "Month", "Week", "Time", "Datetime", "Datetime-local"];
	var inp = document.createElement("input");
	var list = '<ul>';
	/* for (var i = 0; i < inputs.length; i++){
		inp.setAttribute("type", inputs[i]);
		if (inp.type == "text"){
			list += String(`<li>${inputs[i]}: NO</li>`);
		} else {
			list += String(`<li>${inputs[i]}: YES</li>`);
		}
	} */
	for (let input of inputs){
		inp.setAttribute("type", input);
		if (inp.type == "text"){
			list += String(`<li>${input}: NO</li>`);
		}
		else {
			list += String(`<li>${input}: Yes</li>`);
		}
	}
	list += '</ul>';
	out.innerHTML = list;
	// canvas div
	clearCanvas();
}

// M6A1 Project Constraints F-c
/* Mobile Tests
-- changes the heading and checks the window available width and height then displays the results */ 
function resolution(){
	// heading div
	head.innerHTML = String(`<h1>Mobile Screen Information<span id="h3"> - Screen Resolution</span></h1>`);
	// output div
	out.innerHTML = String(`<ul><li>Width: &nbsp${W}</li><li>Height: ${H}</li></ul>`);
	// canvas div
	clearCanvas();
}

/* -- changes the heading and checks the screen orientation then displays the result */ 
function orientation(){
	// heading div
	head.innerHTML = `<h1>Mobile Screen Information<span id="h3"> - Orientation</span></h1>`;
	// output div
	out.innerHTML = `<ul><li>Orientation: ${O}</li></ul>`;
	// canvas div
	clearCanvas();
}

// M6A1 Project Constraints F-d
/* Canvas Tests
-- changes the heading and checks the browser for canvas support then displays the results */ 
function genSup(){
	// heading div
	head.innerHTML = String(`<h1>Canvas General Support</h1>`);
	// output div
	results = !!document.createElement('canvas').getContext;
	out.innerHTML = String(`<p>Canvas Support: <span id="uc">${results}</span></p>`);
	// canvas div
	clearCanvas();
}

/* -- changes the heading and checks the browser for canvas text support then displays the results */ 
function textSup(){
	// heading div
	head.innerHTML = String(`<h1>Canvas Text Support</h1>`);
	// output div
	var ctxt = myCanvas.getContext("2d");
	supportsText = typeof ctxt.fillText;
	if (supportsText == 'function'){
		outputText = "You have chosen your browser wisely, for it <span id='green';>DOES</span> supports canvas text.";
	} else {
		outputText = "You have chosen your browser poorly, for it does <span id='red';>NOT</span> support canvas text.";
	}
	out.innerHTML = String(`<p>${outputText}</p>`);
	// canvas div
	clearCanvas();
}

/* -- changes the heading then draws an images to the canvas div section */ 
function drawCanvas(){
	// heading div
	head.innerHTML = String(`<h1>Draw Canvas</h1>`);
	// output div
	out.innerHTML = "";
	
	// canvas div
	// create an image object (functionally equialent to document.createElement('img'))
	// reference = https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
	const img = new Image();
/* 
	because drawImage() cannot be called before the image is loaded, I used an eventListener to 
	wait for the image to load. reference = https://www.w3schools.com/tags/canvas_drawimage.asp
	Here I also use an arrow function which is simply a shorthard way to write "function () {}"
	for more on eventListener's check out: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/
	img.addEventListener("load", 
		() => {
			// create variables for image height and width
			let img_X = img.width; 
			let img_Y = img.height;
			// set the canvas height and width
			myCanvas.style.width = String(`${img_X}px`);
			myCanvas.style.height = String(`${img_Y}px`);
			// draw image height and width reduced to 30% of actual size
			con.drawImage(img, 2, 15, img_X * .3, img_Y * .3);}, false);
	img.src = "mad-max-fury-road-kritik.jpg";
}