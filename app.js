import getRandomThrow from './get-random-throw.js';
import checkResults from './check-results.js';

const userChoice = document.getElementById('user-choice');
const computerChoice = document.getElementById('computer-choice');
const totalWinsSpan = document.getElementById('user-wins');
const totalLossesSpan = document.getElementById('computer-wins');
const totalDrawsSpan = document.getElementById('draws');
const submitButton = document.getElementById('submit-button');