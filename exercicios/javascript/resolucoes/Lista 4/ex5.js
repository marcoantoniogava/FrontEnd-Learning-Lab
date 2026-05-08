/* 5. (array + deduplicação)
dado:
const numeros = [1, 2, 2, 3, 4, 4, 5];
retorne um array sem valores duplicados
👉 não pode usar Set */

const numeros = [1, 2, 2, 3, 4, 4, 5];
const novoArray = [];

for (let i = 0; i < numeros.length; i++) {
    const n = numeros[i];
    if (!novoArray.includes(n)) { //se o novo array ainda não tem o número,
        novoArray.push(n); //coloca ele no array
    };
};
console.log(novoArray); //exibe o array sem duplicados