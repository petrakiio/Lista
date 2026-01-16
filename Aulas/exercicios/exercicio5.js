const cores = ['blue','red','green','yellow','lightgreen','brown','white','black']
const btn = document.getElementById('btn')
const body = document.body

btn.addEventListener('click',() =>{
    if (body.style.background === 'red'){
        body.style.background='white'
    }
    else{
        body.style.background='red'
    }
})

btn.addEventListener('mouseenter', ()=>{
    btn.textContent='Clique em min'
})
btn.addEventListener('mouseout',()=>{
    btn.textContent='Mudar cor'
})