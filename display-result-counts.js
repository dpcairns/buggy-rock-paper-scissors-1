export function displayResultsCounts(wins, draws, losses) {
    // Get elements from DOM
    const winsCountSpan = document.getElementById('wins-count');
    const lossesCountSpan = document.getElementById('losses-count');
    const drawsCountSpan = document.getElementById('draws-count');
    
    // Send results
    winsCountSpan.textContent = `Wins: ${wins}`;
    drawsCountSpan.textContent = `Draws: ${draws}`;
    lossesCountSpan.textContent = `Losses: ${losses}`;
}