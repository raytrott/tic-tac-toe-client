'use strict'

const store = require('../store.js')
const config = require('../config.js')

const newGame = function () {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/games',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: {}
    })
}

const chooseSquare = function (playerMove) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/games/' + store.gameId,
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
