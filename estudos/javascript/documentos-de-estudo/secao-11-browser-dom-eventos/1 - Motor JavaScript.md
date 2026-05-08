    ```js
Motor do JavaScript é o que pega teu código e faz ele virar execução real na máquina,
sem isso, JS é só um texto, um arquivo, uma string, não é nada mais do que isso.

Exemplos famosos:
- V8 (Google Chrome, Node.js)
- SpiderMonkey (Mozilla Firefox)
- JavaScriptCore (Safari)
- Chakra (Microsoft Edge)

# . 1 - Como o motor funciona
Pipeline simplificado:
    Código JS -> Parser -> AST -> Compilação -> Execução

## 1 - Parsing (leitura do código)
    O motor lê o código e cria uma estrutura de dados chamada AST (Abstract Syntax Tree).
    A AST (Abstract Syntax Tree) é uma representação hierárquica do código, onde cada nó representa uma 
    construção do código (função, variável, expressão, etc).

    Exemplo:
        let x = 10;

    Vira algo tipo:
        VariableDeclaration
        ├── Identifier (x)
        └── Literal (10)

    Isso significa que o motor entendeu que você declarou uma variável chamada x e atribuiu a ela o valor 10.
    - O JS não executa texto direto.
    - ele executa uma representação estruturada.

## 2 - Compilação JIT (Just-In-Time)
    O motor compila o código para uma linguagem de máquina que o computador pode entender.
    A compilação JIT é feita em tempo de execução, ou seja, enquanto o código está sendo executado.
    Isso permite otimizações dinâmicas, como inlining de funções, eliminação de código morto, etc.

    No V8 por exemplo, o código é compilado para bytecode e depois otimizado para código nativo.
    - Ignition -> interpretador de bytecode
    - TurboFan -> otimizador de código nativo

    O motor monitora o código em execução e, se detectar que uma função é chamada muitas vezes, ele a otimiza para melhorar o desempenho.
    Isso é o que torna o JavaScript tão rápido, mesmo sendo uma linguagem interpretada.

    Tradução prática: 
    - código roda rápido no começo.
    - fica mais rápido ainda com o tempo, conforme o motor otimiza o código que é mais utilizado.

## 3 - Execução
    Aqui entra os conceitos de:
    - Call Stack (pilha de chamadas)
    - Heap (memória para alocação de objetos)
    - Event Loop (laço de eventos)

    Estruturas internas importantes
    - Call Stack: onde as funções são empilhadas e executadas.
        Controla quem está executando o quê e quando.

        function a() {
            b();
        };

        function b() {
            console.log("b");
        };

        a();

        Stack:
        a()
        b()
        console.log("b")
        Regra: LIFO (Last In, First Out) -> a última função que entrou é a primeira a sair da pilha, ou seja, 
        a função que está sendo executada no momento é a que está no topo da pilha.

    - Heap: onde ficam os objetos alocados dinamicamente, como:
        - Objetos
        - Funções
        - Arrays
        - Qualquer estrutura de dados que precise de alocação dinâmica

        const obj = { nome: "Nícolas" };
        - obj fica no heap,
        - a variável guarda uma referência.

    - Garbage Collector: 
        O motor automaticamente limpa memória não usada.

        Exemplo:
            let obj = { nome: "Nícolas" };
            obj = null; // o objeto original fica sem referência e pode ser coletado pelo GC.

            isso impacta:
            - performance (menos memória usada)
            - vazamento de memória (quando são mantidas referências sem querer)

    - Event Loop:
        O JavaScript é single-threaded, ou seja, ele tem apenas uma linha de execução, 
        mas ele pode lidar com operações assíncronas através do event loop.

        Fluxo:
            Call stack + Web APIs + Callback Queue + Event Loop

        Exemplo:
            console.log("Início");

            setTimeout(() => {
                console.log("Callback");
            }, 0);

            console.log("Fim");

            Saída:
            Início
            Fim
            Callback

            Porque:
            - setTimeout vai pra fila
            - só executa quando stack estiver vazio

# ____________________________________________________________________________________________________________

# . 2 - Otimizações do motor
## 1 - Inline Caching
    Motor tenta prever tipos:

    obj.nome

    se sempre for string -> otimiza acesso.

## 2 - Hidden Classes (V8)
    Objetos com mesma estrutura são otimizados.

    // bom
    const a = { x: 1, y: 2};
    const b = { x: 3, y: 4};

    // ruim
    const a = { x: 1};
    a.y = 2;

    Porque o motor tem que criar uma nova estrutura para a variável a, já que ela mudou.

## 3 - De-optimization
    Se o tipo da variável for alterada:

    let x = 10; // otimizado como number
    x = "texto"; // desotimizado, pois mudou para string

    Motor perde otimizações anteriores e tem que reavaliar o código, o que pode impactar performance.

# ____________________________________________________________________________________________________________

# . 3 - Interpretação vs Compilação
    Interpretação, de maneira resumida, é quando o código é lido e executado linha por linha, 
    sem passar por um processo de compilação prévia. 
    
    Já a compilação é quando o código é transformado em uma linguagem de máquina antes de ser executado.
    
    O motor do JavaScript é uma mistura de ambos, usando técnicas de compilação JIT para otimizar o código em tempo de execução,
    mas ainda interpretando o código inicialmente para criar a AST e entender a estrutura do programa.

# ____________________________________________________________________________________________________________

# . 4 - Boas práticas para performance:
## 1 - Mantenha o tipo das variáveis consistente:
    Ruim:
        let x = 10; // otimizado como number
        x = "texto"; // desotimizado, pois mudou para string
        x = true; // desotimizado novamente, pois mudou para boolean

    bom:
        let x = 10; // otimizado como number
        x = 20; // continua otimizado como number

## 2 - Evite criar objetos com estruturas diferentes:
    Ruim:
        const a = { x: 1};
        a.y = 2; // nova estrutura

    bom:
        const a = { x: 1, y: 2}; // mesma estrutura

## 3 - Evite recriar funções dentro de loops
    Ruim:
        for (let i = 0; i < 1000; i++) {
            const func = function() { return i; }; // nova função a cada iteração
        }

    bom:
        const func = function(i) { return i; }; // função única
        for (let i = 0; i < 1000; i++) {
            func(i); // reutiliza a mesma função
        }

## 4 - Evite acessar objeto profundo várias vezes:
    Ruim:
        console.log(usuario.endereco.cidade);
        console.log(usuario.endereco.cidade);
        console.log(usuario.endereco.cidade);

    bom:
        const cidade = usuario.endereco.cidade; // acesso único
        console.log(cidade);
        console.log(cidade);
        console.log(cidade);

    reduz custo de lookup.

## 5 - Prefira loops simples em código crítico:
    Ruim:
        arr.forEach(item => {
            // código complexo
        });

    bom:
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            // código complexo
        }

    o for tradicional é mais fácil de otimizar em código crítico, embora forEach seja mais legível na maioria dos casos.
    na prática, a diferença de performance é mínima, então prefira legibilidade, mas em casos extremos, o for tradicional pode ser melhor.

## 6 - Não misture tipos em arrays:
    Ruim:
        const arr = [1, "texto", true, { nome: "obj" }];

    bom:
        const numeros = [1, 2, 3];
        const textos = ["a", "b", "c"];
        const booleanos = [true, false];
        const objetos = [{ nome: "obj1" }, { nome: "obj2" }];

    isso ajuda o motor a otimizar o acesso aos elementos do array.

## 7 - Entenda o event loop para evitar bugs:
    setTimeout(() => {
        console.log("Callback");
    }, 0);

    console.log("Início");
    console.log("Fim");

    Promise.resolve().then(() => {
        console.log("Promise");
    });

    Saída:
    Início
    Fim
    Promise
    Callback

    Isso acontece porque as Promises (microtasks) têm prioridade sobre os callbacks do setTimeout (macrotask), mesmo com delay 0.

## 8 - Evite recursão profunda sem controle:
    function fatorial(n) {
        if (n === 0) return 1;
        return n * fatorial(n - 1);
    }

    fatorial(10000); // pode causar stack overflow

    Prefira soluções iterativas.
    Exemplo iterativo:
        function fatorial(n) {
            let resultado = 1;
            for (let i = 1; i <= n; i++) {
                resultado *= i;
            }
            return resultado;
        }

## 9 - Cache de resultado (memoization simples)
    ruim: 
        function soma (a, b) {
            return a + b;
        }

    bom:
        const cache = {};

        function soma (a, b) {
            const chave = `${a},${b}`;

            if (cache[chave]) {
                return cache[chave];
            }

            const resultado = a + b;

            cache[chave] = resultado;

            return resultado;
        }

## 10 - Evite criar objetos desnecessários
    ruim:
        function criarUsuario(nome) {
            return { nome };
        }

        const user1 = criarUsuario("Nícolas");
        const user2 = criarUsuario("João");

    bom:
        const usuarioProto = { falar() { console.log(`Olá, meu nome é ${this.nome}`); } };

        function criarUsuario(nome) {
            const usuario = Object.create(usuarioProto);
            usuario.nome = nome;
            return usuario;
        }

        const user1 = criarUsuario("Nícolas");
        const user2 = criarUsuario("João");

    isso reduz a quantidade de objetos criados e permite compartilhar métodos através do protótipo.
