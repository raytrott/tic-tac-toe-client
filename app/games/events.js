'use strict'

const gamesUi = require('./ui.js')
const gamesApi = require('./api.js')
const store = require('../store.js')

const onNewGame =
function () {
    console.log('launching new game')
    gamesApi.newGame()
    .then((response) => gamesUi.onNewGameSuccess(response))
    .catch(() => gamesUi.onNewGameFailure())
}

const onChooseSquare =
function (event) {
    console.log('clicking square')

    const square = event.target
    const squareNum = square.dataset.cellIndex
    
    const playerMove = {
        "game": {
          "cell": {
            "index": squareNum,
            "value": store.currentPlayer
          },
          "over": false
        }
      }   

    console.log(playerMove)

    if (square.classList.contains('occupied')) {
        $('#game-display').html('<p>Square occupied.</p>')
    } else {
        square.classList.add('occupied')
        square.textContent = store.currentPlayer
        gamesApi.chooseSquare(playerMove)
        .then((response) => gamesUi.onChooseSquareSuccess(response))
        .catch(() => gamesUi.onChooseSquareFailure())
    }
}

module.exports = {
    onNewGame,
    onChooseSquare
}
