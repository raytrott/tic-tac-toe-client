'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (response) {
    $('#game-display').html('<p><i>Game initialized!</i></p>')
    $('#game-board').show()
    store.game = response.game
    store.gameId = response.game._id
    console.log(store.game)
    console.log(store.gameId)
}

const onNewGameFailure = function () {
    $('#game-display').html('<p>Error launching game. Make sure you create an account and sign in.</p>')
}

const onChooseSquareSuccess = function (square) {
    $('#game-display').html('<p>Player 1 has chosen! Player 2\'s turn!</p>')
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
