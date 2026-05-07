/* 7. (comparação de objetos)
explique com código por que isso é falso:
const a = new Number(10);
const b = new Number(10);
console.log(a === b);
e mostre como comparar corretamente o valor */

//dá false pq new Number(10) cria objetos diferentes na memória
const a = new Number(10);
const b = new Number(10);
console.log(a === b);

//comparando corretamente: (pega o valor primitivo, que é 10)
console.log(a.valueOf() === b.valueOf());

//não entendi como explicar pq é falso por código, mas entendi o motivo
