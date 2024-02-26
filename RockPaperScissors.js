let playerText = document.querySelector('#playerText')
let computerText = document.querySelector('#computerText')
let resultText = document.querySelector('#resultText')
let choiceBtn = document.querySelectorALL(".button")

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addeventlistener(click, () => {
    player = button.textContent;
    computerTurn()

}))

function computerTurn() {
    const randNum = Math.floor(Math.random()* 3)+ 1
    switch(randNum){
        case 1:
            computer = 'Rock'
            break
        case 2:
            computer = 'Paper'
            break
        case 3:
            computer = 'Scissors'
            break
    }
}
