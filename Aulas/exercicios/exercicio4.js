const card = document.getElementById('grid')
const n = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
n.sort(() => Math.random() - 0.5)

let primeirocard = null
let segundocard = null
let travado = false

for (const valor of n) {
    const bloco = document.createElement('div')
    bloco.classList.add('card')
    bloco.dataset.valor = valor
    bloco.textContent = ''

    bloco.addEventListener('click', () => verificar(bloco))

    card.appendChild(bloco)
}

function verificar(bloco) {
    if (travado) return

    if (bloco === primeirocard) return

    // revela o card
    bloco.classList.add('revelado')
    bloco.textContent = bloco.dataset.valor

    if (primeirocard === null) {
        primeirocard = bloco
        return
    }


    segundocard = bloco
    travado = true

    setTimeout(() => {
        if (primeirocard.dataset.valor === segundocard.dataset.valor) {
            primeirocard.classList.add('bloqueado')
            segundocard.classList.add('bloqueado')
        } else {
            primeirocard.classList.remove('revelado')
            segundocard.classList.remove('revelado')
            primeirocard.textContent = ''
            segundocard.textContent = ''
        }
        primeirocard = null
        segundocard = null
        travado = false
    }, 1000)
}
