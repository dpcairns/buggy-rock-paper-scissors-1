import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './check-results.js';
import { throwImageDisplay } from './throw-img-display.js';
import { makeVisible } from './make-results-visible.js';
import { displayResultsCounts } from './display-result-counts.js';
import { makeInvisible } from './make-results-invisible.js';

// Get elements from DOM
const resultsBox = document.getElementById('results-box');
const winLossDraw = document.getElementById('win-loss-draw');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

// Initialize state
let wins = 0;
let draws = 0;
let losses = 0;

// Add event listener to update states and modify DOM
submitButton.addEventListener('click', () => {
    // Get user input from DOM and assign its value to a variable
    const userInput = document.querySelector('input:checked');
    const userThrow = userInput.value;
    
    // Get computer input from getRandomThrow
    const computerThrow = getRandomThrow();

    // Get result from checkResults and pass in user and computer throws
    const result = checkResults(userThrow, computerThrow);
    
    // Increment states and return result
    if (result === 'draw') {
        draws++;
        winLossDraw.textContent = `It's a draw!`;
    } else if (result === 'win') {
        wins++;
        winLossDraw.textContent = 'You won!';
    } else if (result === 'lose') {
        losses++;
        winLossDraw.textContent = 'You lost.';
    }
    
    throwImageDisplay(userThrow, computerThrow);
    makeVisible(resultsBox, winLossDraw);
    displayResultsCounts(wins, draws, losses);
});

// Add event listener to reset button
resetButton.addEventListener('click', () => {
    wins = 0;
    draws = 0;
    losses = 0;

    displayResultsCounts(wins, draws, losses);
    makeInvisible(resultsBox, winLossDraw);
});