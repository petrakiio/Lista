function Main(){
    const btn = document.createElement('button'); 
    btn.textContent = "Click Here";
    document.body.appendChild(btn);

    document.querySelector('button').addEventListener('click',()=>{
    console.log('Button clicked!')
    });
}


document.addEventListener('DOMContentLoaded',Main);

