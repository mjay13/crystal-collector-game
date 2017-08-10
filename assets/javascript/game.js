$(document).ready(function() {

    // Global variables
    var playerScore = 0;
    var playerWins = 0;
    var playerLosses = 0;
    var crystalArray = [];
    var randomNum = 0;

    // Functions

    var gameSetUp = function() {
        var playerScore = 0;
        var playerWins = 0;
        var playerLosses = 0;
        var crystalArray = [];
        var randomNum = 0;
        //generate random numbers and assign to html with .text
    };

    function generator (min, max) {
    	//range of numbers is between the max and the min, starting with 1 (not 0), then adding the min so the min starts at the min and not at 0
    	return Math.floor(Math.random() * (max - min + 1) + min;
    }

    //for and while loop for crystal array and not making duplicate numbers, while test != -1 then push to array and html

    

    // Game Logic

    //call gameSetUp function

    //on click event crystalWell
    //if crystalWell is clicked and the class within that is clicked "crystals" then you can proceed
    //else, alert "click a crystal to begin"


    //if crystal value is > than randomNum, then player loses add to loss ++ and then update html
    //if crystal value is = than randomNum, then player wins add to wins ++ and then update html

    //after player wins or loses, run gameSetUp function



    //end document ready
});