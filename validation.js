const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')

form.addEventListener('submit', (e) =>{
    // e.preventDefault()prevent prevent Submit

    let errors = []

    tf(firstname_input){
        //if we have a firstname input then we are in the signup
        errors = getSignupFormErrors(firstname_input.ariaValueMax,email_input_input.value,password_input.value,repeat.value)
    }
    else{
        //if we don't have a firstname input then we are in the login
        errors =getloginFormErrors(email_input.value, password_input.value)
    }
})

function getSignupFormErrors(firstname, email, password, repeatpassword){
    let errors =[]

    tf(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
     tf(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
     tf(password === '' || password == null){
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}
const allInputs =[firstname_input, email_input, password_input, repeat_password_input]

allInputs.fprEach(input => {
    input.addEventListener('input,n() =>'{
        tf(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText =''
        }
    })
})
