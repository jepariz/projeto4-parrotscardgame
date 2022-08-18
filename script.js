let numero;
let tabuleiro;
let primeiraCarta, segundaCarta;
let jogadas = 0;
let cartaSelecionada;
let cartasViradas;

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
    <div class="carta" onclick="selecionarCarta(this)">
        <img class="front ${cartasEmbaralhadas[i]}" src="./img/front.png">
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
    
   numero = Number(prompt(`Com quantas cartas você quer jogar? OBS: Escolha um número PAR entre 4 e 14`));
    while(numero % 2 !== 0 || numero === null || numero === NaN || numero < 4 || numero > 14){
        alert('Por favor, escolha um número PAR entre 4 e 14');
        numero = prompt("Digite o número escolhido");
    }
}
definirNumeroCartas();
iniciarJogo();

// Virar cartas e comparar ----------------------------------------------------------------------------------

function selecionarCarta(carta){

    if(carta.classList.contains("flip")){
        return
    }

    if(primeiraCarta !== undefined && segundaCarta !== undefined){
        return
    }

   carta.classList.add("flip");
    jogadas = jogadas + 1;

    console.log(jogadas)

   if(primeiraCarta === undefined){
    primeiraCarta = carta;
    } else if(segundaCarta === undefined){
     segundaCarta = carta;
    }  

    if(primeiraCarta.innerHTML !== segundaCarta.innerHTML){
     setTimeout(virarCartas, 1000);
    } else{
        limparCartas();
    }

    let finalizar = document.querySelectorAll(".carta")

    finalizar = Array.from(finalizar)

    let check = finalizar.every((carta) => carta.classList.contains("flip"))

    if(check){
       setTimeout(terminarJogo, 300);
    }

}

function virarCartas (){
    primeiraCarta.classList.add("shake");
    primeiraCarta.classList.remove("flip");
    segundaCarta.classList.add("shake");
    segundaCarta.classList.remove("flip");
    limparCartas();

}

function limparCartas(){
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function terminarJogo (){
    alert(`Você ganhou em ${jogadas} jogadas!`);
    let jogarNovamente = prompt("Quer jogar novamente? Digite 'sim' ou 'não'");

    if(jogarNovamente === "sim"){
      location.reload();
    } else {
       return 
    }
}
