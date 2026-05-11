    ```js
Prototype e Prototype Chain (JavaScript real por trás dos objetos)

# . 1 - o que é Prototype?
## 1 - Conceito de protótipo em JS
    JavaScript é baseado em protótipos para passar propriedades e métodos de um
    objeto para outro.

    Protótipo é o termo usado para se referir ao que foi criado pela primeira
    vez, servindo de modelo ou molde para futuras produções.

## 2 - [[Prototype]] e __proto__
    Todo objeto em JavaScript tem uma ligação interna invisível chamada:
    [[Prototype]] __proto__ que vem da propriedade prototype da função construtora
    que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, 
    primeiro o motor do JS vai tentar encontrar esse membro no próprio objeto 
    e depois a cadeia de protótipos é usada até o topo (null) até encontrar 
    (ou não) tal membro. 
    Isso significa que ele pode "herdar" coisas de outro objeto.

## 3 - Exemplo simples
    const pessoa = {
        nome: "Nícolas",
    };

    console.log(pessoa.toString());

    toString() nunca foi definido, mas mesmo assim funciona.
    por quê?
    porque ele foi herdado do Prototype.
    pessoa → Object.prototype → achou lá

# ________________________________________________________________________________

# . 2 - Prototype na prática 
## 1 - Como acessar o prototype
    todo objeto em JS aponta para um "pai":
    
    const obj = {};
    console.log(obj.__proto__);
    Esse __proto__ (antigo, mas útil para entender) mostra o prototype

## 2 - Diferença entre __proto__ e .prototype
    __proto__
    - é do objeto
    - aponta pro prototype dele
    - é um getter/setter (legado)

    const obj = {};
    console.log(obj.__proto__); // Object.prototype

    .prototype
    - é das funções construtoras
    - define o que vai ser herdado pelos objetos criados com new

    function Pessoa() {}
    console.log(Pessoa.prototype); // {} constructor: ƒ Pessoa()[[Prototype]]: Object

    resumo direto:
    obj.__proto__ → de onde o objeto herda
    Funcao.prototype → o que será herdado pelos objetos

## 3 - O que define qual prototype um objeto aponta
    o que define qual prototype o objeto aponta é como ele foi criado.

    1. objeto literal {}
        const obj = {};

        equivale a:

        const obj = new Object();

        então:

        obj.__proto__ === Object.prototype
    
    2. com new
        const p1 = new Pessoa();

        o js faz:

        const p1 = {};
        p1.__proto__ = Pessoa.prototype;

        👉 então:

        p1.__proto__ === Pessoa.prototype
    
    3. com Object.create
        const p1 = Object.create(pai);

        o js faz:

        const p1 = {};
        p1.__proto__ = pai;

        👉 aqui tu escolhe manualmente
    
    4. arrays
        const arr = [];

        equivale a:

        const arr = new Array();

        então:

        arr.__proto__ === Array.prototype
    
    5. funções
        function teste() {}

        funções são objetos, então:

        teste.__proto__ === Function.prototype

# ________________________________________________________________________________

# . 3 - Prototype chain 
## 1 - Como o JS resolve propriedades
    quando é acessado:

    obj.chave
    O js faz isso:
    - procura no próprio objeto
    - se não achar -> vai para o prototype
    - se não achar -> vai para o prototype do prototype
    - até chegar no topo (null)

    obj
    ↓
    Object.prototype
    ↓
    null

## 2 - Exemplo prático
    const arr = [1, 2, 3];

    arr.map();
    arr.filter();

    Esses métodos vem de Array.prototype

## 3 - Hierarquia completa
    Array → Array.prototype → Object.prototype → null
    Function → Function.prototype → Object.prototype → null
    Object → Object.prototype → null

# ________________________________________________________________________________

# . 4 - Criando herança com prototype 
## 1 - Exemplo clássico
    function Pessoa (nome) {
        this.nome = nome;
    }

    Pessoa.prototype.falar = function () {
        console.log("Meu nome é " + this.nome);
    }

    const p1 = new Pessoa("Nícolas");

    p1.falar();

## 2 - Por que economiza memória
    - p1 tem nome
    - falar() não está dentro de p1
    - então ele procura em:

    p1 -> Pessoa.prototype -> Object.prototype

    E encontra.

    Se fosse feito assim:
    function Pessoa (nome) {
        this.nome = nome;
        this.falar() {
            console.log(this.nome);
        }
    }

    cada objeto teria sua própria função (ruim)

    Com prototype, todos compartilham a mesma função.

# ________________________________________________________________________________

# . 5 - Prototype de funções
## 1 - Toda função tem .prototype
    funções também são objetos:

    function teste () {}

    console.log(teste.prototype);

    -> toda função construtora tem um .prototype

    no devtools aparece algo tipo:

    {}
    constructor: ƒ teste()
    [[Prototype]]: Object

## 2 - Como o .prototype é criado
    quando uma função é criada, o js faz por baixo:
    teste.prototype = {
        constructor: teste
    }

    ou seja, é um objeto normal
    tem uma propriedade constructor apontando pra função

    e o [[Prototype]]: Object ali?

    isso quer dizer:
    teste.prototype.__proto__ === Object.prototype // true

    ou seja:
    teste.prototype
    ↓
    Object.prototype
    ↓
    null

# ________________________________________________________________________________

# . 6 - New
## 1 - O que new faz internamente
    quando é feito:
    const p1 = new Pessoa ("Nícolas");

    O js faz isso internamente:
    const p1 = {};

    p1.__proto__ = Pessoa.prototype; 

    Pessoa.call(p1, "Nícolas")

## 2 - Por que vincula o prototype
    é assim que a herança funciona.

    o new conecta:

    o objeto criado (p1)
    com o "modelo" (Pessoa.prototype)

    isso permite:

    p1.falar();

    mesmo "falar" não estando no p1.

## 3 - O que é esse call?
    isso aqui:

    Pessoa.call(p1, "Nícolas");

    significa:

    executa a função Pessoa, usando p1 como this

    equivalente a:

    this.nome = "Nícolas";

    mas aplicado dentro do p1.

## 4 - Exemplo avançado
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

    const produto = new Produto('Prod. Generico', 10)
    const camiseta = new Camiseta('Regata', 57.5, 'algodão')
    
    console.log(produto);
    console.log(camiseta);

# ________________________________________________________________________________

# . 7 - Object.create (herança direta)
## 1 - Usando Object.create
    const pessoa = {
        falar() {
            console.log("oi");
        }
    }

    const p1 = Object.create(pessoa); 

    p1.falar();

    p1 não tem falar, mas herda do objeto pessoa

## 2 - O que Object.create() faz
    ele faz basicamente isso:

    const p1 = {};
    p1.__proto__ = pessoa;

    ou seja:

    cria um objeto vazio
    liga ele diretamente ao objeto que foi passado

# ________________________________________________________________________________

# . 8 - Shadowing (Sobrescrita)
## 1 - Propriedade no filho sobrescreve a do pai
    se o filho tem a propriedade:
    const pai = {
        nome: "pai"
    };

    const filho = Object.create(pai);

    filho.nome = "filho";

    console.log(filho.nome); // filho
    -> ele não usa do pai, pois encontrou primeiro nele mesmo.

# ________________________________________________________________________________

# . 9 - Como o JS resolve propriedades 
## 1 - Ordem de busca
    Quando é feito:
    obj.x
    JS faz:
    1 - obj
    2 - obj.__proto__
    3 - obj.__proto__.__proto__ 
    4 - null
