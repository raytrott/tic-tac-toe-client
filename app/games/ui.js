'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (response) {
    $('#game-display').html('<p><i>Game initialized!</i></p>')
    $('#game-board').show()
    store.game = response.game
}

const onNewGameFailure = function () {
    $('#game-display').html('<p>Error launching game. Make sure you create an account and sign in.</p>')
}

const onChooseSquareSuccess = function (square) {
    $('#game-display').html('<p>Player 1 has chosen! Player 2s turn!</p>')
    // store.game = response.game
    square.classList.add('occupied')
    square.text('X')

}

const onChooseSquareFailure = function () {
    $('#game-display').html('<p>Error: could not place square.</p>')
}

module.exports = {
    onNewGameSuccess,
    onNewGameFailure,
    onChooseSquareSuccess,
    onChooseSquareFailure
}
