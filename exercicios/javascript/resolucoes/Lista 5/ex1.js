/* 1. 🧾 sistema de pedidos com processamento assíncrono
objetivo:
simular um backend simples de pedidos
requisitos:
!- crie uma função construtora Pedido(id, cliente, valor)
!- adicione no prototype:
!  aplicarDesconto(percentual)
!  ehValido() (valor > 0)
!- crie um array com vários pedidos
!- crie uma função que:
!  simula processamento com setTimeout
!  tempo aleatório (até 2s)
!  se pedido inválido → reject
!  se válido → aplica 10% de desconto e resolve
!- processe todos os pedidos:
!  use Promise.all
!  trate sucesso e erro
!  retorne:
{
!    aprovados: [...],
!    recusados: [...]
} */

function Pedido(id, cliente, valor) { //função construtora Pedido
    this.id = id;
    this.cliente = cliente;
    this.valor = valor;
};

Pedido.prototype.aplicarDesconto = function(percentual) { //adicionando no prototype o método que aplica um desconto em um pedido

    this.valor = this.valor - ((this.valor / 100) * percentual); //mudando o valor original pro novo com desconto aplicado

    return this.valor; //retorna o valor
};

Pedido.prototype.ehValido = function() { //adicionando no prototype o método que verifica um pedido é válido
    return this.valor > 0; //retorna true se o valor do pedido for maior que 0
};

//criando pedidos
const p1 = new Pedido(1, "Marco", 0);
const p2 = new Pedido(2, "Lucas", 250);
const p3 = new Pedido(3, "Pedro", 130);
const p4 = new Pedido(4, "Marco", 0);
const p5 = new Pedido(5, "Marco", 100);
const p6 = new Pedido(6, "Pedro", 300);
const p7 = new Pedido(7, "Lucas", 270);

const arrPedidos = [p1, p2, p3, p4, p5, p6, p7]; //array com vários pedidos

function processarPedido(pedido) { //função que verifica se o pedido é válido e aplica desconto
    return new Promise((resolve, reject) => {

        const tempo = Math.floor(Math.random() * 2000) + 1; //gerando tempo aleatório

        setTimeout(() => { //settimeout com tempo aleatório
            if (!pedido.ehValido()) { //se o pedido for inválido
                reject(pedido); //reject passando o pedido
            }
            else { //se pedido for válido
                pedido.aplicarDesconto(10); //aplica desconto de 10%
                resolve(pedido) //resolve passando o pedido
            }
        }, tempo);
    });
};

let aprovados = [];
let recusados = [];

//retorna um novo array que: pra cada pedido no array de pedidos, valida e retorna uma promise (tbm armazena em um array aprovados/recusados)
const promises = arrPedidos.map((pedido) => processarPedido(pedido)
    .then((pedido) => {
        aprovados.push(pedido);
        return pedido;
    })
    .catch((pedido) => {
        recusados.push(pedido);
        return pedido;
    })
);

Promise.all(promises).then(() => console.log("Aprovados: ", aprovados, "Recusados: ", recusados)); //não usei catch pra poder justamente mostrar os aprovados e recusados juntos
