'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
    $('#auth-display').html('<p>User sign up successful!</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function () {
    $('#auth-display').html('<p>Error when signing up</p>')
}

const onSignInSuccess = function (response) {
    $('#auth-display').html('<p>User sign in successful!</p>')
    $('form').trigger('reset')
    console.log(response)
    store.user = response.user
}

const onSignInFailure = function () {
    $('#auth-display').html('<p>Error when signing in</p>')
}

const onChangePasswordSuccess = function () {
    $('#auth-display').html('<p>Password changed successfully!</p>')
    $('form').trigger('reset')
    // console.log(response)
    // store.user = response.user
}

const onChangePasswordFailure = function () {
    $('#auth-display').html('<p>Error when changing password</p>')
}

const onSignOutSuccess = function (response) {
    $('#auth-display').html('<p>Sign out successful!</p>')
    $('form').trigger('reset')

    // store.user = null
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
