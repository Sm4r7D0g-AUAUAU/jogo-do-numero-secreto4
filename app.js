alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
// Se o chute for igual ao numeroSecreto
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número secreto entre 1 a 10');
    if(numeroSecreto ==chute) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
        //tentativas = tentativas + 1
    }
}
//enquanto chute não for igual ao número secreto
