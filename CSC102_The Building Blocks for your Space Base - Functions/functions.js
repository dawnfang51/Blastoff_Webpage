//this function is used to add a delay
function delay(milliseconds){
	return new Promise(resolve=> {
		setTimeout(resolve, milliseconds);
	});
}

var currTme = 10;

//The reason this is an async function is to allow me to use await so I can add a 1 second delay
async function Countdown(){
	//this while loop controls the countdown
	while (currTme > 0) {
		//This sets the countdown number displayed on the webpage to whatever currTme is set to
		document.getElementById("Countdown").innerHTML = currTme;
		//Delays the program by 1 second
		await delay(1000);
		//decrements currTme by 1
		currTme -= 1;
	}
	//This conditional statement checks to see if the countdown reaches 1 then changes the image and test to "BlastOFF"
	if (currTme <= 0) {
		document.getElementById("Countdown").innerHTML = "BLASTOFF!";
		document.getElementById("rocket").src="Rocket_Blastoff.png";
	}
}

function play() {
	var die1 = 5
	var die2 = 2

	var sum = die1+die2
	document.write("Die 1 = " + die1)
	document.write("<br/>")
	document.write("Die 2 = " + die2)
	document.write("<br/>")
	document.write("Sum = " + sum)
	document.write("<br/>")
	//conditional to see if sum is equal to 7 or 11
	if (sum == 7 || sum == 11)
	{ 
		document.write("CRAPS - you lose")
		document.write("<br/>")
	}
	else if (die1== die2 && die1%2 == 0)
	{
		document.write("DOUBLES - you win")
		document.write("<br/>")
	}

}
document.write("Simple Craps")
document.write("<br/>")
play();

Countdown();