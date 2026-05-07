/* 5. (arrays + lógica)
crie uma função que recebe um array de números e retorna:
o maior número
o menor número
sem usar Math.max ou Math.min */

const arrNum = [5, 8, 10, 4, 1, 6, 7, 2, 9, 3]; //array de números

function maiorEMenor(array) { //função recebe um array

    let maior = array[0]; //maior numero começa como o primeiro
    let menor = array[0]; //menor tbm

    for (let i = 0; i < array.length; i++) { //loop pra cada número do array
        let atual = array[i]; //número atual
        if (atual > maior) { //se o atual for maior que o maior até agora:
            maior = atual; //maior = atual
        };

        if (atual < menor) { //se o atual for menor que o menor até agora:
            menor = atual; //menor = atual
        };

    };
    return [menor, maior]; //retorna um array com o menor e o maior número
};

console.log(maiorEMenor(arrNum)); //executa a função e exibe o retorno dela
