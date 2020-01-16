import getRandomThrow from './get-random-throw.js';
import checkResults from './check-results.js';

// Get from DOM
const userThrowDisplay = document.getElementById('user-choice');
const computerThrowDisplay = document.getElementById('computer-choice');
const winsCountSpan = document.getElementById('wins-count');
const lossesCountSpan = document.getElementById('loss-count');
const drawsCountSpan = document.getElementById('draws-count');
const throwResult = document.getElementById('throw-result');
const submitButton = document.getElementById('submit-button');
const resultsVisibility = document.getElementById('results-visibility');

// Initialize State
let wins = 0;
let draws = 0;
let losses = 0;

// Add event listener
submitButton.addEventListener('click', () => {
    // Get user input from DOM and assign its value to a variable
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    
    // Get computer input from getRandomThrow
    const computerChoice = getRandomThrow();

    // Get result from checkResults and pass in user and computer choices
    const result = checkResults(userChoice, computerChoice);

    // // Display user throw
    // if (userChoice === 'rock') {
    //     userThrowDisplay.src = '/assets/rock.jpg';
    // } else if (userChoice === 'paper') {
    //     userThrowDisplay.src = '/assets/paper.jpg';
    // } else if (userChoice.value === 'scissors') {
    //     userThrowDisplay.src = '/assets/scissors.jpg';
    // }
    
    // // Display computer throw
    // if (computerChoice === 'rock') {
    //     computerThrowDisplay.src = '/assets/rock.jpg';
    // } else if (computerChoice === 'paper') {
    //     computerThrowDisplay.src = '/assets/paper.jpg';
    // } else if (computerChoice.value === 'scissors') {
    //     computerThrowDisplay.src = '/assets/scissors.jpg';
    // }
    
    // Display user throw
    // userThrowDisplay.classList.remove('invisible');
    let srcUserImage = `/assets/${userChoice}.jpg`;
    userThrowDisplay.src = srcUserImage;
    
    // Display computer throw
    // computerThrowDisplay.classList.remove('invisible');
    let srcComputerImage = `/assets/${computerChoice}.jpg`;
    computerThrowDisplay.src = srcComputerImage;    
    
    // Increment states and return result
    if (result === 'draw') {
        draws++;
        throwResult.textContent = `It's a draw!`;
    } else if (result === 'win') {
        wins++;
        throwResult.textContent = 'You won!';
    } else if (result === 'lose') {
        losses++;
        throwResult.textContent = 'You lost.';
    }
    
    // Send results
    winsCountSpan.textContent = wins;
    drawsCountSpan.textContent = draws;
    lossesCountSpan.textContent = losses;
    
    // Make results section visible
    resultsVisibility.classList.remove('hidden');
});