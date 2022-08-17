let numero;
let tabuleiro;

const cartas = [
    'bobrossparrot.gif', 
    'explodyparrot.gif', 
    'fiestaparrot.gif', 
    'metalparrot.gif', 
    'revertitparrot.gif', 
    'tripletsparrot.gif', 
    'unicornparrot.gif'
];

let cartasEmbaralhadas = [];


function comparador() { 
	return Math.random() - 0.5;   
}

function inserirCartas(){
    cartasEmbaralhadas.sort(comparador);

    tabuleiro = document.querySelector(".tabuleiro");
    
   for(let i = 0; i < cartasEmbaralhadas.length; i++ ){
    let modeloCarta = `
    <div class="carta">
        <img class="front" src="./img/front.png">
        <img class="back" src="./img/${cartasEmbaralhadas[i]}">
    </div>`

    tabuleiro.innerHTML = tabuleiro.innerHTML + modeloCarta;
   }
    
}

function iniciarJogo(){

    for(let i = 0; i < numero/2 ; i++){
        let cartasEscolhidas = cartas[i];
        cartasEmbaralhadas.push(cartasEscolhidas);
        cartasEmbaralhadas.push(cartasEscolhidas);

    }
    inserirCartas();
}


// Escolher número de cartas -------------------------------------------------------------------------------

function definirNumeroCartas(){
    numero = Number(prompt(`Com quantas cartas você quer jogar? OBS: Escolha um número PAR entre 4 e 14`));
    while(numero % 2 !== 0 || numero === null || numero === NaN || numero < 4 || numero > 14){
        alert('Por favor, escolha um número PAR entre 4 e 14');
        numero = prompt("Digite o número escolhido");
    }
}
definirNumeroCartas();
iniciarJogo();











