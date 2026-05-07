    ```js
# . 1. O que é um objeto?
## 1 - Conceito
    uma estrutura que armazena dados organizados em pares de chaves e valor.
    ele representa "coisas do mundo real" no código.

## 2 - Exemplo simples
    const pessoa = {
        nome: "Nícolas",
        idade: 20,
        status: true
    }    
    
# ________________________________________________________________________________

# . 2. Como criar objetos
## 1 - Literal (mais comum)
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2022
    };

    ✔ O que acontece aqui
        Cria um objeto direto
        Já aponta para Object.prototype
        Simples e rápido
        Mais usado em 90% dos casos reais

    ✔ Quando usar
        objetos simples
        DTOs (dados)
        configs
        estruturas fixas

    ✔ Vantagens
        legível
        rápido de escrever
        padrão da indústria

    ❌ Limitação
        não escala bem para múltiplas instâncias com lógica compartilhada (sem organização extra)

## 2 - Usando new Object()
    const carro = new Object();
    carro.marca = "Toyota";
    carro.modelo = "Corolla";

    ✔ O que acontece
        É literalmente isso:

        const pessoa = {};

    ✔ Diferença real
        Nenhuma prática.

    ❌ Problema
        verboso
        sem vantagem
        menos legível

    ✔ Quando usar
        praticamente nunca (só legado ou teoria)

## 3 - Função construtora
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    const p1 = new Pessoa("Nícolas", 20);

    🧠 O que o new faz aqui?

    Ele executa:

    const p1 = {};
    p1.__proto__ = Pessoa.prototype;
    Pessoa.call(p1, "Nícolas");
    return p1;
    
    ✔ Características
        cria múltiplas instâncias
        permite "herança via prototype"
        base do JS antigo (pré-ES6)

    ✔ Quando usar
        código legado
        libs antigas
        quando quer controle explícito de prototype

    ❌ Problemas
        fácil esquecer new → bug silencioso
        menos legível que classes
        mais "baixo nível"
        
        Exemplo de bug clássico:
        const p1 = Pessoa("Nícolas"); // sem new

        👉 this vira undefined (ou global no modo antigo)

## 4 - ES6 Class (mais moderno)
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    Pessoa.prototype.falar = function () {};

    const p1 = new Pessoa("Nícolas", 20);

    O que realmente é uma classe no JS?
        👉 !!! IMPORTANTE -> SÓ açúcar sintático (syntactic sugar)

    ✔ Vantagens
        mais legível
        padrão moderno
        mais seguro (obriga new)
        estrutura mais clara

    ✔ Quando usar
        praticamente sempre em projetos modernos
        Angular, React, Node (em partes OO)
        modelos de domínio

    ❌ Limitações
        não é "real OOP clássico"
        continua sendo prototype por baixo
        não resolve tudo (JS não é Java/C#)

🧠 Comparação direta
Forma	        Uso atual	    Performance     Legibilidade	Escalabilidade
{} literal	    ⭐⭐⭐⭐⭐	⭐⭐⭐⭐⭐    ⭐⭐⭐⭐⭐	  ⭐⭐
new Object()	❌	          ⭐⭐⭐⭐      ⭐	           ⭐
function + new	⚠️legado       ⭐⭐⭐⭐      ⭐⭐            ⭐⭐⭐⭐
class	        ⭐⭐⭐⭐⭐	⭐⭐⭐⭐	  ⭐⭐⭐⭐⭐	   ⭐⭐⭐⭐⭐

# ________________________________________________________________________________

# . 3. Acessando propriedades
## 1 - Notação ponto
    pessoa.nome

## 2 - Notação colchetes
    pessoa["idade"];

    - útil quando a chave é dinâmica

    const chave = "nome";
    pessoa[chave];

# ________________________________________________________________________________

# . 4. Modificar objetos
## 1 - Alterando propriedades
    pessoa.idade = 21;
    pessoa.status = false;

# ________________________________________________________________________________

# . 5. Adicionar propriedades
## 1 - Adicionando novas propriedades
    pessoa.profissao = "dev";

# ________________________________________________________________________________

# . 6. Remover propriedades
## 1 - Usando delete
    delete pessoa.status;

# ________________________________________________________________________________

# . 7. Métodos (funções dentro de objetos)
## 1 - Forma clássica
    const pessoa = {
        nome: "Nícolas",
        falar: function () {
            console.log("Olá!");
        }
    };

    pessoa.falar();

## 2 - Forma moderna
    const pessoa = {
        nome: "Nícolas",
        falar() {
            console.log("Olá!");
        }
    };

# ________________________________________________________________________________

# . 8. this dentro de objetos
## 1 - Referência ao objeto
    this refere-se ao próprio objeto.

    const pessoa = {
        nome: "Nícolas",
        falar() {
            console.log(this.nome);
        }
    };

    pessoa.falar(); // Nícolas

# ________________________________________________________________________________

# . 9. Objetos aninhados
## 1 - Objetos dentro de objetos
    const usuario = {
        nome: "Nícolas",
        endereco: {
            cidade: "Criciúma",
            estado: "SC"
        }
    };

    console.log(usuario.endereco.cidade);

# ________________________________________________________________________________

# . 10. Arrays dentro de objetos
## 1 - Estrutura mista
    const aluno = {
        nome: "Nícolas",
        notas: [10, 8, 9]
    };

# ________________________________________________________________________________

# . 11. Desestruturação
## 1 - Extraindo valores do objeto
    const pessoa = {
        nome: "Nícolas",
        idade: 20
    };

    const { nome, idade } = pessoa;

    console.log(nome);

# ________________________________________________________________________________

# . 12. Spread operator
## 1 - Copiando e expandindo objetos
    const p1 = {
        nome: "Nícolas",
        idade: 20
    };

    const p2 = {
        ...p1,
        cidade: "Criciúma"
    };

# ________________________________________________________________________________

# . 13. Object methods úteis
## 1 - Object.keys()
    retorna as chaves

    Object.keys(pessoa);

## 2 - Object.values()
    retorna os valores

    Object.values(pessoa);

## 3 - Object.entries()
    retorna pares [chave, valor]

    Object.entries(pessoa);

## 4 - Object.freeze()
    trava o objeto, tornando impossível modificá-lo

## 5 - Object.getOwnPropertyDescriptor()
    pega todas as propriedades do atributo

    Object.getOwnPropertyDescriptor(obj, 'atributo');

## 6 - Object.setPrototypeOf()
    seta o prototype do objB igual ao objeto objA

    Object.setPrototypeOf(objB, objA)

## 7 - Object.getPrototypeOf()
    pega o prototype do objeto

    Object.getPrototypeOf(objB)

## 8 - Object.defineProperty() e Object.defineProperties()
    function Produto(nome, preco, estoque) {
        Object.defineProperty(this, 'estoque', {
            enumerable: true, // mostra a chave
            configurable: true // configurável
            get: function () {
                return estoque;
            },
            set: function (valor) {
                if (typeof valor !== "number") {
                    console.log("informe um número");
                    return;
                }

                estoque = valor;
            } 
        });

        Object.defineProperties(this, {
            nome: {
                enumerable: true, // mostra a chave
                value: nome, // valor
                writable: true, // pode alterar
                configurable: true // configurável
            },
            preco: {
                enumerable: true, // mostra a chave
                value: preco, // valor
                writable: true, // pode alterar
                configurable: true // configurável
            },
        });
    }

    const p1 = new Produto("camisa", 10.99, 5);
    console.log(p1);

# ________________________________________________________________________________

# . 14. Comparação de objetos
## 1 - Comparação por referência
    Objetos não são comparados por valor, mas por referência.

    const a = { nome: "A" };
    const b = { nome: "A" };

    console.log(a === b); // false

    Mesmo conteúdo, mas objetos diferentes na memória.

# ________________________________________________________________________________

# . 15. Cópia de objetos
## 1 - Cópia rasa (shallow copy)
    const novo = { ...pessoa };

    ou:

    const novo = Object.assign({}, pessoa);

## 2 - Cópia profunda (deep copy)
    const novo = JSON.parse(JSON.stringify(pessoa));

    limitações existem (funções, datas etc.)

## 3 - Limitações do Shadowing e Prototype Lookup
    1. Performance imprevisível

    Quando você acessa:

    obj.x

    JS pode precisar subir:

    obj → proto → proto → proto → null

    - quanto maior a cadeia, mais lenta a busca

    2. Debug difícil

    Exemplo:

    const pai = { nome: "pai" };
    const filho = Object.create(pai);

    console.log(filho.nome);

    Você vê "pai", mas:

    - não existe em filho

    Isso confunde bastante iniciantes e até dev experiente em debug.

    3. Sobrescrita acidental (shadowing bug)
    const pai = {
        idade: 50
    };

    const filho = Object.create(pai);

    filho.idade = 20;

    Agora:

    filho.idade → 20
    pai.idade → 50

    - parece ok, mas pode quebrar lógica compartilhada

    4. Alteração do prototype afeta tudo
    Object.prototype.teste = 123;

    - isso "vaza" para TODOS os objetos

    Isso é perigoso e considerado má prática.

    5. Inconsistência de estado

    Como propriedades podem vir de níveis diferentes:

    obj.a // próprio
    obj.b // herdado
    obj.c // herdado de outro nível

    - fica difícil garantir "onde está a verdade do dado"

    6. Problema em loops
    for (let key in obj) {
        console.log(key);
    }

    - ele percorre também propriedades do prototype

    (precisa de hasOwnProperty)

# ________________________________________________________________________________

# . 16. Propriedades dinâmicas
## 1 - Chaves dinâmicas
    const chave = "idade";

    const pessoa = {
        nome: "Nícolas",
        [chave]: 20
    };

# ________________________________________________________________________________

# . 17. Objetos são dinâmicos
## 1 - Mudanças em runtime
    Você pode mudar tudo em runtime:

    const obj = {};

    obj.a = 1;
    obj.b = 2;
    delete obj.a;

# ________________________________________________________________________________

# . 18. Quando usar objetos
## 1 - Casos de uso
    Use objetos quando precisar representar:

    - entidades (usuário, produto, carro)
    - agrupamento de dados
    - configurações
    - estruturas complexas

# ________________________________________________________________________________

# . 19. Objetos primitivos (wrapper)
## 1 - Wrapper objects
    const n = new Number(123);

    tipo: "object"
    contém o valor primitivo dentro dele.

    console.log(n + 1); // 124

    o JS faz conversão automática (auto-unboxing), 
    pegando esse valor primitido dentro do objeto

## 2 - Comparação
    const a = new Number(123);
    const b = new Number(123);

    a === b // false
    - são dois objetos diferentes na memória

## 3 - ❗ NUNCA UTILIZAR new Number, new String, new Boolean
    apenas para referência, quando fazemos algo como
    "abc".toUpperCase();

    o JS cria um wrapper temporário
    para permitir o uso de métodos, e depois descarta
    new String("abc").toUpperCase();

# ________________________________________________________________________________
