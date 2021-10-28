const playerWins = document.getElementById('playerWins')
const compWins = document.getElementById('compWins')
const playerSelection = document.getElementById('playerSelection')
const compChoice = document.getElementById('compChoice')
const gameResult = document.getElementById('gameResult')
const playerChoice = document.getElementsByClassName('playerChoice')
const scoreSpace = document.getElementById('scoreSpace')
const startBtn = document.getElementById('startBtn')
const gameSpace = document.getElementById('gameSpace')

const randomNum = (max) => {
      return Math.floor(Math.random() * max)
}

const randomCompSel = () => {
      let choices = ['Rock', 'Paper', 'Scissors']

      let computerSelection = choices[randomNum(3)]

      return computerSelection
}

var playerScore = 0
var compScore = 0

const playGame = () => {



      let playerSel = event.srcElement.value
      let compSel = randomCompSel()

      playerSelection.innerHTML = `You chose: ${playerSel}`
      compChoice.innerHTML = `The computer chose : ${compSel}`

      if (playerSel === 'Rock' && compSel === 'Scissors') {
            playerScore++
            playerWins.innerHTML = `Player Wins: ${playerScore}`
            compWins.innerHTML = `Computer Wins: ${compScore}`
            gameResult.innerHTML = 'You Won!'
      }
      if (playerSel === 'Paper' && compSel === 'Rock') {
            playerScore++
            playerWins.innerHTML = `Player Wins: ${playerScore}`
            compWins.innerHTML = `Computer Wins: ${compScore}`
            gameResult.innerHTML = 'You Won!'
      }
      if (playerSel === 'Scissors' && compSel === 'Paper') {
            playerScore++
            playerWins.innerHTML = `Player Wins: ${playerScore}`
            compWins.innerHTML = `Computer Wins: ${compScore}`
            gameResult.innerHTML = 'You Won!'
      }
      if (compSel === 'Rock' && playerSel === 'Scissors') {
            compScore++
            playerWins.innerHTML = `Player Wins: ${playerScore}`
            compWins.innerHTML = `Computer Wins: ${compScore}`
            gameResult.innerHTML = 'The computer won, try again!'
      }
      if (compSel === 'Paper' && playerSel === 'Rock') {
            compScore++
            playerWins.innerHTML = `Player Wins: ${playerScore}`
            compWins.innerHTML = `Computer Wins: ${compScore}`
            gameResult.innerHTML = 'The computer won, try again!'

      }
      if (compSel === 'Scissors' && playerSel === 'Paper') {
            compScore++
            playerWins.innerHTML = `Player Wins: ${playerScore}`
            compWins.innerHTML = `Computer Wins: ${compScore}`
            gameResult.innerHTML = 'The computer won, try again!'

      } else {
            playerWins.innerHTML = `Player Wins: ${playerScore}`
            compWins.innerHTML = `Computer Wins: ${compScore}`
            gameResult.innerHTML = 'This round was a tie, try again!'

      }

      scoreSpace.style.visibility = 'visible'

}





const setupGame = () => {

      for (let i = 0; i < playerChoice.length; i++) {
            playerChoice[i].addEventListener('click', playGame, false)


      }

}



startBtn.addEventListener('click', function () {
      gameSpace.style.visibility = 'visible'
      setupGame()
}, false)











