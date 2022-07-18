//This function disables the start button and enables the stop button
function Start(){
	document.getElementById("stop").disabled = false;
	document.getElementById("start").disabled = true;
}
//This function disables the stop buttona nd enables the start button
function Stop() {
	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;
}
