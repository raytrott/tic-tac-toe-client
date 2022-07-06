'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
    $('#auth-display').html('<p>User sign up successful! User not signed in, please make sure to do so before proceeding.</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function () {
    $('#auth-display').html('<p>Error when signing up</p>')
}

const onSignInSuccess = function (response) {
    $('#auth-display').html('<p class="display-text">User sign in successful!</p>')
    $('.display-text').fadeOut(5000)
    $('form').trigger('reset')
    $('#new-game').show()
    $('#change-password').show()
    $('#sign-out').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    store.user = response.user
}

const onSignInFailure = function () {
    $('#auth-display').html('<p>Error when signing in</p>')
}

const onChangePasswordSuccess = function () {
    $('#auth-display').html('<p class="display-text">Password changed successfully!</p>')
    $('.display-text').fadeOut(5000)
    $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
    $('#auth-display').html('<p>Error when changing password</p>')
}

const onSignOutSuccess = function () {
    $('#auth-display').html('<p class="display-text">Sign out successful!</p>')
    $('.display-text').fadeOut(5000)
    $('form').trigger('reset')
    $('#change-password').hide()
    $('#sign-out').hide()
    $('#new-game').hide()
    $('#game-board').hide()
    // hide upon sign out 
    $('#game-display').hide()
    $('#sign-up').show()
    $('#sign-in').show()
}

const onSignOutFailure = function () {
    $('#auth-display').html('<p>Error signing out</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePasswordSuccess,
    onChangePasswordFailure,
    onSignOutSuccess,
    onSignOutFailure
}
