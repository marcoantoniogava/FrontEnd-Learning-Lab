    ```js
Classes no JavaScript (ES6+)

O que são classes
-> Uma forma mais organizada e legível de trabalhar com funções construtoras e protótipos.

Mesmo usando class, por baixo dos panos continua sendo prototype-based (não virou orientação a objetos
"real" igual Java ou C#).

# . 1 - Sintaxe básica 
## 1 - Estrutura básica
    class Pessoa {
        constructor (nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }

        falar() {
            return `Olá, meu nome é ${this.nome}`;
        }
    }

    const p1 = new Pessoa("Nícolas", 20);

    console.log(p1.nome);
    console.log(p1.falar()); 

# _________________________________________________________________________________________________________________

# . 2 - O construtor
## 1 - Constructor é executado automaticamente
    Constructor é executado automaticamente quando você usa new.

    class Produto {
        constructor(nome, preco) {
            this.nome = nome;
            this.preco = preco;
        }
    }

    equivalente com function:

    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

# _________________________________________________________________________________________________________________

# . 3 - Métodos
## 1 - Métodos na classe
    Métodos definidos dentro da classe vão para o >>prototype<<
    
    class Animal {
        falar() {
            console.log("som genérico");
        }
    }

    isso é equivalente a:

    Animal.prototype.falar = function () {
        console.log("som genérico");
    }

# _________________________________________________________________________________________________________________

# . 4 - This dentro da classe
## 1 - Contexto de this
    O this sempre se refere à instância criada com new.

## 2 - Problemas comuns
    class Usuario {
        constructor(nome) {
            this.nome = nome;
        }

        saudacao() {
            return `Olá ${this.nome}`;
        }
    }

    const u = new Usuario("João");
    const fn = u.saudacao;

    console.log(fn()); // undefined
    -> perdeu o contexto

## 3 - Solução
    const fn = u.saudacao.bind(u);

# _________________________________________________________________________________________________________________

# . 5 - Métodos estáticos 
## 1 - Métodos da classe, não da instância
    Métodos que pertecem à classe, não à instância.
    
    class Calculadora {
        static somar(a,b) {
            return a + b;
        }
    }

    console.log(Calculadora.somar(2,3));

    ❌ Isso não funciona:
    const c = new Calculadora();
    c.somar(); // erro

# _________________________________________________________________________________________________________________

# . 6 - Getters e Setters
## 1 - Controlando acesso a propriedades
    Permitem controlar acesso a propriedades.
    
    class Pessoa {
        constructor(nome) {
            this._nome = nome; 
        }

        get nome() {
            return this._nome;
        }

        set nome(valor) {
            if (valor.length < 2) return;
            this._nome = valor;
        }
    }

    const p = new Pessoa("Nícolas");

    console.log(p.nome);
    p.nome = "A" // ignorado

## 2 - Por que usar _ (underline)
    Quando você vê algo assim:
    this._nome = nome;

    normalmente significa:
    “isso aqui é uma propriedade interna, não deveria ser acessada diretamente”

    aqui acontece o seguinte:

    _nome = valor “real” interno
    nome = interface controlada (getter/setter)

## 3 - Por que não usar só this.nome?
    Se fizer isso:
    set nome(valor) {
        this.nome = valor;
    }

    você cria um loop infinito

    porque:
    - setter chama setter de novo
    - e de novo
    - e trava tudo

    então o _ resolve isso
    this._nome

    evita conflito entre:
    - propriedade interna
    - getter/setter com mesmo nome

## 4 - Utilizando Symbol para propriedades privadas
    class Pessoa () {
        const _senha = Symbol("senha"); // Símbolo é um tipo de dado primitivo único.

        constructor(nome, senha) {
            this.nome = nome;
            this[_senha] = senha; // propriedade "privada"
        }

        verificarSenha(senha) {
            return this[_senha] === senha;
        }

        // para acessar, poderia criar um getter específico:
        get senha() {
            throw new Error("Acesso negado");
        }
    }

    const c1 = new Pessoa("Maria", "12345");
    console.log(c1.verificarSenha("12345")); // true
    c1["senha"]; // undefined
    c1.senha; // erro "Acesso negado"

## 4 - Encapsulamento moderno com #
    class Pessoa {
        #nome;

        constructor(nome) {
            this.#nome = nome;
        }

        get nome() {
            return this.#nome;
        }
    }

    agora sim é verdadeiro encapsulamento:
    pessoa.#nome // erro

# _________________________________________________________________________________________________________________

# . 7 - Herança (extends)
## 1 - Criar classes baseadas em outras
    Permite criar classes baseadas em outras.
    
    class Animal {
        constructor(nome, cor) {
            this.nome = nome;
            this.cor  = cor;
        }

        falar() {
            console.log("som genérico");
        }
    }

    class Cachorro extends Animal {
        falar() {
            console.log("Latindo");
        }
    }

    -> nesse caso, Cachorro herda o prototype de Animal
    a estrutura é herdada
    mas o constructor do pai não roda automaticamente

# _________________________________________________________________________________________________________________

# . 8 - Super
## 1 - Chamar o constructor da classe pai
    Usado para chamar o constructor da classe pai.
    
    class Animal {
        constructor(nome) {
            this.nome = nome;
        }

        falar() {
            console.log("som genérico");
        }
    }

    class Cachorro extends Animal {
        constructor(nome, raca) {
            super(nome);
            this.raca = raca;
        }

        falar() {
            super.falar(); // chama o do pai
            console.log("latindo");
        }
    }

    const c = new Cachorro("rex", "vira-lata");

    c.falar();

## 2 - Como super() funciona
    - chama o constructor da classe pai
    - inicializa o this
    - obrigatório se tiver constructor na filha

# _________________________________________________________________________________________________________________

# . 9 - Campos de classe (class fields)
## 1 - Propriedades pré-estabelecidas
    forma moderna de declarar propriedades com valores pré-estabelecidos na classe:
    
    class Usuario {
        nome = "anônimo"; 

        constructor(nome) {
            this.nome = nome; 
        }
    }

# _________________________________________________________________________________________________________________

# . 10 - Métodos privados (#)
## 1 - Encapsulamento real (ES2022+)
    class Conta {
        #saldo = 0;

        depositar(valor) {
            this.#saldo += valor;
        }

        verSaldo() {
            return this.#saldo;
        }
    }

    //Não podemos acessar no objeto instanciado:
    conta.#saldo // erro

# _________________________________________________________________________________________________________________

# . 11 - Static + private 
## 1 - Combinando static com private
    class Sistema {
        static #contador = 0;

        static incrementar() {
            this.#contador++;
            return this.#contador;
        }
    }

# _________________________________________________________________________________________________________________

# . 12 - Como funciona por baixo dos panos
## 1 - Class é açúcar sintático
    class Pessoa {}

    vira algo como:

    function Pessoa () {}
    Pessoa.prototype = {};

    Ou seja:
    - classe = açúcar sintático
    - base continua sendo prototype

# _________________________________________________________________________________________________________________

# . 13 - Boas práticas
## 1 - Quando usar classes
    Usar classes quando:
    - modelar entidades (usuário, produto, pedido)
    - trabalhar com OO
    - precisar de herança

## 2 - Quando evitar classes
    evitar quando:
    - lógica simples -> prefira funções
    - código funciona (React moderno, por exemplo)

## 3 - Recomendações
    prefira:
    - métodos no prototype (padrão de classe já faz isso)
    - encapsular com # quando necessário
    - evitar lógica pesada dentro do constructor

# _________________________________________________________________________________________________________________

# . 14 - Não usar arrow function como método de classe
## 1 - Arrow functions não vão pro prototype
    class Teste {
        metodo = () => {} // isso não vai pro prototype
    }
