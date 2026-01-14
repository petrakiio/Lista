// Scores
const Score_com = document.getElementById('computer-score');
const playerDisplay = document.getElementById('player-score');
const empate = document.getElementById('empate')
let playern = 0;
let computern = 0;

const opcoes = ['pedra', 'papel', 'tesoura'];

// Botões
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');

function roleta() {
    const indice = Math.floor(Math.random() * opcoes.length);
    return opcoes[indice];
}

function limpar(){
    empate.textContent=''
}

function atualizar(resultado) {
    if (resultado === 'player') {
        playern++;
        playerDisplay.textContent = playern;
    } else if (resultado === 'computador') {
        computern++;
        Score_com.textContent = computern;
    } else {
        empate.textContent('Deu empate')
    }
}

// Lógica de quem ganha
function decidir(escolhaComputador, escolhaPlayer) {
    if (escolhaComputador === escolhaPlayer) return 'empate';

    if (
        (escolhaPlayer === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaPlayer === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaPlayer === 'tesoura' && escolhaComputador === 'papel')
    ) {
        return 'player';
    } else {
        return 'computador';
    }
}


pedra.addEventListener('click', () => {
    const escComp = roleta();
    const resultado = decidir(escComp, 'pedra');
    atualizar(resultado);
    limpar()
});

papel.addEventListener('click', () => {
    const escComp = roleta();
    const resultado = decidir(escComp, 'papel');
    atualizar(resultado);
    limpar()
});

tesoura.addEventListener('click', () => {
    const escComp = roleta();
    const resultado = decidir(escComp, 'tesoura');
    atualizar(resultado);
    limpar
});