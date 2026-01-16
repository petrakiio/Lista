const cores = ['blue','red','green','yellow','lightgreen','brown','white','black']
const btn = document.getElementById('btn')
const body = document.body
btn.textContent='Mudar cor'

btn.addEventListener('click',() =>{
    let cor = cores[Math.floor(Math.random() * cores.length)]
    if (body.style.background === cor){
        cor = cores[Math.floor(Math.random() * cores.length)]
    }else{
        body.style.background=cor
    }
})
