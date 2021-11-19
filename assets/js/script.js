// --- EVENT LISTENERS ---

// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button"); // returns an array (html collection) of the buttons

    // iterating through the buttons array by storing/using each value in buttons one per iteration (dont need indexing)
    for (let button of buttons){

        // ev-lis click function on each button
        button.addEventListener("click", function(){

            // finding out the data type from the attribute we created where 'this' refers to the button in this iteration 
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else {
                // otherwise setting the data-type as the game type
                let gameType = this.getAttribute("data-type");
                // and calling runGame() with that game type
                runGame(gameType);
            }

        });
    }

    // event listener to make the addition game run as the default 
    runGame("addition");

})





// --- FUNCTIONS ---

/**
 * The main game loop
 * Called when the game first loads
 * Creates two variables which contain a random number between 1 and 25
 */
function runGame(gameType){

    // creating two variables which are random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // checking the gameType and calling the appropriate function
    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Program terminated.` // stops the loop and displays error message to the console for debugging
    }

}

// function for checking the user's answer
function checkAnswer(){
    
}

// function for ...
function calculateCorrectAnswer(){
    
}

// function for calculating the user's score
function incrementScore(){
    
}

// function for counting the user's incorrect answers
function incrementWrongAnswers(){
    
}

// function for displaying the addition question
function displayAdditionQuestion(operand1, operand2){
    // getting the operands from the html doc and assigning them the random numbers
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    // getting the operator and assigning it the relevant one for the gameType
    document.getElementById("operator").textContent = '+';
    
    return operand1 + operand2;
}

// function for displaying the subtract question
function displaySubtractQuestion(){
    
}

// function for displaying the multiply question
function displayMultiplyQuestion(){
    
}

// TO COMPLETE - function for displaying the divide question
// function displayDivideQuestion(){}