//this function is used to add a delay
function delay(milliseconds){
	return new Promise(resolve=> {
		setTimeout(resolve, milliseconds);
	});
}

var currTme = 10;
var Warning = " ";

//The reason this is an async function is to allow me to use await so I can add a 1 second delay
async function Countdown(){
	//this while loop controls the countdown
	while (currTme > 0) {
		//This sets the countdown number displayed on the webpage to whatever currTme is set to
		//Delays the program by 1 second
		await delay(1000);
		//Checks whether the countdown is lower than 5 then gives a warning.
		if (currTme < 5) {
			Warning = "Warning Less than 1/2 way to launch, time left = " + currTme;
			document.getElementById("Countdown").innerHTML = Warning;
		} else {
			document.getElementById("Countdown").innerHTML = currTme;
		}
		//decrements currTme by 1
		currTme -= 1;
	}
	//This conditional statement checks to see if the countdown reaches 1 then changes the image and test to "BlastOFF"
	if (currTme <= 0) {
		document.getElementById("Countdown").innerHTML = "BLASTOFF!";
		document.getElementById("rocket").src="Rocket_Blastoff.png";
	}

}
Countdown();