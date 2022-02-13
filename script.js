let nome = null //prompt('Escolha seu nome')
const main = document.querySelector('main')
const entrada = document.querySelector('.telaDeEntrada')
const input = document.querySelector('footer input')

//let verificado = false

function nomeUsuario() {
    //nome = document.querySelector('.telaDeEntrada input').value
}

function entrarNaSala() {

    nome = document.querySelector('.telaDeEntrada input').value

    if (nome !== '') {
        carregando()
        verificarNome()
    }
}

function carregando() {
    let inputNome = entrada.querySelector('input')
    let botaoEntrar = entrada.querySelector('button')
    let imgLoading = entrada.querySelector('.loading')
    let entrando = entrada.querySelector('span')

    inputNome.classList.toggle('escondido')
    botaoEntrar.classList.toggle('escondido')
    imgLoading.classList.toggle('escondido')
    entrando.classList.toggle('escondido')
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

    if (classe === 'participantes') {
        participanteSelecionado = classParticipantes.querySelector('.selecionado')
        let contato = participanteSelecionado.parentNode.querySelector('p')
        contatoSelecionado = contato.innerHTML

        enviandoReservardo.innerHTML = `Enviando para ${contatoSelecionado} (reservadamente)`
    } else if (classe === 'visibilidade') {
        iconeVisibilidade = classVisibilidade.querySelector('.selecionado')
        let seguranca = iconeVisibilidade.parentNode.querySelector('p')
        visibilidadeSelecionada = seguranca.innerHTML
        if (visibilidadeSelecionada === 'Público') {
            tipoMsg = 'message'
            removerReservado()
        } else if (visibilidadeSelecionada === 'Reservadamente') {
            tipoMsg = 'private_message'
            inputReservado()
        }
    }
}

let classVisibilidade = document.querySelector('.visibilidade')
let iconeVisibilidade = classVisibilidade.querySelector('.selecionado')
let visibilidadeSelecionada = 'Público'
let tipoMsg = 'message'

const enviandoReservardo = document.querySelector('footer span')

function inputReservado() {
    enviandoReservardo.classList.remove('escondido')
    input.classList.add('marginBot7')
    enviandoReservardo.innerHTML = `Enviando para ${contatoSelecionado} (reservadamente)`
}

function removerReservado() {
    enviandoReservardo.classList.add('escondido')
    input.classList.remove('marginBot7')
}

let jaVerificado = false

document.addEventListener("keypress", function (e) {

    if (e.key === "Enter" && jaVerificado === true) {
        const enviar = document.querySelector('footer ion-icon')
        enviar.click()
    }
    /*if (e.key === "Enter" && jaVerificado === false) {
        const btn = document.querySelector('.telaDeEntrada button')
        btn.click()
        jaVerificado = true
    }*/
})

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

function entrarMensagensApi() {
    let promise = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
    promise.then(processResponse)
}

//entrarMensagensApi()

function atualizarMensagens() {
    promise = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
    promise.then(processResponse)

    buscarParticipantes()
}


function processResponse(response) {
    main.innerHTML = ''
    let info = response.data
    //console.log(info)

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
            if (mensagem.to === nome || mensagem.from === nome) {
                main.innerHTML += `
            <div class="msg privado">
                <span><small>${mensagem.time}</small> <strong>${mensagem.from}</strong> reservadamente para <strong>${mensagem.to}</strong>: ${mensagem.text}</span>
            </div>`
            }
        }

    }
    scroll()
}

//setInterval(atualizarMensagens, 3000)

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
    //console.log(response.data)
    //verificado = true
    entrarMensagensApi()
    buscarParticipantes()
    carregando()
    entrada.classList.add('escondido')
    jaVerificado = true
    setInterval(atualizarMensagens, 3000)
    setInterval(manterConexao, 5000)
}

function processFailed(erro) {
    //console.log(erro.response)
    //let statusCode = erro.response.status
    carregando()
    alert('Usuário já existe, escolha outro nome')
    //nome = prompt('Escolha seu nome')
    //verificarNome()

}

//verificarNome()


function manterConexao() {
    let promiseConexao = axios.post('https://mock-api.driven.com.br/api/v4/uol/status', nomeDeUsuario)

    promiseConexao.then(conexaoSuccess)
    promiseConexao.catch(conexaoFailed)
}

function conexaoSuccess(response) {
    //console.log(response.data)
}

