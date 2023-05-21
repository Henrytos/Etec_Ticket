import { accout } from "./persons/accout.js"
import { validatePassword } from "./validatePassword.js"
/*Verificando se nome e Rm estão atrelados */
export function verificationPerson(name, rm, password, password2) {

    if (password === password2 && (accout.find(person => person.nameStudent.toLowerCase() == name.toLowerCase() && person.rm == rm) ?? false) && validatePassword(password)) {
        alert("Login valido")


    } else {
        alert('Nome ou RM não atrelados ou senha menor que 8 caracteres ou senhas diferentes')
    }
}