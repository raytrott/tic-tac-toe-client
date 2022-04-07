'use strict'

const gamesUi = require('./ui.js')
const gamesApi = require('./api.js')
const store = require('../store.js')

let gameBoard = ['', '', '', '', '', '', '', '', '', '']

const onNewGame = function () {
    console.log('launching new game')
    gamesApi.newGame()
    .then((response) => gamesUi.onNewGameSuccess(response))
    .catch(() => gamesUi.onNewGameFailure())
    gameBoard = ['', '', '', '', '', '', '', '', '', '']
    $('.box').empty()
    $('.box').on('click')
    $('.box').removeClass('occupied')
}

const gameOver = function () {
  $('.box').off('click')
  store.game.over = true
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
    (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')
  ) {
    gameOver()
    $('#game-display').html('<h4>' + store.currentPlayer + ' wins!</h4><p>Game over.</p>')
    console.log(store.game)
  }
  if (
    (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
    (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
    (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
    (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
    (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')
  ) {
    gameOver()
    $('#game-display').html('<h4>' + store.currentPlayer + ' wins!</h4><p>Game over.</p>')
    console.log(store.game)
  }
}

const checkForDraw = function () {
  if (gameBoard.every(val => val == 'X' || val == 'O')) {
    gameOver()
    $('#game-display').html('<h4>Tie!</h4><p>Game over.</p>')
    console.log(store.game)
  }
}

const onChooseSquare = function (event) {
  console.log('clicking square')
  const square = event.target
  const squareNum = square.dataset.cellIndex
  const gameIsOver = function () {
    if (store.game.__v >= 9) {
      return true
    } else {
      return false
    }
  }
  const playerMove = {
    "game": {
      "cell": {
        "index": squareNum,
        "value": store.currentPlayer
      },
    "over": gameIsOver
    }
  }   

  console.log(playerMove)
  if (square.classList.contains('occupied')) {
    $('#game-display').html('<h4>Square occupied.</h4><p>Go again!</p>')
  } else {
    $('#game-display').html('<h4>' + store.currentPlayer + ' has chosen!</h4><p>Next turn!</p>')
    gameBoard[squareNum] = store.currentPlayer  
    square.textContent = store.currentPlayer
    square.classList.add('occupied')
    gamesApi.chooseSquare(playerMove)
    .then((response) => gamesUi.onChooseSquareSuccess(response))
    .catch(() => gamesUi.onChooseSquareFailure())
    checkForWin()
    checkForDraw()
  }
}

module.exports = {
    onNewGame,
    onChooseSquare,
    checkForWin,
    checkForDraw,
    gameOver
}
