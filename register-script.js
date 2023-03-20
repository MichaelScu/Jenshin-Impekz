const inputFormRegister = document.querySelector(".input-form-register") ? document.querySelector(".input-form-register") : null
const emailInput = document.querySelector(".email-input") ? document.querySelector(".email-input") : 0
const passwordInput = document.querySelector(".password-input") ? document.querySelector(".password-input")  : 0
const emailErrorMessage = document.querySelector(".email-error-message")  ? document.querySelector(".email-error-message")  : 0
const passwordErrorMessage = document.querySelector(".password-error-message")  ? document.querySelector(".password-error-message")  : 0
const nameInput = document.querySelector(".name-input") ? document.querySelector(".name-input") : 0
const ageInput = document.querySelector(".age-input") ? document.querySelector(".age-input") : 0
const nameErrorMessage = document.querySelector(".name-error-message") ? document.querySelector(".name-error-message") : 0
const ageErrorMessage = document.querySelector(".age-error-message") ? document.querySelector(".age-error-message") : 0

function registerFormSubmit(event){
    event.preventDefault()
    
    let isEmailValid = true
    let isPasswordValid = true
    let isNameValid = true
    let isAgeValid = true

    // console.log(emailInput.value)
    if (!emailInput.value.includes("@gmail.com")) {
        // console.log("email error")
        emailInput.classList.add("error-active")
        emailErrorMessage.innerHTML = "*Email Invalid!"
        emailInput.value = ""

        isEmailValid = false
    }
    
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add("error-active")
        passwordErrorMessage.innerHTML = "*Password Invalid!"
        passwordInput.value = ""

        isPasswordValid = false
    }
    
    if(nameInput.value == ""){
        nameInput.classList.add("error-active")
        nameErrorMessage.innerHTML = "*Name Invalid!"
        nameInput.value = ""
        isNameValid = false
    }
    console.log((ageInput.value == "" || parseInt(ageInput.value) <= 0))
    console.log(parseInt(ageInput.value) == NaN)
    if((ageInput.value == "" || parseInt(ageInput.value) <= 0) || parseInt(ageInput.value) <= 0){
        ageInput.classList.add("error-active")
        ageErrorMessage.innerHTML = "*Age Invalid!"
        ageInput.value = ""
        
        isAgeValid = false
    }

    if (isEmailValid) {
        emailInput.classList.remove("error-active")
        emailErrorMessage.innerHTML = ""
    }
    
    if (isPasswordValid) {
        passwordInput.classList.remove("error-active")
        passwordErrorMessage.innerHTML = ""
    }
    
    if(isNameValid){
        nameInput.classList.remove("error-active")
        nameErrorMessage.innerHTML = ""
    }
    
    if(isAgeValid){
        ageInput.classList.remove("error-active")
        ageErrorMessage.innerHTML = ""
    }
    
    if (isEmailValid && isPasswordValid&&isAgeValid && isNameValid) {
        window.location = "login.html"
    }
}
if (inputFormRegister){
    inputFormRegister.addEventListener("submit", registerFormSubmit, false)
}


console.log(emailInput)