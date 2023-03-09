const btn = document.querySelector('.boton');
const texto = document.querySelector('.texto');
const num = document.querySelector('#num');
const img = document.querySelector('.img');




async function generar(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    num.textContent = data.slip.id;
    texto.textContent = `"${data.slip.advice}"`;
    console.log(data.slip);
} 



btn.addEventListener('click',()=>{
    generar();
})