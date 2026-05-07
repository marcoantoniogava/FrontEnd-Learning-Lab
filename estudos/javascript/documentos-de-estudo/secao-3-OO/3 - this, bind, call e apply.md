    ```js
# . 1 - contexto (this) -  a base de tudo
## 1 - O que é this?
    antes de entender bind, call e apply, é necessário dominar o this.

    o valor do this no JavaScript consiste em uma referência dinâmica
    ou seja, representa o contexto de execução -> quem está chamando a função.

## 2 - Exemplo simples
    const usuario = {
        nome: "Nícolas",
        saudacao() {
            return `Olá ${this.nome}`;
        }
    }

    console.log(usuario.saudacao()); // Olá Nícolas

    aqui o this aponta para o objeto usuario, pois é ele quem está chamando a função saudacao.

## 3 - Problema clássico
    const fn = usuario.saudacao;

    console.log(fn()); // undefined

    -> perdeu o contexto, pois fn não é mais chamado pelo objeto usuario, e sim de forma independente.

# __________________________________________________________________________________________________________________

# . 2 - bind() - fixa o this
## 1 - O que é bind?
    o método bind() retorna uma nova função, com o this fixo para o valor passado como argumento.

## 2 - Exemplo básico
    const fn = usuario.saudacao.bind(usuario);

    console.log(fn()); // Olá Nícolas

    -> aqui, mesmo que fn seja chamada de forma independente, o this dentro dela ainda aponta para o objeto usuario, graças ao bind.

## 3 - Como funciona internamente
    bind é uma função que está dentro de Function.prototype, ou seja, todas as funções herdam esse método.
    ela cria uma nova função que, quando chamada, tem seu this definido para o valor passado como argumento,
    e também pode receber argumentos adicionais que serão passados para a função original.

## 4 - bind com parâmetros
    function saudacao(saudacaoInicial) {
        return `${saudacaoInicial} ${this.nome}`;
    }

    const usuario = { nome: "Nícolas" };

    const fn = saudacao.bind(usuario, "Olá");

    console.log(fn()); // Olá Nícolas

## 5 - Quando usar bind
    - callbacks (eventos, timers)
        exemplo:
            const button = document.querySelector("button");

            button.addEventListener("click", usuario.saudacao.bind(usuario));

    - passar funções sem perder o contexto
        exemplo:
            const fn = usuario.saudacao.bind(usuario);
            setTimeout(fn, 1000); // Olá Nícolas

    - métodos de classes
        exemplo:
            class Usuario {
                constructor(nome) {
                    this.nome = nome;
                }

                saudacao() {
                    return `Olá ${this.nome}`;
                }
            }

            const u = new Usuario("João");
            const fn = u.saudacao.bind(u);

            console.log(fn()); // Olá João

# __________________________________________________________________________________________________________________

# . 3 - call() 
## 1 - O que é call?
    executa a função imediatamente, com o this definido para o valor passado como argumento.
    
    sintaxe:
        funcao.call(contexto, arg1, arg2, ...)

## 2 - Exemplo básico
    function saudacao() {
        return `Olá, ${this.nome}`;
    }

    const usuario = { nome: "Nícolas" };

    console.log(saudacao.call(usuario)); // Olá, Nícolas

## 3 - call com parâmetros
    function saudacao(msg) {
        return `${msg} ${this.nome}`;
    }

    const usuario = { nome: "Nícolas" };

    console.log(saudacao.call(usuario, "Olá")); // Olá Nícolas

## 4 - Usando call como bind
    para usá-la como se fosse bind, basta criar uma função anônima:
    
    const fn = function () {
        return saudacao.call(usuario);
    };

    console.log(fn()); // Olá, Nícolas

# __________________________________________________________________________________________________________________

# . 4 - apply()
## 1 - O que é apply?
    igual ao call, mas os argumentos são passados como um array.

    sintaxe:
        funcao.apply(contexto, [arg1, arg2, ...])

## 2 - Exemplo básico
    function saudacao(msg) {
        return `${msg} ${this.nome}`;
    }

    const usuario = { nome: "Nícolas" };

    console.log(saudacao.apply(usuario, ["Olá"])); // Olá Nícolas

## 3 - Caso de uso: Math.max
    é útil quando você tem um array de argumentos e quer passar para uma função que não aceita arrays, como Math.max:
    
    const numeros = [5, 6, 2, 3, 7];

    console.log(Math.max.apply(null, numeros)); // 7
    
    -> nesse exemplo, o this não é relevante para Math.max, então passamos null como contexto.
    - o apply é uma forma de "desempacotar" o array e passar os elementos como argumentos individuais para a função.
    - no Math.max, recebemos os números como argumentos separados, em vez de um array, 
    o que é necessário para o funcionamento correto da função.

# __________________________________________________________________________________________________________________

# . 5 - Diferenças práticas
## 1 - Quando cada um executa
    - bind retorna uma nova função, enquanto call e apply executam a função imediatamente.

## 2 - Uso de bind
    - bind é útil para criar funções com o this fixo, enquanto call e apply são úteis para invocar funções com um contexto específico.

## 3 - Uso de call e apply
    - call e apply são mais diretos para chamadas únicas, enquanto bind é melhor para situações onde a função será reutilizada.

## 4 - Performance
    - em termos de desempenho, call e apply podem ser mais rápidos para chamadas únicas, enquanto bind pode ser mais eficiente 
    para funções reutilizadas, pois evita a criação de múltiplas funções anônimas.

# __________________________________________________________________________________________________________________

# . 6 - Casos reais de uso
## 1 - bind em componentes de UI
    em componentes de UI, para garantir que o this dentro dos métodos aponte para a instância correta.

## 2 - call e apply em herança
    para herança de objetos, ou para usar métodos de um objeto em outro sem precisar criar uma nova função.

## 3 - Exemplo de herança com call
    function Pessoa(nome) {
        this.nome = nome;
    }

    function Funcionario(nome, cargo) {
        Pessoa.call(this, nome); // chama o construtor de Pessoa para inicializar o nome, o JavaScript reconhece a chamada da função Pessoa e define o this para a instância de Funcionario, permitindo que o nome seja corretamente atribuído.
        this.cargo = cargo;
    }

    Funcionario.prototype.constructor = Funcionario; // corrige a referência do construtor

    const f = new Funcionario("Nícolas", "Desenvolvedor");

    console.log(f.nome); // Nícolas
    console.log(f.cargo); // Desenvolvedor

## 4 - Exemplo de bind em um componente de UI
    class Button {
        constructor(label) {
            this.label = label;
            this.handleClick = this.handleClick.bind(this); 
            // na prática nesse caso, o bind é necessário para garantir que o this dentro do método handleClick aponte para a instância correta do Button, mesmo quando o método é usado como callback em um evento de clique. Sem o bind, o this dentro de handleClick poderia se referir ao elemento DOM que disparou o evento, em vez da instância do Button, resultando em comportamento inesperado.
            // isso não aconteceria nesse caso, porque o método handleClick já está sendo definido como uma função de instância, mas em outros casos, como quando o método é definido no prototype, o bind seria essencial para manter o contexto correto.
        }

        handleClick() {
            console.log(`Button ${this.label} clicked`);
        }
    }

    const btn = new Button("Submit");
    document.querySelector("button").addEventListener("click", btn.handleClick);

## 5 - Exemplo de call para usar método de um objeto em outro
    const obj1 = {
        nome: "Nícolas",
        saudacao() {
            return `Olá, ${this.nome}`;
        }
    };

    const obj2 = { nome: "João" };

    console.log(obj1.saudacao.call(obj2)); // Olá, João

exemplo de uso de apply para encontrar o máximo em um array:
    const numeros = [5, 6, 2, 3, 7];

    console.log(Math.max.apply(null, numeros)); // 7
    -> aqui, o apply é usado para passar o array de números como argumentos individuais para Math.max, permitindo encontrar o valor máximo corretamente.

# __________________________________________________________________________________________________________________