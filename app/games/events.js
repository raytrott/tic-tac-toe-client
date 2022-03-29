'use strict'

const gamesUi = require('./ui.js')
const gamesApi = require('./api.js')

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
    console.log(square)
    const squareNum = square.dataset.cellIndex
    console.log(squareNum)
    // square.['data-cell-index']

    const playerMove = {
        "game": {
          "cell": {
            "index": squareNum,
            "value": 'x'
          },
          "over": false
        }
      }   
    
    console.log(playerMove)

    if (square.classList.contains('occupied')) {
        $('#game-display').html('<p>Square occupied.</p>')
    } else {
        square.classList.add('occupied')
        square.textContent = "X"
        gamesApi.chooseSquare(playerMove)
        .then(() => gamesUi.onChooseSquareSuccess())
        .catch(() => gamesUi.onChooseSquareFailure())
    }

}

module.exports = {
    onNewGame,
    onChooseSquare
}
