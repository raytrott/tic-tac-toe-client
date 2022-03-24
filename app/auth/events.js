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

module.exports = {
    onSignUp
}
