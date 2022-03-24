const onSignUpSuccess = function () {
    $('#auth-display').html('<p>User sign up successful!</p>')
    // $('form').trigger('reset')
}

const onSignUpFailure = function () {
    $('#auth-display').html('<p>Error when signing up</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure
}