function conexaoFailed(erro) {
    //console.log(erro.response)
    //let statusCode = erro.response.status
}

//setInterval(manterConexao, 5000)

function enviarMensagem() {

    const mensagem = document.querySelector('footer input').value

    /*if(nomeParticipantes.find(contatoSelecionado)){
        console.log('envia')
    }else{
        console.log('nao')
    }*/

    let indiceSelecionado = nomeParticipantes.indexOf(contatoSelecionado)

    let usuario = {
        from: nome,
        to: nomeParticipantes[indiceSelecionado],
        text: mensagem,
        type: tipoMsg // ou "private_message" para o bônus
    }

    let promiseMensagem = axios.post('https://mock-api.driven.com.br/api/v4/uol/messages', usuario)

    promiseMensagem.then(msgSuccess)
    promiseMensagem.catch(msgFailed)
}

function msgSuccess(response) {
    //console.log(response.data)
    input.value = ''
}

function msgFailed(erro) {
    alert('Usuário saiu da sala')
    window.location.reload()
}


function buscarParticipantes() {

    let promiseParticipantes = axios.get('https://mock-api.driven.com.br/api/v4/uol/participants')
    promiseParticipantes.then(processParticipantes)

}

let nomeParticipantes = ['Todos']

function processParticipantes(response) {
    participantes = response.data
    //console.log(participantes)

    nomeParticipantes = ['Todos']
    for (let i = 0; i < participantes.length; i++) {
        nomeParticipantes.push(participantes[i].name)
    }

    //console.log(participantes[0].name)

    //marcarSelecionado()
    adcNaTelaLateral()
}

let participantes = null

const participantesNovos = document.querySelector('.participantesNovos')


function adcNaTelaLateral() {
    participantesNovos.innerHTML = ''
    for (let i = 1; i < participantes.length; i++) {
        participantesNovos.innerHTML += `
        <div class="opcao participante" onclick="selecionar(this,'participantes')" data-identifier="participant">
            <ion-icon name="person-circle"></ion-icon>
            <p>${nomeParticipantes[i]}</p>
            <ion-icon name="checkmark-sharp" class="check nome${[i]}"></ion-icon>
        </div>
        `
        if (nomeParticipantes[i] === contatoSelecionado) {
            let icone = participantesNovos.querySelector(`.nome${[i]}`)
            icone.classList.add('selecionado')
        }
    }

    /*participantesNovos.innerHTML = ''
    for (let i = 0; i < participantes.length; i++) {
        let participante = participantes[i]
        participantesNovos.innerHTML += `
        <div class="opcao participante" onclick="selecionar(this,'participantes')" data-identifier="participant">
            <ion-icon name="person-circle"></ion-icon>
            <p>${participante.name}</p>
            <ion-icon name="checkmark-sharp" class="check nome-${participante.name}"></ion-icon>
        </div>
        `
        if (participante.name === contatoSelecionado) {
            let icone = participantesNovos.querySelector(`.nome-${participante.name}`)
            icone.classList.add('selecionado')
        }
    }

    let saiu = true
    checkTodosParticipantes = participantesNovos.querySelectorAll('.check')
    for(let j = 0; j < checkTodosParticipantes.length; j++){
        if(checkTodosParticipantes[j].classList.contains('selecionado') === true){
            saiu = false
        }
    }

    if(saiu === true && contatoSelecionado !== 'Todos'){
        //console.log('saiu')
        const todos = document.querySelector('.participante')
        const iconeTodos = todos.querySelector('.check')
        iconeTodos.classList.add('selecionado')
        participanteSelecionado = document.querySelector('.selecionado')
    }*/
}

let contatoSelecionado = 'Todos'
let participanteSelecionado = document.querySelector('.selecionado')
const classParticipantes = document.querySelector('.participantes')


//function marcarSelecionado() {
    //selecionado = classParticipantes.querySelector('.selecionado')

/*if (participantes.includes({name: contatoSelecionado}) === false) {
    const todos = document.querySelector('.participante')
    const iconeTodos = todos.querySelector('.check')
    iconeTodos.classList.add('selecionado')
    console.log('erro')
} else {*/

/*let contato = participanteSelecionado.parentNode.querySelector('p')
contatoSelecionado = contato.innerHTML*/

    //}

    //console.log(contatoSelecionado)
//}


//buscarParticipantes()