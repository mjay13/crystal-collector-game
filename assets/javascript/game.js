$(document).ready(function() {

// Global variables
// ----------------------------------
var playerScore = 0;
var playerWins = 0;
var playerLosses = 0;
var crystalArray = [];
var randomNum = 0;



// Functions
// ----------------------------------

function gameStart() {
var playerScore = 0;
var playerWins = 0;
var playerLosses = 0;
var crystalArray = [];

//generate random numbers and assign to html with .text
var THErandomNumber = randomNum(19, 120);

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

function generator (min, max) {
	//range of numbers is between the max and the min, starting with 1 (not 0), then adding the min so the min starts at the min and not at 0
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//for and while loop for crystal array and not making duplicate numbers, while test != -1 then push to array and html
for (var i = 0; i < crystalArray.length; i++) {
      crystalArray.push(crystalOne, crystalTwo, crystalThree, crystalFour);
      console.log("here they are " + crystalArray[i]);

      }



$("#crystalWell").on("click", ".crystals", function() {


});

function gameReset


// Game Logic
// ----------------------------------



//call gameSetUp function

//gameStart();

//on click event crystalWell
//if crystalWell is clicked and the class within that is clicked "crystals" then you can proceed
//else, alert "click a crystal to begin"




//if crystal value is > than randomNum, then player loses add to loss ++ and then update html 
// for updating html$("#playerScore").text(playerScore);
//if crystal value is = than randomNum, then player wins add to wins ++ and then update html

//after player wins or loses, run gameReset function


// ----------------------------------
//end document ready
});
