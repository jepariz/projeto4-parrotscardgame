let qtdCartas = prompt(`Bem-vindo ao Parrot Card Game! 
Escolha a quantidade de cartas entre 4 e 14. 
Lembre-se que o número de cartas precisa ser par.

Com quantas cartas você quer jogar?`);

if(qtdCartas % 2 != 0 ){
    alert("Você deve escolher um número par de cartas!")
}