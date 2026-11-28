
const box1 = 0;
let box2 = 0;
var box3 = 0;

console.log(box1);


const btnMensagem = document.querySelector('#btnMensagem');
const btnTitulo = document.querySelector('#btnTitulo');
const btnCor = document.querySelector('#btnCor');

let conteudoTitulobkp = document.querySelector('#titulo').textContent;

btnMensagem.addEventListener('click',exibirMensagem)
btnTitulo.addEventListener('click',alternarTitulo)
btnTitulo.addEventListener('dblclick',restaurarTitulo)
btnCor.addEventListener('click',mudarCorFundo)

function exibirMensagem(){
    alert('Olá, Bem vindo ao JavaScript!');
}


function alternarTitulo(){
    document.querySelector("#titulo").textContent = "Alguma Coisa";
}
function restaurarTitulo(){
    document.querySelector("#titulo").textContent = conteudoTitulobkp;
}
function mudarCorFundo(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}