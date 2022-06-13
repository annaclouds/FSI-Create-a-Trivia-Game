// Your Code Here

// 1. Get and remember the user's name.
let userName = window.prompt('Please enter your name: ');
let playAgain = true;

function playGame() {                           // Bonus: Allowing the user to choose whether they want to play again or end game. 


let userScore = 0;                              // 4. Track the user's score. 

// 2. Prompt the user with each question.
for (let i = 0; i < questions.length; i++) {    // 10 questions.
    let question = questions[i];                // giving a variable so it's more readable.

// 3. Check the user's answer for each question.                     
    let userAnswer = window.prompt(question.text) // prompt the user a question to answer and saving the answer to a variable.
    if (userAnswer === question.correctAnswer) {
        console.log('Correct!');
        userScore = userScore + 10;
    }
};

window.alert('You score is: ' + userScore);       // display the score after all the questions have been asked.
};

while (playAgain === true) {
    playGame();                                 // calling the function to use it. 
    let userChoice = window.prompt('Would you like to play again? Please answer yes or no.');
    if (userChoice === 'yes') {
        playAgain = true;
    } else {
        playAgain = false;
        window.alert('Thanks for playing the game!');
    };
};
