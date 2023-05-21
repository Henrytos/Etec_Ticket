document.getElementById('viewPassword').addEventListener('click', viewPassword)
document.getElementById('viewPassword2').addEventListener('click', viewPassword)


//visuliazação do input de senha ;type =  text || passwod
function viewPassword() {
    const inputs = document.querySelectorAll(".viewPassword")
    if (inputs[0].type == "password") {
        inputs[0].type = "text"
        inputs[1].type = "text"
    } else {
        inputs[0].type = "password"
        inputs[1].type = "password"
    }
}

