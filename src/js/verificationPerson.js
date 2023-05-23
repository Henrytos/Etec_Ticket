import { accout } from "./persons/accout.js"
/*Verificando se nome e Rm estão atrelados */
export function verificationPerson(name, rm, password, password2) {

    if (password === password2 && (accout.find(person => person.nameStudent.toLowerCase() == name.toLowerCase() && person.rm == rm) ?? false) && validatePassword(password)) {
        alert("Login valido")
        window.location.href = './login.html'

    } else {
        alert('Nome ou RM não atrelados ou senha menor que 8 caracteres ou senhas diferentes')
        document.querySelectorAll('input').forEach(ele => ele.value = '')
    }
}
/*validar senha */
export function validatePassword(senha) {
    // pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número
    var senhaRegex = /^(.{8,})$/
    return senhaRegex.test(senha);
}