// --- EVENT LISTENERS ---

// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getELementsByTagName("button"); // returns an array (html collection) of the buttons

    // iterating through the buttons array by storing/using each value in buttons one per iteration (dont need indexing)
    for (button in buttons){

        // ev-lis click function on each button
        button.addEventListener("click", function(){

            // finding out the data type from the attribute we created where 'this' refers to the button in this iteration 
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else {
                // otherwise setting the data-type as the gaem type
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }

        });
    }

})





// --- FUNCTIONS ---

// function for ...
function runGame(){
    
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
function displayAdditionQuestion(){
    
}

// function for displaying the subtract question
function displaySubtractQuestion(){
    
}

// function for displaying the multiply question
function displayMultiplyQuestion(){
    
}

// TO COMPLETE - function for displaying the divide question
// function displayDivideQuestion(){}