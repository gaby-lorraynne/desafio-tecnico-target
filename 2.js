let x = 0, y = 1, aux = 0;
let valorInformado = 5;


const ehFibonacci = (valorInformado) => {
    if(valorInformado === 0 || valorInformado === 1) {
        return `O valor ${valorInformado} pertence a sequência de Fibonacci! `;
    }

    while( aux < valorInformado) {
        aux = x + y;
        x = y;
        y = aux;
    }

    if(aux === valorInformado) {
        return `O valor ${valorInformado} pertence a sequência de Fibonacci! `;
    }else{
        return `O valor ${valorInformado} não pertence a sequencia de Fibonacci! `;
    }
}

console.log(ehFibonacci(valorInformado));
