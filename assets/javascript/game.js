// On page loading:
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
		
		//alert
		alert("Click any crystal to begin.");

		//set variables & assign numbers
		var playerScore = 0;
		var playerWins = 0;
		var playerLosses = 0;
		crystalOne = generator(1, 12);
  		crystalTwo = generator(1, 12);
  		crystalThree = generator(1, 12);
  		crystalFour = generator(1, 12);
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
	
	// Add to wins, update html, alert, reset game
	function Win() {
      playerWins++;
      $("#playerWins").text(playerWins);
      alert("You collected the perfect amount of crystals!");
    }

    function Lose() {
      playerLosses++;
      $("#playerLosses").text(playerLosses);
      alert("You have too many crystals, you lose!");
  	}

	function WinOrLose() {
		if (playerScore === THErandomNumber) {
			Win();
			gameReset();
		}
		else if (playerScore > THErandomNumber) {
			Lose();
			gameReset();

		}
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

		//adding to html/what is the difference between .text and .html? -- both work, .text more versital
		$("#randomNum").text(THErandomNumber); 
		$("#playerScore").text(playerScore);

		//console log to check the values of the randomized numbers
		console.log("crystal 1: " + crystalOne);
		console.log("crystal 2: " + crystalTwo);
		console.log("crystal 3: " + crystalThree);
		console.log("crystal 4: " + crystalFour);
		console.log("random number: " + THErandomNumber);
	}

	

// Game Logic
// ----------------------------------



	//call game start function

	gameStart();

	// on clikc event for crystals
	$("#crystalOne").on("click", function() {
		playerScore += crystalOne;
		$("#playerScore").text(playerScore);
		//check to see if game ends here?
		WinOrLose();
	});

	$("#crystalTwo").on("click", function() {
		playerScore += crystalTwo;
		$("#playerScore").text(playerScore);
		WinOrLose();
	});

	$("#crystalThree").on("click", function() {
		playerScore += crystalThree;
		$("#playerScore").text(playerScore);
		WinOrLose();
	});

	$("#crystalFour").on("click", function() {
		playerScore += crystalFour;
		$("#playerScore").text(playerScore);
		WinOrLose();
	});


	//after player wins or loses, run gameReset function
	gameReset();

	// ----------------------------------
	//end of document ready
});
