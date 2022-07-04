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
  if ((typeof store.game !== 'undefined') && (playerMove.game.over === false)) {
    playerMove.game.over = true
    gamesApi.chooseSquare(playerMove)
    gameBoard = ['', '', '', '', '', '', '', '', '', '']
    playerMove.game.over = false
    $('.box').empty()
    $('.box').removeClass('occupied')
    $('.box').removeClass('game-over')
    $('.box').addClass('game-on')
    gamesApi.newGame()
    .then((response) => gamesUi.onNewGameSuccess(response))
    .catch(() => gamesUi.onNewGameFailure())
  } else if (playerMove.game.over === true) {
    gameBoard = ['', '', '', '', '', '', '', '', '', '']
    playerMove.game.over = false
    $('.box').empty()
    $('.box').removeClass('occupied')
    $('.box').removeClass('game-over')
    $('.box').addClass('game-on')
    $('.box').on('click', onChooseSquare)
    gamesApi.newGame()
    .then((response) => gamesUi.onNewGameSuccess(response))
    .catch(() => gamesUi.onNewGameFailure())
  } else {
    $('.box').addClass('game-on')
    $('.box').on('click', onChooseSquare)
    gamesApi.newGame()
    .then((response) => gamesUi.onNewGameSuccess(response))
    .catch(() => gamesUi.onNewGameFailure())
  }
}

const gameOver = function () {
  $('.box').off('click')
  $('.box').addClass('game-over')
  playerMove.game.over = true
  console.log(playerMove)
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
  }
}

const onChooseSquare = function (event) {
  const square = event.target
  console.log(square)
  const squareNum = square.dataset.cellIndex
  playerMove.game.cell.index = squareNum
  playerMove.game.cell.value = store.currentPlayer
  
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

const onShowHideInstructions = function () {
  if ($('#instructions').hasClass('hidden')) {
    $('#instructions').removeClass('hidden')
    $('#instructions').addClass('showing')
    $('#instructions').show()
    $('#view-instructions').text('hide')
  } else if ($('#instructions').hasClass('showing')) {
    $('#instructions').removeClass('showing')
    $('#instructions').addClass('hidden')
    $('#instructions').hide()
    $('#view-instructions').text('show')
  }
}

const onShowHideAccount = function () {
  if ($('#account-management').hasClass('hidden')) {
    $('#account-management').removeClass('hidden')
    $('#account-management').addClass('showing')
    $('#account-management').show()
    $('#view-account').text('hide')
  } else if ($('#account-management').hasClass('showing')) {
    $('#account-management').removeClass('showing')
    $('#account-management').addClass('hidden')
    $('#account-management').hide()
    $('#view-account').text('show')
  }
}

module.exports = {
    onNewGame,
    onChooseSquare,
    checkForWin,
    gameOver,
    onShowHideInstructions,
    onShowHideAccount
}
