'use strict'

const store = require('../store.js')
const config = require('../config.js')

const newGame = function () {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: {}
    })
}

const chooseSquare = function (playerMove) {
    return $.ajax({
        method: 'PATCH',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.gameId,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: playerMove
    })
}

module.exports = {
    newGame,
    chooseSquare
}
