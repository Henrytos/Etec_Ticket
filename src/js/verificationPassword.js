import { accout } from "./accout.js"

document.getElementById('buttonCadastro').addEventListener("click", (ev) => {
    ev.preventDefault()
    const nameStudent = document.getElementById('nameStudent').value
    const rmStudent = document.getElementById('rmStudent').value
    const password = document.getElementById('passwordStudent').value
    const passwordConfirmation = document.getElementById('confimationpasswordStudent').value
    verificationPerson(nameStudent, rmStudent, password, passwordConfirmation)
})
/*Verificando se nome e Rm estão atrelados */
function verificationPerson(name, rm, password, password2) {

    if (password === password2 && (accout.find(person => person.nameStudent.toLowerCase() == name.toLowerCase() && person.rm == rm) ?? false) && validatePassword(password)) {
        alert("Login valido")


    } else {
        alert('Nome ou RM não atrelados ou senha menor que 8 caracteres ou senhas diferentes')
    }
}
/*validar senha */
function validatePassword(senha) {
    // pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número
    var senhaRegex = /^(.{8,})$/
    return senhaRegex.test(senha);
}