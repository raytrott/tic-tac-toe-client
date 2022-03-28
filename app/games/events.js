'use strict'

const gamesUi = require('./ui.js')
const gamesApi = require('./api.js')
// const getFormFields = require('../../lib/get-form-fields.js')

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

    if (square.classList.contains('occupied')) {
        $('#game-display').html('<p>Square occupied.</p>')
    } else {
        const playerMove = {
            'game': {
              'cell': {
                'index': square['data-cell-index'],
                'value': 'x'
              },
              'over': false
            }
          }    
        gamesApi.chooseSquare(playerMove)
        .then((square) => gamesUi.onChooseSquareSuccess(square))
        .catch(() => gamesUi.onChooseSquareFailure())
    }
}

//     if (indexOf()
//     // first check space is empty
//     // if empty then add token to board and game cells array
//     // else nothing

module.exports = {
    onNewGame,
    onChooseSquare
}
