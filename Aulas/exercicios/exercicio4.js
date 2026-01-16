const card = document.getElementById('grid')
const n = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
n.sort(() => Math.random() - 0.5)
const valor =''

for(valor in n){
    const bloco = document.createElement('div')
    bloco.className='card'
    card.appendChild(bloco)
}