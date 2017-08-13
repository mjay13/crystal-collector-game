$(document).ready(function() {

	// Global variables
	// ----------------------------------
	var playerScore = 0;
	var playerWins = 0;
	var playerLosses = 0;
	var crystalOne = 0;
  	var	crystalTwo = 0;
  	var crystalThree = 0;
  	var	crystalFour = 0;

	var THErandomNumber = 0;



	// Functions
	// ----------------------------------

	//game setup when page loads
	function gameStart() {
		
		var playerScore = 0;
		var playerWins = 0;
		var playerLosses = 0;
		crystalOne = generator(1, 12);
  		crystalTwo = generator(1, 12);
  		crystalThree = generator(1, 12);
  		crystalFour = generator(1, 12);
		

		//generate random numbers and assign to html with .text
		var THErandomNumber = generator(19, 120);

		//adding to html
		$("#randomNum").text(THErandomNumber); 
		$("#playerScore").text(playerScore);

		//console log to check the values of the randomized numbers
		console.log("crystal 1: " + crystalOne);
		console.log("crystal 2: " + crystalTwo);
		console.log("crystal 3: " + crystalThree);
		console.log("crystal 4: " + crystalFour);
		console.log("random number: " + THErandomNumber);

	}

	// reset game after a win or loss
	function gameReset () {
		
		//only reset the player score and not the wins or losses as in gameStart
		playerScore = 0;

		//re-generate random numbers for crystals
		crystalOne = generator(1, 12);
  		crystalTwo = generator(1, 12);
  		crystalThree = generator(1, 12);
  		crystalFour = generator(1, 12);

		//generate random numbers and assign to html with .text
		THErandomNumber = generator(19, 120);

		//adding to html
		$("#randomNum").text(THErandomNumber); 
		$("#playerScore").text(playerScore);

		//console log to check the values of the randomized numbers
		console.log("crystal 1: " + crystalOne);
		console.log("crystal 2: " + crystalTwo);
		console.log("crystal 3: " + crystalThree);
		console.log("crystal 4: " + crystalFour);
		console.log("random number: " + THErandomNumber);
	}

	//range of numbers is between the max and the min, yay paramaters!
	function generator (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	


	// Game Logic
	// ----------------------------------



	//call game start function

	gameStart();

	//if crystalWell is clicked and the class within that is clicked "crystals" then you can proceed
	//else, alert "click a crystal to begin"
	




	//if crystal value is > than randomNum, then player loses add to loss ++ and then update html 
	// for updating html$("#playerScore").text(playerScore);
	//if crystal value is = than randomNum, then player wins add to wins ++ and then update html

	//after player wins or loses, run gameReset function


	// ----------------------------------
	//end document ready
});
