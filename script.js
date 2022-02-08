let nome = null
const main = document.querySelector('main')
const entrada = document.querySelector('.telaDeEntrada')

function nomeUsuario() {
    nome = document.querySelector('.telaDeEntrada input').value
}

function scroll() {
    let elementoQueQueroQueApareca = document.querySelector('.msg:last-child');
    elementoQueQueroQueApareca.scrollIntoView();
}

function entrarNaSala() {
    nomeUsuario()
    entrada.classList.add('escondido')
    main.innerHTML += `
    <div class="msg entrouSaiu">
        <span><small>(09:00:00)</small> <strong>${nome}</strong>  entra na sala...</span>
    </div>`
    scroll()
}

let mensagem

function enviarMsg() {
    mensagem = document.querySelector('footer input').value
    main.innerHTML += `
    <div class="msg" data-identifier="message">
        <span><small>(09:00:00)</small> <strong>${nome}</strong>  para <strong>Todos</strong>:  ${mensagem}</span>
    </div>`
    scroll()
}


/*function enviarMsgPrivado() {
    let mensagem = document.querySelector('input').value
    main.innerHTML += `
    <div class="msg privado">
        <span><small>(09:00:00)</small> <strong>${nome}</strong>  reservadamente para <strong>Maria</strong>: ${mensagem}</span>
    </div>`
    scroll()
}*/

/*function sairDaSala(){
    nomeUsuario()
    main.innerHTML += `
    <div class="msg entrouSaiu">
        <span><small>(09:00:00)</small> <strong>${nome}</strong>  sai na sala...</span>
    </div>`
    scroll()
}*/


let jaVerificado = false

document.addEventListener("keypress", function (e) {

    if (e.key === "Enter" && jaVerificado === true) {
        const enviar = document.querySelector('footer ion-icon')
        enviar.click()
    }
    if (e.key === "Enter" && jaVerificado === false) {
        const btn = document.querySelector('.telaDeEntrada button')
        btn.click()
        jaVerificado = true
    }
})