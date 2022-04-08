'use strict'

const store = require('../store.js')
const checkForWin = require('./events.js')

const onNewGameSuccess = function (response) {
    $('#game-display').html('<h4><i>Game initialized!</i></h4><p>X goes first!</p>')
    $('#game-board').show()
    $('.box').on('click')
    store.game = response.game
    store.gameId = response.game._id
    store.game.cells = response.game.cells
    store.currentPlayer = 'X'
    console.log(store.game)
}

const onNewGameFailure = function () {
    $('#game-display').html('<h4>Error launching game. Make sure you create an account and sign in.</h4>')
}

const onChooseSquareSuccess = function (response) {
    store.game = response.game
    store.game.__v = response.game.__v

    if (store.game.__v % 2 === 0) {
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
