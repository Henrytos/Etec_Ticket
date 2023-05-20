import { accout } from "./accout.js"

document.getElementById('btn-login').addEventListener('click', (ev) => {
    ev.preventDefault()
    let rm = document.getElementById('RmStudent').value
    let password = document.getElementById('passwordStudent').value
    if (password !== '' && rm !== '') {
        console.log({ rm, password })
        render(password, rm)
    }
    else {
        alert('informe os dados certos')
    }

})
function render(password, rm) {
    const personStudnet = accout.find(ele => ele.rm == rm && ele.password == password)
    console.log(personStudnet)
}