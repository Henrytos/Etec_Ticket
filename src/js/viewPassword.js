//visuliazação do input de senha ;type =  text || passwod
export function viewPassword() {
    const inputs = document.querySelectorAll(".viewPassword")
    if (inputs[0].type == "password") {
        inputs.forEach(ele => ele.type = 'text')
    } else {
        inputs.forEach(ele => ele.type = 'password')
    }
}