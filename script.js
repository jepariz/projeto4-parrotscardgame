
const cartas = ['./img/bobrossparrot.gif', 
'./img/explodyparrot.gif',
'./img/fiestaparrot.gif',
'./img/metalparrot.gif',
'./img/revertitparrot.gif',
'./img/tripletsparrot.gif',
'./img/unicornparrot.gif',
'./img/bobrossparrot.gif', 
'./img/explodyparrot.gif',
'./img/fiestaparrot.gif',
'./img/metalparrot.gif',
'./img/revertitparrot.gif',
'./img/tripletsparrot.gif',
'./img/unicornparrot.gif',
];

cartas.sort(comparador); 

function comparador() { 
    return Math.random() - 0.5; 
}


let numero = prompt(
`Bem-vindo(a) ao Parrots Card Game
Escolha o número de cartas entre 4 e 14

Lembre-se que o número deve ser par!` );

let num = Number(numero);

let incremento = 0;

if(num%2 == 0 && num <= 14 && num >=4){
    insereCartas();

 } else{

while(num%2 !== 0 || num >14 || num < 4){
    alert("Número inválido! Por favor, digite um número par entre 4 e 14");
    num = prompt("Digite o novo número")
    incremento ++;
    insereCartas();
} 
} 

function insereCartas (){
    
    for(let index = 0; index < num; index ++){
        const cartaTemplate = `
        <div class="card" data-identifier="card">
        <div class="back-face" data-identifier="back-face">
            <img src="${cartas[index]}">
        </div>
        <div class="front-face" onclick="virarCarta(this); estaVirada(this)" data-identifier="front-face">
            <img src="/img/front.png">
        </div>
    </div>
        `
        document.querySelector('.container').innerHTML += cartaTemplate;

    }
}


function virarCarta(elemento){
    const pai = elemento.parentNode;
    pai.classList.add("flip");
}

let jogadas = 0;
let primeiraCarta;
let segundaCarta;

function estaVirada(elemento){
    const pai = document.querySelector(".front-face").parentNode;
    const virada = pai.classList.contains('flip');
    console.log(virada)

    
}
estaVirada();



