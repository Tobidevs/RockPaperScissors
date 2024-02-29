let playerText = document.querySelector('#playerText');
let computerText = document.querySelector('#computerText');
let resultText = document.querySelector('#resultText');
let choiceBtns = document.querySelectorAll(".button");
let background = document.querySelector('#background')


let player = "";
let computer;
let result;

choiceBtns.forEach(button =>  button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgb(107, 127, 215)';
        button.style.border = '30px solid rgb(58, 84, 198)'
        button.style.color = 'rgb(45, 88, 230)'
        button.style.transform = 'scale(1.1)'
}));
choiceBtns.forEach(button => button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '';
        button.style.border = '';
        button.style.color = '';
        button.style.transform = '';
}))

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = determineWinner();

    changeBackground()
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
        return 'Its a Draw!';
    } else if (computer === 'Rock') {
        return (player === 'Paper') ? 'You Win!' : 'You Lose!';
    } else if (computer === 'Paper') {
        return (player === 'Scissors') ? 'You Win!' : 'You Lose!';
    } else if (computer === 'Scissors') {
        return (player === 'Rock') ? 'You Win!' : 'You Lose!';
    }
}

function changeBackground() {
    if (resultText.textContent === 'You Win!') {
        background.style.backgroundColor = 'green';
        
    }
    else if (resultText.textContent === 'You Lose!') {
        background.style.backgroundColor = 'red'
    /*changeToRed()*/
    }
}
/*
function changeToRed() { 
    choiceBtns.forEach(button => button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'red';
        button.style.border = '';
        button.style.color = '';
        button.style.transform = '';
}))}
*/
function changeToGreen() { 
    choiceBtns.forEach(button => button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'green';
        button.style.border = '';
        button.style.color = '';
        button.style.transform = '';
}))}