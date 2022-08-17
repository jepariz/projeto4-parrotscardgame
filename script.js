let numero;
let tabuleiro;
let cartaSelecionada;
let primeiraCarta, segundaCarta;

const cartas = [
    'bobrossparrot', 
    'explodyparrot', 
    'fiestaparrot', 
    'metalparrot', 
    'revertitparrot', 
    'tripletsparrot', 
    'unicornparrot'
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
    <div class="carta" >
        <img onclick="selecionarCarta(this)" class="front ${cartasEmbaralhadas[i]}" src="./img/front.png">
        <img  class="back" src="./img/${cartasEmbaralhadas[i]}.gif">
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
    numero = 4;
    // numero = Number(prompt(`Com quantas cartas você quer jogar? OBS: Escolha um número PAR entre 4 e 14`));
    while(numero % 2 !== 0 || numero === null || numero === NaN || numero < 4 || numero > 14){
        alert('Por favor, escolha um número PAR entre 4 e 14');
        numero = prompt("Digite o número escolhido");
    }
}
definirNumeroCartas();
iniciarJogo();


function selecionarCarta(carta){

    cartaSelecionada = carta.parentNode;
    cartaSelecionada.classList.add("flip");

    // cartaSelecionada1 = carta.parentNode;
    // cartaSelecionada1.classList.add("flip");

    console.log(cartaSelecionada)

    if(primeiraCarta === undefined){
       primeiraCarta = carta.classList[1];;
    } else if(segundaCarta === undefined){
        segundaCarta = carta.classList[1];
    }

    // if(primeiraCarta !== undefined && segundaCarta !== undefined && segundaCarta !== primeiraCarta){

    //     // function desvirarCarta(){
    //     // cartaSelecionada.classList.add("shake");
    //     // cartaSelecionada.classList.remove("flip");

    //     // }

    // }

   console.log(primeiraCarta,segundaCarta)

}





