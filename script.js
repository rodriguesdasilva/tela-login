const inputEmail = document.querySelector('.inputEmail')
const inputSenha = document.querySelector('.inputSenha')
const imageOlho = document.querySelector('.olho')

let email = "eusoufodane2026@gmail.com"
let senha = "maiseclaro2026@"

function logarUsuario() {
    let valorDoEmail = inputEmail.value
    let valorDaSenha = inputSenha.value

    if (valorDoEmail === email && valorDaSenha === senha) {
        window.location.href = "home.html"
    }
}

function criarNovoUsuario() {
    const emailNovo = document.querySelector('#emailNovo')
    const senhaNova = document.querySelector('#senhaNova')
    valorDoEmailNovo = emailNovo.value
    valorDaSenhaNova = senhaNova.value

    if (valorDoEmailNovo === email && valorDaSenhaNova === senha) {
        window.location.href = "index.html"
    }

}

function eventoSenha() {
    if (inputSenha.type === "password") {
        inputSenha.type = 'text'
        imageOlho.src = './img/olho.png'
    } else {
        inputSenha.type = 'password'
        imageOlho.src = './img/olhofechado.png'
    }
}

