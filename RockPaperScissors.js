let playerText = document.querySelector('#playerText');
let computerText = document.querySelector('#computerText');
let resultText = document.querySelector('#resultText');
let choiceBtns = document.querySelectorAll(".button");
let background = document.querySelector('#background');
let title = document.querySelector('#title');

let player = "";
let computer;
let result;

choiceBtns.forEach(button =>  button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgb(107, 127, 215)';
        button.style.border = '30px solid rgb(58, 84, 198)'
        button.style.color = 'rgb(45, 88, 230)'
        button.style.transform = 'scale(1.1)'
}));
choiceBtns.forEach(button => button.addEventListener('mouseleave', function revertAni() {
        button.style.backgroundColor = '';
        button.style.border = '';
        button.style.color = '';
        button.style.transform = '';
}))

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    computerText.textContent = `Comupter Choose ${computer}`;
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
        title.style.color = 'rgb(20, 20, 23)'
        computerText.style.color = ''
        resultText.style.color = ''
    } 
    else if (resultText.textContent === 'You Lose!') {
        background.style.backgroundColor = 'red';
        title.style.color = 'rgb(20, 20, 23)'
        computerText.style.color = ''
        resultText.style.color = ''
        
    } 
    else if (resultText.textContent === 'Its a Draw!') {
        background.style.backgroundColor = 'rgb(29, 28, 33)'
        title.style.color = 'rgb(107, 127, 215)'
        computerText.style.color = 'rgb(107, 127, 215)'
        resultText.style.color = 'rgb(107, 127, 215)'
    }
}
/*
function changeToRed() { 
    choiceBtns.forEach( button => {
        button.style.backgroundColor = 'red';
        button.style.border = '';
        button.style.color = '';
        button.style.transform = '';
        choiceBtns.forEach(button => button.removeEventListener('mouseleave', revertAni()))
})}

function changeToGreen() { 
    choiceBtns.forEach(button => button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'green';
        button.style.border = '';
        button.style.color = '';
        button.style.transform = '';
}))}
*/
