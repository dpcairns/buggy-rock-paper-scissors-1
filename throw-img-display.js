export function throwImageDisplay(player, computer) {
    // Get elements from DOM
    const userThrowDisplay = document.getElementById('user-throw');
    const computerThrowDisplay = document.getElementById('computer-throw');
    
     // Display user throw
    let srcUserImage = `/assets/${player}.jpg`;
    userThrowDisplay.src = srcUserImage;
     
     // Display computer throw
    let srcComputerImage = `/assets/${computer}.jpg`;
    computerThrowDisplay.src = srcComputerImage; 


}