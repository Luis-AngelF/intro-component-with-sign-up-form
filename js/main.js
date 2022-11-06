function validateForm() {

    const validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    const firstNameInput = firstName.querySelector('input')
    const lastNameInput = lastName.querySelector('input')
    const emailInput = email.querySelector('input')
    const passwordInput = password.querySelector('input')

    if (firstNameInput.value == '') {
        firstName.querySelector('.form-field').classList.add('error')
        firstName.querySelector('img').classList.remove('hidden')
        firstName.querySelector('p').classList.remove('hidden')
    } else {
        firstName.querySelector('.form-field').classList.remove('error')
        firstName.querySelector('img').classList.add('hidden')
        firstName.querySelector('p').classList.add('hidden')
    }

    if(lastNameInput.value == '') {
        lastName.querySelector('.form-field').classList.add('error')
        lastName.querySelector('img').classList.remove('hidden')
        lastName.querySelector('p').classList.remove('hidden')
    } else {
        lastName.querySelector('.form-field').classList.remove('error')
        lastName.querySelector('img').classList.add('hidden')
        lastName.querySelector('p').classList.add('hidden')
    }

    if (!validateEmail.test(emailInput.value)) {
        email.querySelector('.form-field').classList.add('error')
        email.querySelector('img').classList.remove('hidden')
        email.querySelector('p').classList.remove('hidden')
    } else {
        email.querySelector('.form-field').classList.remove('error')
        email.querySelector('img').classList.add('hidden')
        email.querySelector('p').classList.add('hidden')
    }

    if (passwordInput.value.length == '' ) {
        password.querySelector('.form-field').classList.add('error')
        password.querySelector('img').classList.remove('hidden')
        password.querySelector('p').classList.remove('hidden')
    } else {
        password.querySelector('.form-field').classList.remove('error')
        password.querySelector('img').classList.add('hidden')
        password.querySelector('p').classList.add('hidden')
    }
}