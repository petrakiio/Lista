const div = document.getElementById('area')

div.addEventListener('mouseenter', ()=>{
    div.textContent='Entrou!'
    div.className='enter'
})
div.addEventListener('mouseout', ()=>{
    div.textContent='Saiu'
    div.className=''
})