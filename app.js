import getRandomThrow from './get-random-throw.js';
import checkResults from './check-results.js';

// Get elements from DOM
const userThrowDisplay = document.getElementById('user-throw');
const computerThrowDisplay = document.getElementById('computer-throw');
const winsCountSpan = document.getElementById('wins-count');
const lossesCountSpan = document.getElementById('loss-count');
const drawsCountSpan = document.getElementById('draws-count');
const throwResult = document.getElementById('throw-result');
const submitButton = document.getElementById('submit-button');
const resultsBox = document.getElementById('results-box');

// Initialize state
let wins = 0;
let draws = 0;
let losses = 0;

// Add event listener to update states and modify DOM
submitButton.addEventListener('click', () => {
    // Get user input from DOM and assign its value to a variable
    const userInput = document.querySelector('input:checked');
    const userthrow = userInput.value;
    
    // Get computer input from getRandomThrow
    const computerthrow = getRandomThrow();

    // Get result from checkResults and pass in user and computer throws
    const result = checkResults(userthrow, computerthrow);
    
    // Display user throw
    let srcUserImage = `/assets/${userthrow}.jpg`;
    userThrowDisplay.src = srcUserImage;
    
    // Display computer throw
    let srcComputerImage = `/assets/${computerthrow}.jpg`;
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
    resultsBox.style.display = 'block';
    throwResult.style.display = 'block';
});