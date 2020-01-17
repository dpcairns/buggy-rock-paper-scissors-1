export function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    return assignThrow(randomNumber);
}

export function assignThrow(ranNum) {
    if (ranNum === 0) {
        return 'rock';
    } else if (ranNum === 1) {
        return 'paper';
    } else if (ranNum === 2) {
        return 'scissors';
    }
}