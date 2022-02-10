let nome = prompt('Escolha seu nome')
const main = document.querySelector('main')
const entrada = document.querySelector('.telaDeEntrada')

function nomeUsuario() {
    //nome = document.querySelector('.telaDeEntrada input').value
}



function scroll() {
    let elementoQueQueroQueApareca = document.querySelector('.msg:last-child');
    elementoQueQueroQueApareca.scrollIntoView();
}

/*function entrarNaSala() {
    nomeUsuario()
    //if (nome !== '') {

    verificarNome()

    if (deuRuim === null) {
        interval = setInterval(loadingNome, 200)
    }

    if (verificador === true) {
        if (parseInt(deuRuim) === 400) {
            alert('Usuário já existente')
        } else {
            alert('else')
            entrada.classList.add('escondido')
            jaVerificado = true
            //scroll()
        }
    }
}

let interval = null
let verificador = false

function loadingNome() {
    let statusCode = deuRuim
    if (statusCode !== null) {
        clearInterval(interval)
        alert('intervalo quebrado')
        verificador = true
    } else {
        alert('loading')
    }
}*/

//entrada.classList.add('escondido')
/*main.innerHTML += `
    <div class="msg entrouSaiu">
        <span><small>(09:00:00)</small> <strong>${nome}</strong>  entra na sala...</span>
    </div>`*/
/*jaVerificado = true
scroll()*/
/*}else{
    alert('Insira um nome')
}*/



let contato = null

/*function enviarMsg() {
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

}*/

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

/*document.addEventListener("keypress", function (e) {

    if (e.key === "Enter" && jaVerificado === true) {
        const enviar = document.querySelector('footer ion-icon')
        enviar.click()
    }
    if (e.key === "Enter" && jaVerificado === false) {
        const btn = document.querySelector('.telaDeEntrada button')
        btn.click()
        jaVerificado = true
    }
})*/

/*function carregando(){
    let telaDeEntrada = document.querySelector('.telaDeEntrada')
    let inputNome = telaDeEntrada.querySelector('input')
    let botaoEntrar = telaDeEntrada.querySelector('button')
    let imgLoading = telaDeEntrada.querySelector('.loading')
    let entrando = telaDeEntrada.querySelector('span')

    inputNome.classList.add('escondido')
    botaoEntrar.classList.add('escondido')
    imgLoading.classList.remove('escondido')
    entrando.classList.remove('escondido')
}

function sairDaSala(){
    main.innerHTML += `
    <div class="msg entrouSaiu">
        <span><small>(09:00:00)</small> <strong>${nome}</strong> sai na sala...</span>
    </div>`
    scroll()
}*/

let promise = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')

promise.then(processResponse)


function atualizarMensagens() {
    promise = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
    promise.then(processResponse)
}


function processResponse(response) {
    main.innerHTML = ''
    let info = response.data
    console.log(info)

    for (let i = 0; i < info.length; i++) {
        let mensagem = info[i]

        if (mensagem.type === 'status') {
            main.innerHTML += `
        <div class="msg entrouSaiu">
            <span><small>${mensagem.time}</small> <strong>${mensagem.from}</strong> ${mensagem.text}</span>
        </div>`
        } else if (mensagem.type === 'message') {
            main.innerHTML += `
        <div class="msg" data-identifier="message">
            <span><small>${mensagem.time}</small> <strong>${mensagem.from}</strong> para <strong>${mensagem.to}</strong>: ${mensagem.text}</span>
        </div>`
        } else if (mensagem.type === 'private_message') {
            if (mensagem.to === nome) {
                main.innerHTML += `
            <div class="msg privado">
                <span><small>${mensagem.time}</small> <strong>${mensagem.from}</strong> reservadamente para <strong>${mensagem.to}</strong>: ${mensagem.text}</span>
            </div>`
            }
        }

    }
    scroll()
}

setInterval(atualizarMensagens, 3000)

let nomeDeUsuario

function verificarNome() {
    nomeDeUsuario = {
        name: nome
    }

    let promiseEntrar = axios.post('https://mock-api.driven.com.br/api/v4/uol/participants', nomeDeUsuario)

    promiseEntrar.then(processSuccess)
    promiseEntrar.catch(processFailed)

}

function processSuccess(response) {
    console.log(response.data)
}

function processFailed(erro) {
    console.log(erro.response)
    let statusCode = erro.response.status
    if (statusCode === 400) {
        alert('Usuário já existe, escolha outro nome')
        nome = prompt('Escolha seu nome')
        verificarNome()
    }
}

verificarNome()


function manterConexao() {
    let promiseConexao = axios.post('https://mock-api.driven.com.br/api/v4/uol/status', nomeDeUsuario)

    promiseConexao.then(conexaoSuccess)
    promiseConexao.catch(conexaoFailed)
}

function conexaoSuccess(response) {
    console.log(response.data)
}

function conexaoFailed(erro) {
    console.log(erro.response)
    //let statusCode = erro.response.status
}

setInterval(manterConexao, 5000)

function enviarMensagem() {

    const mensagem = document.querySelector('footer input').value

    let usuario = {
        from: nome,
        to: "Todos",
        text: mensagem,
        type: "message" // ou "private_message" para o bônus
    }

    let promiseMensagem = axios.post('https://mock-api.driven.com.br/api/v4/uol/messages', usuario)

    promiseMensagem.then(msgSuccess)
    promiseMensagem.catch(msgFailed)
}

function msgSuccess(response) {
    console.log(response.data)
}

function msgFailed(erro) {
    console.log(erro.response)
    //let statusCode = erro.response.status
}


/*pessoas = info[0]
main.innerHTML += `
<div class="msg" data-identifier="message">
<span><small>${teste.time}</small> <strong>${teste.from}</strong>  para <strong>${teste.to}</strong>:  ${teste.text}</span>
</div>`*/
