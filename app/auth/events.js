'use strict'

const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = 
function (event) {
    event.preventDefault()
    console.log('calling onSignUp')

    const form = event.target
    const data = getFormFields(form)
    console.log(data)

    authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn =
function (event) {
    event.preventDefault()
    console.log('calling onSignIn')

    const form = event.target
    const data = getFormFields(form)
    console.log(data)

    authApi.signIn(data)
        .then(() => authUi.onSignInSuccess())
        .catch(() => authUi.onSignInFailure())
}

const onSignOut =
function () {
    console.log('trying to sign out')
    authApi.signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut
}
