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

module.exports = {
    onNewGame
}
