'use strict'

const gamesUi = require('./ui.js')
const gamesApi = require('./api.js')
const store = require('../store.js')

let gameBoard = ['', '', '', '', '', '', '', '', '', '']


let playerMove = {
  "game": {
    "cell": {
      "index": null,
      "value": null
    },
  "over": false
  }
}   

const onNewGame = function () {
    console.log('launching new game')

    gameBoard = ['', '', '', '', '', '', '', '', '', '']
    playerMove.game.over = false

    $('.box').on('click', onChooseSquare)
    $('.box').empty()
    $('.box').removeClass('occupied')

    gamesApi.newGame()
    .then((response) => gamesUi.onNewGameSuccess(response))
    .catch(() => gamesUi.onNewGameFailure())
}

const gameOver = function () {
  $('.box').off('click')
  playerMove.game.over = true
}

const checkForWin = function () {
  if (
    (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
    (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
    (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
    (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
    (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
    (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
    (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
    (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')
  ) {
    $('#game-display').html('<h4>' + store.currentPlayer + ' wins!</h4><p>Game over.</p>')
    gameOver()
  } else if ((store.game.__v === 8) && (playerMove.game.over !== true)) {
    $('#game-display').html('<h4>Tie!</h4><p>Game over.</p>')
    gameOver()
  } else {
    console.log('keep playing')
  }
}

const onChooseSquare = function (event) {
  console.log('clicking square')
  const square = event.target
  const squareNum = square.dataset.cellIndex

  playerMove.game.cell.index = squareNum
  playerMove.game.cell.value = store.currentPlayer

  console.log(playerMove)

  if (square.classList.contains('occupied')) {
    $('#game-display').html('<h4>Square occupied.</h4><p>Go again!</p>')
  } else {
    gameBoard[squareNum] = store.currentPlayer
    square.textContent = store.currentPlayer
    square.classList.add('occupied')

    $('#game-display').html('<h4>' + store.currentPlayer + ' has chosen!</h4><p>Next turn!</p>')

    checkForWin()

    gamesApi.chooseSquare(playerMove)
    .then((response) => gamesUi.onChooseSquareSuccess(response))
    .catch(() => gamesUi.onChooseSquareFailure())
  }
}

module.exports = {
    onNewGame,
    onChooseSquare,
    checkForWin,
    gameOver
}
