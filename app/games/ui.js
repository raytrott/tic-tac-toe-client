'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (response) {
    $('#game-display').html('<h4><i>Game initialized!</i></h4><p>X goes first!</p>')
    $('#game-board').show()
    store.game = response.game
    store.gameId = response.game._id
    store.currentPlayer = 'X'
}

const onNewGameFailure = function () {
    $('#game-display').html('<h4>Error launching game. Make sure you create an account and sign in.</h4>')
}

const onChooseSquareSuccess = function (response) {
    $('#game-display').html('<h4>' + store.currentPlayer + ' has chosen!</h4><p>Next turn!</p>')
    store.game = response.game
    if (store.game.__v >= 9) {
        $('#game-display').html('<h4>Game Over!</h4><p>No available squares left. </p>')
    } else if (store.game.__v % 2 === 0) {
        store.currentPlayer = 'X'
    } else {
        store.currentPlayer = 'O'
    }

    console.log(store.game)
}

const onChooseSquareFailure = function () {
    $('#game-display').html('<h4>Error: could not place square.</h4>')
}

module.exports = {
    onNewGameSuccess,
    onNewGameFailure,
    onChooseSquareSuccess,
    onChooseSquareFailure
}
