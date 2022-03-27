'use strict'

const store = require('../store.js')

const newGame = function () {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        body: {}
    })
}

module.exports = {
    newGame
}

// 