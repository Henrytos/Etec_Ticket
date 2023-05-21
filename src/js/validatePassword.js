/*validar senha */
export function validatePassword(senha) {
    // pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número
    var senhaRegex = /^(.{8,})$/
    return senhaRegex.test(senha);
}