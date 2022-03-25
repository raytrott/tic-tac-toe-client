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
    // store data of my response in my store object
    // store.user = response.user
}

const onSignInFailure = function () {
    $('#auth-display').html('<p>Error when signing in</p>')
}

const onSignOutSuccess = function (response) {
    $('#auth-display').html('<p>Sign out successful!</p>')
    $('form').trigger('reset')

    // store data of my response in my store object
    store.user = null
}

const onSignOutFailure = function () {
    $('#auth-display').html('<p>Error signing out</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onSignOutSuccess,
    onSignOutFailure
}
