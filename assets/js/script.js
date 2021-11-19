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
                // calls the checkAnswer() to see if the user was correct or not
                checkAnswer();
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

/**
 * Gets the user's answer from the DOM and compares to 
 * the first array item from the calculateCorrectAnswer()
 */
function checkAnswer(){
    // reading the user's answer from the DOM with .value and converting to integer
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    // calculateCorrectAnswer() return array
    let calculatedAnswer = calculateCorrectAnswer();
    // comparing the two (true/false)
    let isCorrect = userAnswer === calculatedAnswer[0];

    // updating the score if they're correct or updating the wrong answer function
    if (isCorrect){
        // calling the incrementScore() to update the user's score
        incrementScore();
        alert(`You got it right!`);
    } else {
        // calling the incrementWrongAnswers() to update the user's score
        incrementWrongAnswers();
        alert(`Sorry ${userAnswer} is not right. The correct answer is: ${calculatedAnswer[0]}.`);
    }

    // running the next game
    runGame(calculatedAnswer[1]);
    
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc...)
 * directly from the DOM
 * Returns the correct answer
 */
function calculateCorrectAnswer(){
    // getting the operands innerText and converting them into integers 
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    // getting the operator's innerText 
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Function terminated`
    }
    
}

/**
 * Called by checkAnswer() if the user is correct
 * Reads current value from the DOM
 * Adds one and updates the DOM
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    // using the compound addition symbol prevents writing to the DOM before updating oldScore
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Called by checkAnswer() if the user is incorrect
 * Reads current value from the DOM
 * Adds one and updates the DOM
 */
function incrementWrongAnswers(){
    let wrongAnswerCount = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++wrongAnswerCount;
}

/**
 * Addition game function
 * @param {*first random number between 1 and 25} operand1 
 * @param {*second random number between 1 and 25} operand2 
 * Displays the operands and operator to the user 
 */
function displayAdditionQuestion(operand1, operand2){
    // getting the operands from the html doc and assigning them the random numbers
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    // getting the operator and assigning it the relevant one for the gameType
    document.getElementById("operator").textContent = '+';
}

// function for displaying the subtract question
function displaySubtractQuestion(){
    
}

// function for displaying the multiply question
function displayMultiplyQuestion(){
    
}

// TO COMPLETE - function for displaying the divide question
// function displayDivideQuestion(){}