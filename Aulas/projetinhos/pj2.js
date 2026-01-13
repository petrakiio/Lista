//gerador de frases

const frases = [
    "A persistência é o caminho do êxito.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Seja a mudança que você deseja ver no mundo.",
    "A simplicidade é o último grau de sofisticação.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Grandes batalhas só são dadas a grandes guerreiros.",
    "A sorte favorece a mente preparada.",
    "A jornada de mil milhas começa com um único passo.",
    "O que não nos mata, nos torna mais fortes.",
    "A criatividade é a inteligência se divertindo.",
    "Não espere por oportunidades, crie-as.",
    "Sua única limitação é você mesmo.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Onde há vontade, há um caminho."
]

const btn = document.getElementById('gerador')
const p = document.getElementById('frase')
const limpar = document.getElementById('limpar')

btn.addEventListener('click', () => {
    const frase = frases[Math.floor(Math.random() * frases.length)]
    p.textContent=frase
})

limpar.addEventListener('click', () =>{
    p.textContent=''
})