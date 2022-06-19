let numero = prompt(`Bem-vindo(a) ao Parrots Card Game
Escolha o número de cartas entre 4 e 14

Lembre-se que o número deve ser par!` );

let num = Number(numero);

let contador = 0;

if(num%2 == 0 && num <= 14 && num >=4){
    alert("Pode jogar")

} else{

while(num%2 !== 0 || num >14 || num < 4){
    alert("Número inválido! Por favor, digite um número par entre 4 e 14");
    num = prompt("Digite o novo número")
    contador ++;
} 
}
console.log("Acabou");









// const cards = document.querySelectorAll(".card");
// let cartaClicada;

// function clickedCard(element){
//     cartaClicada = document.querySelector(".card");
//     console.log(cartaClicada)

//     if(cartaClicada !== null){
//         cartaClicada.classList.remove("flip");
//     }
//     cartaClicada.classList.add("flip");
// }








