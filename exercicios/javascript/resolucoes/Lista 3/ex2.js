/* 2. (funções + this)
-crie uma função construtora Carro com:
-propriedades: marca, velocidade
-método: acelerar() que soma +10 na velocidade
-teste criando dois carros diferentes. */

function Carro(marca, velocidade) {
    this.marca      = marca;
    this.velocidade = velocidade;
    
    this.acelerar = function() {
        this.velocidade += 10;
    };
};

const c1 = new Carro("Porsche", 150);

const c2 = new Carro("Ferrari", 100);
c2.acelerar();

console.log(c1, c2);
