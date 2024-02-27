let playerText = document.querySelector('#playerText');
let computerText = document.querySelector('#computerText');
let resultText = document.querySelector('#resultText');
let choiceBtns = document.querySelectorAll(".button"); // Corrected typo

let player = "";
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => { // Corrected typo
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`; // Added colon
    resultText.textContent = determineWinner();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;
    }
}

function determineWinner() {
    if (player === computer) {
        return 'Its a Draw!'; // Corrected apostrophe
    } else if (computer === 'Rock') {
        return (player === 'Paper') ? 'You Win!' : 'You Lose!';
    } else if (computer === 'Paper') {
        return (player === 'Scissors') ? 'You Win!' : 'You Lose!';
    } else if (computer === 'Scissors') {
        return (player === 'Rock') ? 'You Win!' : 'You Lose!';
    }
}
