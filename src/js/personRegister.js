import { verificationPerson } from "./verificationPerson.js"

export function verificationPassword(ev) {
    ev.preventDefault()
    const nameStudent = document.getElementById('nameStudent').value
    const rmStudent = document.getElementById('rmStudent').value
    const password = document.getElementById('passwordStudent').value
    const passwordConfirmation = document.getElementById('confimationPasswordStudent').value
    verificationPerson(nameStudent, rmStudent, password, passwordConfirmation)
}

