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
    $('#auth-display').html('<p>User sign in successful!</p>')
    $('form').trigger('reset')
    $('#new-game').show()
    $('#change-password').show()
    $('#sign-out').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    console.log(response)
    store.user = response.user
}

const onSignInFailure = function () {
    $('#auth-display').html('<p>Error when signing in</p>')
}

const onChangePasswordSuccess = function () {
    $('#auth-display').html('<p>Password changed successfully!</p>')
    $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
    $('#auth-display').html('<p>Error when changing password</p>')
}

const onSignOutSuccess = function () {
    $('#auth-display').html('<p>Sign out successful!</p>')
    $('form').trigger('reset')
    $('#change-password').hide()
    $('#sign-out').hide()
    $('#new-game').hide()
    $('#sign-up').show()
    $('#sign-in').show()
    $('#game-board').hide()
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
