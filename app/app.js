'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
})

$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
})

$(() => {
  $('#change-password-form').on('submit', authEvents.onChangePassword)
})

$(() => {
  $('#sign-out-button').on('click', authEvents.onSignOut)
})

$(() => {
  $('#game-board').hide()
})

$(() => {
  $('#new-game-button').hide()
})

$(() => {
    $('#new-game-button').on('click', gamesEvents.onNewGame)
  })

// on div square .on click userChange
// userChange if user.__v = 0, then return user.__v = 1 OR if user.__v = 1, then return user.__v = 0

// if __v = 0, on click game.cell.value = "x"
// if __v = 1, on click game.cell.value = "o"