'use strict'

const authEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')

// Hide on startup
$(() => {
  $('#game-board').hide()
  $('#new-game').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#instructions').hide()

})

// Auth
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
})

// Game
$(() => {
  $('#new-game-button').on('click', gamesEvents.onNewGame)
})

// Show/Hide
$(() => {
  $('#view-instructions').on('click', gamesEvents.onShowHideInstructions)
  $('#view-account').on('click', gamesEvents.onShowHideAccount)
})
