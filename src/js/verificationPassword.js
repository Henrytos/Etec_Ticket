document.getElementById('buttonCadastro').addEventListener("click", (ev) => {
    ev.preventDefault()
    const password = document.getElementById('passwordStudent').value
    const passwordConfirmation = document.getElementById('confimationpasswordStudent').value

    verificationPassword(password, passwordConfirmation)
})
function verificationPassword(password, passwordConfirmation) {
    if (password === passwordConfirmation) {
        alert("Login valido")
    } else {
        alert("Login invalido")
    }
}