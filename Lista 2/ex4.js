/* 4 - Array / Funções Funcionais
-usando apenas map, filter e reduce, dado um array de números [1,2,3,4,5,6,7,8,9,10]:
-filtre apenas os pares
-multiplique cada um por 3
-calcule a soma final */

arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtrados = arrNum.filter((num) => num % 2 == 0)
const multiplicados = filtrados.map((num) => num * 3)
const somaFinal = multiplicados.reduce((acc, num) => acc + num, 0) //0 pq vai retornar um número

console.log(filtrados);
console.log(multiplicados);
console.log(somaFinal);
