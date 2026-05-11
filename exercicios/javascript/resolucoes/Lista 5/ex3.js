/* 3. 📦 sistema de estoque com retry
objetivo:
trabalhar erro + retry + estrutura
requisitos:
!- função construtora Produto(nome, estoque)
!- método:
!  retirar(qtd) → diminui estoque
!- crie função async:
!  tenta retirar produto
!  pode falhar aleatoriamente
!- implemente:
!  executarComRetry(fn, tentativas)
!  aplique isso para tentar retirar produtos
- resultado final:
{
!  sucesso: [...],
!  falha: [...]
} */

function Produto(nome, estoque) { //função construtora
    this.nome = nome;
    this.estoque = estoque;
};

Produto.prototype.retirar = function (qtd) { //adicionando método retirar no prototype de Produto
    if (qtd > this.estoque) {
        console.log("Quantidade maior que estoque!");
    } else {
        this.estoque -= qtd; //diminui o estoque pela quantidade passada
    }

    return this.estoque; //retorna o estoque atualizado
};

async function tentaRetirar(produto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 100) + 1; //gera um número aleatório até 100

            if (random <= 50) { //se o número aleatório for menor ou igual a 50
                produto.retirar(5); //retira 5 do estoque
                resolve(produto); //resolve passando o produto atualizado
            }
            else {
                reject(produto);
            };
        }, 2000);
    });
};

function executarComRetry(fn, tentativas) {
    return new Promise((resolve, reject) => {
        function tentar(vezesRestantes) {
            fn().then(resolve)
            .catch((erro) => {
                if (vezesRestantes > 1) {
                    tentar(vezesRestantes - 1);
                } else {
                    reject(erro);
                };
            });
        };
        tentar(tentativas);
    });
};

//criando produtos
const p1 = new Produto("Banana",   100);
const p2 = new Produto("Abacaxi",  100);
const p3 = new Produto("Maçã",     100);
const p4 = new Produto("Melancia", 100);
const p5 = new Produto("Laranja",  100);


async function final() { //fazendo por async/await
    const arrFunc = [
        executarComRetry(() => tentaRetirar(p1), 3),
        executarComRetry(() => tentaRetirar(p2), 3),
        executarComRetry(() => tentaRetirar(p3), 3),
        executarComRetry(() => tentaRetirar(p4), 3),
        executarComRetry(() => tentaRetirar(p5), 3)
    ];

    const resultados = await Promise.allSettled(arrFunc);
    const sucesso = [];
    const falha   = [];

    resultados.forEach((resultado) => {
        if (resultado.status === "fulfilled") {
            sucesso.push(resultado.value);
        } else {
            falha.push(resultado.reason);
        };
    });

    console.log("Sucesso: ", sucesso, "Falha: ", falha);
};

final();
