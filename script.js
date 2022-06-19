let numero = prompt(
`Bem-vindo(a) ao Parrots Card Game
Escolha o número de cartas entre 4 e 14

Lembre-se que o número deve ser par!` );

let num = Number(numero);

let contador = 0;

if(num%2 == 0 && num <= 14 && num >=4){
   alert("Pode jogar")

// } else{

while(num%2 !== 0 || num >14 || num < 4){
    alert("Número inválido! Por favor, digite um número par entre 4 e 14");
    num = prompt("Digite o novo número")
    contador ++;
} 
}

function insereCartas (){
    const cartas = document.querySelector('.memory-game-cards');

    let cards = [];

    // while(contador < num){
    //     cards.push
    //     cartas.innerHTML = <div class="card"></div>;
}

let cartaClicada = document.querySelector(".front-face");

cartaClicada.addEventListener('click', virarCarta);

function virarCarta(){
    const pai = cartaClicada.parentNode;

    pai.classList.add("flip");
}

