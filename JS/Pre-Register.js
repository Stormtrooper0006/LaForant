document.getElementById("form-pre_register").addEventListener("submit",(event) =>{
    event.preventDefault()

    let email = document.getElementById("email").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let dob = document.getElementById("dob").value
    let nationality = document.getElementById("nationality").value
    let user_agreement = document.getElementById("user_agreement")


    let error_email = document.getElementById("error-email")
    if(validateEmail(email) == false){
        error_email.innerHTML = "email must containt '@' and end with '.com'"
        return
    }
    else
        error_email.innerHTML = ""


    let error_username = document.getElementById("error-username")
    if(username.length < 5 || username.length > 15){
        error_username.innerHTML = "username length must be 5 - 15 character"
        return
    }
    else
        error_username.innerHTML = ""


    let error_password = document.getElementById("error-password")
    if(validatePassword(password) == false){
        error_password.innerHTML = "password length must be 5 - 20 character and contain number, uppercase, and lowercase"
        return
    }
    else
        error_password.innerHTML = ""


    let error_dob = document.getElementById("error-dob")
    if(dob == false){
        error_dob.innerHTML = "select your date of birth"
        return
    }
    else
        error_dob.innerHTML = ""

    let error_nationality = document.getElementById("error-nationality")
    if(nationality == "-"){
        error_nationality.innerHTML = "select your nationality"
        return
    }
    else
        error_nationality.innerHTML = ""


    let error_user_agreement = document.getElementById("error-user_agreement")
    if(user_agreement.checked == false){
        error_user_agreement.innerHTML = "you need to agree first"
        return
    }
    else
        error_user_agreement.innerHTML = ""


    event.currentTarget.submit()
})


validateEmail = (email) =>{
    if(email.indexOf("@") != -1 && email.endsWith(".com") == true)
        return true
    else
        return false
}


isNumber = (character) =>{
    if(character >= 48 && character <= 57)
        return true
    else
        return false
}
isUpperCase = (character) => {
    if(character >= "A".charCodeAt(0) && character <= "Z".charCodeAt(0))
        return true
    else
        false
}
isLowerCase = (character) => {
    if(character >= "a".charCodeAt(0) && character <= "z".charCodeAt(0))
        return true
    else
        false
}
validatePassword = (password) =>{
    let length = password.length
    let number = 0
    let upper = 0
    let lower = 0

    for(let i = 0; i < length; i++){
        let charCode = password.charCodeAt(i)

        if(isNumber(charCode))
            number++
        if(isUpperCase(charCode))
            upper++
        if(isLowerCase(charCode))
            lower++
    }

    if(number != 0 && upper != 0 && lower != 0 && length >= 5 && length <= 20)
        return true
    else
        return false
}