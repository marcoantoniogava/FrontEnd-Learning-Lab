/* 4. (arrays intermediário)
dado: const numeros = [1, 2, 3, 4, 5, 6];
retorne um novo array apenas com números pares multiplicados por 2
👉 dica: usar filter + map */

const numeros = [1, 2, 3, 4, 5, 6];

const paresMult = numeros.filter(num => num % 2 === 0).map(num => num * 2);
console.log(paresMult);
