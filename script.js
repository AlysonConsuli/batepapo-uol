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
    //if (nome !== '') {
    entrada.classList.add('escondido')
    main.innerHTML += `
        <div class="msg entrouSaiu">
            <span><small>(09:00:00)</small> <strong>${nome}</strong>  entra na sala...</span>
        </div>`
    jaVerificado = true
    scroll()
    /*}else{
        alert('Insira um nome')
    }*/
}

let contato = null

function enviarMsg() {
    const mensagem = document.querySelector('footer input').value
    const input = document.querySelector('footer input')

    let selecionado = document.querySelector('.selecionado')
    contato = selecionado.parentNode.querySelector('p')

    let visibilidade = document.querySelector('.visibilidade')
    let selecionadoVisibilidade = visibilidade.querySelector('.selecionado')
    let seguranca = selecionadoVisibilidade.parentNode.querySelector('p')

    if (seguranca.innerHTML === 'Público') {
        main.innerHTML += `
        <div class="msg" data-identifier="message">
            <span><small>(09:00:00)</small> <strong>${nome}</strong>  para <strong>${contato.innerHTML}</strong>:  ${mensagem}</span>
        </div>`
    } else if (seguranca.innerHTML === 'Reservadamente') {
        main.innerHTML += `
        <div class="msg privado">
            <span><small>(09:00:00)</small> <strong>${nome}</strong>  reservadamente para <strong>${contato.innerHTML}</strong>: ${mensagem}</span>
        </div>`
    }
    input.value = ''
    scroll()

}

const telaLateral = document.querySelector('.telaLateral')
const fundoEscuro = document.querySelector('.escurecer')

function abrirTelaLateral() {
    telaLateral.classList.remove('escondido')
    fundoEscuro.classList.remove('escondido')
    //telaLateral.classList.add('deslizar')
}

function esconderTelaLateral() {
    telaLateral.classList.add('escondido')
    fundoEscuro.classList.add('escondido')
    //telaLateral.classList.remove('deslizar')
}


function selecionar(selecionado, classe) {
    const check = selecionado.querySelector('.check')
    const classeSelecionado = document.querySelector(`.${classe}`)
    
    const jaSelecionado = classeSelecionado.querySelector('.selecionado')
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove('selecionado')
    }
    check.classList.add('selecionado')
}


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

