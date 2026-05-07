function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumentarPreco = function (valor) {
    this.preco += valor;
}

Produto.prototype.diminuiPreco = function (valor) {
    this.preco -= valor;
}

function Camiseta (nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Prod. Generico', 10);
const camiseta = new Camiseta('Regata', 57.5, 'algodão');

camiseta.aumentarPreco(100);

console.log(produto);
console.log(camiseta);