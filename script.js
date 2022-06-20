const cartas = [
    "bobross",
    "explody",
    "fiesta",
    "metal",
    "revertit",
    "triplets",
    "unicorn"
  ];
  
  let numero = 8;
  /* prompt(
    `Bem-vindo(a) ao Parrots Card Game
  Escolha o número de cartas entre 4 e 14
  
  Lembre-se que o número deve ser par!`
  ); */
  
  // Aviso para o usuário escolher o número de cartas
  
  let incremento = 0;
  
  let tabuleiro = [];
  
  let quantidadeCartas = numero / 2;
  
  function comparador() {
    return Math.random() - 0.5;
  }
  let cartaSorteada = cartas.sort(comparador);
  
  if (numero % 2 === 0 && numero <= 14 && numero >= 4) {
    insereCartas();
  } else {
    while (numero % 2 !== 0 || numero > 14 || numero < 4) {
      alert("Número inválido! Por favor, digite um número par entre 4 e 14");
      numero = prompt("Digite o novo número");
      incremento++;
      insereCartas();
    }
  }
  
  //Funcões que pegam as cartas que serão colocadas no tabuleiro
  
  function insereCartas() {
    for (let index = 0; index < quantidadeCartas; index++) {
      let cartaSelecionada = cartaSorteada;
      tabuleiro.push(cartaSelecionada[index]);
      tabuleiro.push(cartaSelecionada[index]);
    }
  
    tabuleiro = tabuleiro.sort(comparador);
  
    for (let index = 0; index < numero; index++) {
      const cartaTemplate = `
  <div class="card" data-identifier="card">
  <div class="back-face" data-identifier="back-face">
  <img src="./img/${tabuleiro[index]}parrot.gif">
  </div>
  <div class="front-face" onclick="virarCarta(this); "compararCartas(this)" data-identifier="front-face">
  <img src="/img/front.png">
  </div>
  </div>
  `;
      document.querySelector(".container").innerHTML += cartaTemplate;
    }
  }
  
//Funcões de virar cartas e comparar

    let hasFlippedCard = false;
    let firstCard, secondCard;

  function virarCarta(elemento) {
    let pai = elemento.parentNode;
    pai.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return
  } 
  else{
    secondCard = this;
    hasFlippedCard = false;
    }
  }