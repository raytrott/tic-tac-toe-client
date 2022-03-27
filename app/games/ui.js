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

module.exports = {
    onNewGameSuccess,
    onNewGameFailure
}
