/* 2. Encadeando Promises
Cria uma Promise que começa com o número 2, e:
multiplica por 3,
depois soma 10,
depois mostra o resultado no console.
Faz primeiro com .then() encadeando, depois com async/await. */

//Com .then()
const p = new Promise((resolve) => { //poderia ter feito Promise.resolve(2), só percebi depois
    console.log("Usando .then: \n");
    let n = 2;
    resolve(n);
    console.log("Primeiro Valor: " + n);
});
p.then(n => {
    n = n * 3;
    console.log("Segundo Valor: " + n);
    return n;
    //IMPORTANTE: Ao usar {} na arrow function, precisa usar return. Sem {} ela retorna algo automaticamente
})
.then(n => {
    n = n + 10;
    console.log("Resultado: " + n);
})


//Com async/await

async function f() {
    const p1 = await new Promise((resolve) => {
        let n = 2;
        resolve(n);
    });
    const p2 = await new Promise((resolve) => {
        let n = p1 * 3;
        resolve(n);
    });
    const p3 = await new Promise((resolve) => {
       let n = p2 + 10;
       resolve(n);
    });
    console.log("\nUsando async/await: \n");
    console.log("Primeiro Valor: " + p1 + "\nSegundo Valor: " + p2 + "\nResultado: " + p3);
};

f();

//Fazer uma função que vai retornar uma promise