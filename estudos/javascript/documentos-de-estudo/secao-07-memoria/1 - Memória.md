    ```js
Memória no JavaScript

JavaScript é uma linguagem GERENCIADA, ou seja, o desenvolvedor não controla diretamente a alocação e a liberação de memória.

A engine (como v8) é responsável por:

- alocar memória
- gerenciar o uso
- liberar memória automaticamente (garbage collector)

# ____________________________________________________________

# . 1 - Estrutura da memória
## 1 - Stack (Pilha)
    responsável pela execução do código.

    Armazena:  
        - variáveis primitivas
        - referências para objetos
        - contexto de execução das funções

    Características:
        - muito rápida
        - tamanho limitado
        - organização LIFO (Last In, First Out)

## 2 - Heap (Montante)
    responsável pelo armazenamento de dados complexos.
    heap é uma área de memória não estruturada.

    Armazena:
        - objetos
        - arrays
        - funções
        - closures

    Características:
        - maior que a Stack
        - mais lenta
        - gerenciada pelo garbage collector

## 3 - Resumo
    - stack = execução
    - heap  = dados

# ____________________________________________________________

# . 2 - Tipos de dado e memória
## 1 - Tipos primitivos
    number, string, boolean, null, undefined, symbol, bigint

    exemplo:
    let a = 10;
    let b = a;

    b = 20;

    console.log(a); // 10

    -> Cada variável possui seu próprio valor na memória

## 2 - Tipos por referência
    exemplo: 
    let obj1 = { nome: "Nícolas" };
    let obj2 = obj1;

    obj2.nome = "joao";

    console.log(obj1.nome) // "joao"

    stack:
        obj1 → endereço 0x123
        obj2 → endereço 0x123

    heap:
        0x123 → { nome: "joao" }

    -> stack guarda o endereço
    -> heap guarda o objeto real
    -> múltiplas variáveis podem apontar para o mesmo objeto

# ____________________________________________________________

# . 3 - Comparação de valores
## 1 - Primitivos
    10 === 10 // true

## 2 - Objetos
    {} === {} // false
    
    Motivo: são posições diferentes na memória

# ____________________________________________________________

# . 4 - Mutabilidade
## 1 - Imutáveis (primitivos)
    let nome = "nícolas";
    nome[0] = "x";

    console.log(nome); // "nicolas"

## 2 - Mútaveis (objetos)
    let user = { nome: "nícolas" } 
    user.nome = "joao";

# ____________________________________________________________

# . 5 - Passagem de valores
## 1 - Por valor (primitivos)
    function alterar(x) {
        x = 20;
    }

    let a = 10
    alterar(a);

    console.log(a) // 10

## 2 - Por referência (objetos)
    function alterar(obj) {
        obj.nome = "joao";
    }

    let user = { nome: "nicolas" };
    alterar(user);

    console.log(user.nome); // "joao"

# ____________________________________________________________

# . 6 - Call Stack (Pilha de execução)
## 1 - Controlando chamadas de funções
    responsável por controlar chamadas de funções
    
    exemplo:
        function a() {
            b();
        }

        function b() {
            c();
        }

        function c() {
            console.log("oi");
        }

        a();

## 2 - Ordem de execução
    execução:
    1 - global
    2 - a();
    3 - b();
    4 - c();

    após execução:
    funções são removidas da stack
    
    o que acontece na stack:
        [global]
        [a]
        [b]
        [c]

        quando c termina:

        [global]
        [a]
        [b]

        vai desempilhando até voltar pro global

# ____________________________________________________________

# . 7 - Stack Overflow
## 1 - Ultrapassar limite da stack
    Ocorre quando a stack ultrapassa seu limite.

    exemplo:
        function loop() {
            loop();
        }

        loop();

        erro: Maximum call stack size exceeded

# ____________________________________________________________

# . 8 - Heap na prática
## 1 - Heap e referências
    exemplo:
        let user = { nome: "nícolas" }
    
        stack:
        - user -> referência
        heap:
        - objeto armazenado

# ____________________________________________________________

# . 9 - Garbage Collector (GC)
## 1 - Liberação automática de memória
    responsável por liberar memória automaticamente
    
    conceito principal: Reachability
    - Um valor é mantido na memória se for alcançável

## 2 - Exemplo prático
    exemplo:
    let obj = { nome: "nícolas" };
    obj = null;

    o objeto antigo perde a referência e pode ser removido.

# ____________________________________________________________

# . 10 - Memory leaks
## 1 - Variáveis globais
    function criar() {
        dado = {pesado: true}; // sem let/const
    }

## 2 - Estruturas acumulativas
    let lista = [];

    function adicionar() {
        lista.push(new Array(100000));
    }

## 3 - Closures
    function criar () {
        let grande = new Array(1000000);

        return function() {
            return "ok";
        }
    }

## 4 - Event listeners
    element.addEventListener("click", () => {
        console.log("clicou");
    });

    -> se não removidos, permanecem na memória.

# ____________________________________________________________

# . 11 - Shallow Copy vs Deep Copy
## 1 - Shallow (cópia rasa)
    const a = {
        nome: "nícolas",
        endereco: {
            cidade: "x"
        }
    };

    const b = { ...a };
    
    b.endereco.cidade = "y";

    console.log(a.endereco.cidade); // "y"

    limitações:
    - não copia níveis internos
    - mantém referências

## 2 - Deep Copy com JSON
    const b = JSON.parse(JSON.stringify(a));

    limitações:
    - não copia métodos
    - perde objetos especiais (Date, Map, etc)

## 3 - structuredClone (moderno)
    const copia = structuredClone(obj);

    vantagens
    - faz deep copy real
    - suporta:
        - objetos
        - arrays
        - Date
        - Map
        - Set
        - ArrayBuffer
    - não compartilha referência

    limitações
    não copia:
    - funções
    - DOM
    - não preserva protótipos customizados (em alguns casos)

    EXEMPLO:
    const original = {
        data: new Date(),
        lista: [1, 2, 3]
    };

    const copia = structuredClone(original);

    console.log(copia);

## 4 - Quando usar cada abordagem
    🟢 caso 1 — objeto simples
    const copia = { ...obj };
    - rápido e suficiente

    🟡 caso 2 — objeto com níveis internos
    const copia = structuredClone(obj);
    - padrão atual recomendado

    🔴 caso 3 — precisa preservar comportamento (funções, classes)
    aí você precisa de clonagem manual

## 5 - Clone customizado
    function deepClone(obj) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }

        if (obj instanceof Date) {
            return new Date(obj);
        }

        if (Array.isArray(obj)) {
            return obj.map(item => deepClone(item));
        }

        const novo = {};

        for (let chave in obj) {
            if (obj.hasOwnProperty(chave)) {
            novo[chave] = deepClone(obj[chave]);
            }
        }

        return novo;
    }

    vantagens
    - controle total
    - você decide o que copiar
    - pode preservar regras de negócio
    
    desvantagens
    - mais código
    - manutenção
    - risco de bug

## 6 - Arquitetura sem cópias excessivas
    em sistemas grandes, a solução NÃO é sair clonando tudo
    - o correto é evitar mutação

    usar imutabilidade
        const novoUser = {
            ...user,
            nome: "joao"
        };
    
    ou libs (em projetos modernos)
        immer
        lodash.cloneDeep
    
    erro clássico
        const config = defaultConfig;
        config.debug = true;

        - isso NÃO é cópia, isso é referência
    
    se você precisa de cópia profunda toda hora → arquitetura está errada
    prefira:
    - dados imutáveis
    - funções puras
    - controle de estado

# ____________________________________________________________

# . 12 - Closures
## 1 - Mantendo acesso ao escopo externo
    Closures mantêm acesso ao escopo externo mesmo após execução.

    function contador () {
        let i = 0;

        return function () {
            i++;
            return i;
        };
    }

# ____________________________________________________________

# . 13 - Event Loop 
## 1 - Operações assíncronas e memória
    operações assíncronas também utilizam memória até serem executadas.

## 2 - Stack + async
    function a() {
        setTimeout(() => {
            console.log("oi");
        }, 1000);
    }

    a();

    stack:
        - executa a
        - agenda callback
        - limpa stack

    depois:
        - callback entra na stack novamente

    isso é o event loop trabalhando

# ____________________________________________________________

# . 14 - Boas práticas
## 1 - Prevenção de memory leaks
    - sempre usar let/const
    - evitar variáveis globais
    - remover event listeners quando não usados
    - evitar mutações inesperadas
    - limpar estruturas grandes quando não necessárias
    - entender quando usar cópia profunda

# ____________________________________________________________
