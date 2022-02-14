let nome = null
let contatoSelecionado = 'Todos'
let visibilidadeSelecionada = 'Público'
let tipoMsg = 'message'
let nomeParticipantes = ['Todos']
let nomeDeUsuario = null
let participantes = null
let jaVerificado = false
let participanteEscolhido = document.querySelector('.selecionado')

const classParticipantes = document.querySelector('.participantes')
const classVisibilidade = document.querySelector('.visibilidade')
let iconeVisibilidade = classVisibilidade.querySelector('.selecionado')
const main = document.querySelector('main')
const entrada = document.querySelector('.telaDeEntrada')
const input = document.querySelector('footer input')
const telaLateral = document.querySelector('.telaLateral')
const fundoEscuro = document.querySelector('.escurecerDevagar')
const enviandoReservardo = document.querySelector('footer span')
const participantesNovos = document.querySelector('.participantesNovos')


function entrarNaSala() {
    nome = document.querySelector('.telaDeEntrada input').value
    if (nome === 'Todos') {
        alert('Usuário já existe, escolha outro nome')
    } else if (nome !== '') {
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

function verificarNome() {
    nomeDeUsuario = {
        name: nome
    }
    let promise = axios.post('https://mock-api.driven.com.br/api/v4/uol/participants', nomeDeUsuario)
    promise.then(processSuccess)
    promise.catch(processFailed)

}

function processSuccess(response) {
    entrarMensagensApi()
    buscarParticipantes()
    carregando()
    entrada.classList.add('escondido')
    jaVerificado = true
    setInterval(entrarMensagensApi, 3000)
    setInterval(manterConexao, 5000)
    setInterval(buscarParticipantes, 10000)
}

function processFailed(erro) {
    carregando()
    alert('Usuário já existe, escolha outro nome')
}


function entrarMensagensApi() {
    let promise = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
    promise.then(processResponse)
}

function processResponse(response) {
    main.innerHTML = ''
    let info = response.data

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

function scroll() {
    let elementoQueQueroQueApareca = document.querySelector('.msg:last-child');
    elementoQueQueroQueApareca.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function buscarParticipantes() {
    let promise = axios.get('https://mock-api.driven.com.br/api/v4/uol/participants')
    promise.then(processParticipantes)
}

function processParticipantes(response) {
    participantes = response.data
    nomeParticipantes = ['Todos']
    for (let i = 0; i < participantes.length; i++) {
        nomeParticipantes.push(participantes[i].name)
    }

    adcNaTelaLateral()
}

function adcNaTelaLateral() {
    participantesNovos.innerHTML = ''
    for (let i = 1; i < participantes.length; i++) {
        participantesNovos.innerHTML += `
        <div class="opcao participante" onclick="selecionar(this,'participantes')" data-identifier="participant">
            <div class="iconeLateral">
                <ion-icon name="person-circle"></ion-icon>
            </div>
            <p>${nomeParticipantes[i]}</p>
            <ion-icon name="checkmark-sharp" class="check nome${[i]}"></ion-icon>
        </div>
        `
        if (nomeParticipantes[i] === contatoSelecionado) {
            let icone = participantesNovos.querySelector(`.nome${[i]}`)
            icone.classList.add('selecionado')
        }
    }
}

function manterConexao() {
    let promise = axios.post('https://mock-api.driven.com.br/api/v4/uol/status', nomeDeUsuario)
    promise.then(conexaoSuccess)
}

function conexaoSuccess(response) {
    //console.log(response.data)
}

function enviarMensagem() {
    const mensagem = document.querySelector('footer input').value
    let indiceSelecionado = nomeParticipantes.indexOf(contatoSelecionado)
    let usuario = {
        from: nome,
        to: nomeParticipantes[indiceSelecionado],
        text: mensagem,
        type: tipoMsg
    }

    if (usuario.text === '') {
        alert('Escreva algo')
    } else if (usuario.from === usuario.to) {
        alert('Não é possível mandar mensagem para você mesmo. Converse!!')
    } else if (usuario.to === 'Todos' && usuario.type === "private_message") {
        alert('Não é possível mandar mensagem privada para Todos')
    } else {
        let promise = axios.post('https://mock-api.driven.com.br/api/v4/uol/messages', usuario)
        promise.then(msgSuccess)
        promise.catch(msgFailed)
    }
}

function msgSuccess(response) {
    input.value = ''
}

function msgFailed(erro) {
    alert('Usuário saiu da sala')
    window.location.reload()
}

function abrirTelaLateral() {
    fundoEscuro.classList.add('escurecer')
    fundoEscuro.classList.add('transparenciaFundo')
    telaLateral.classList.add('deslizar')
}

function esconderTelaLateral() {
    setTimeout(clarear, 600)
    fundoEscuro.classList.remove('transparenciaFundo')
    telaLateral.classList.remove('deslizar')
}

function clarear() {
    fundoEscuro.classList.remove('escurecer')
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
        participanteEscolhido = classParticipantes.querySelector('.selecionado')
        let contato = participanteEscolhido.parentNode.querySelector('p')
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

function inputReservado() {
    enviandoReservardo.classList.remove('escondido')
    input.classList.add('marginBot5')
    enviandoReservardo.innerHTML = `Enviando para ${contatoSelecionado} (reservadamente)`
}

function removerReservado() {
    enviandoReservardo.classList.add('escondido')
    input.classList.remove('marginBot5')
}

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && jaVerificado === true) {
        const enviar = document.querySelector('footer ion-icon')
        enviar.click()
    }
})
