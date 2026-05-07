    ```js
# . 1 - o que é um array?
## 1 - Conceito básico
    array é uma estrutura que guarda vários valores em uma única variável, organizados por índice.

    const nomes = ["nicolas", "joao", "maria"];

## 2 - Regras importantes
    - começa no índice 0
    - acessa com colchetes []
    - console.log(nomes[0]); // "nicolas"

# ____________________________________________________________________________________________________________

# . 2 - criando arrays
## 1 - Array vazio
    const lista1 = [];

## 2 - Array com valores
    const lista2 = [1, 2, 3];

## 3 - Usando new Array (não recomendado)
    const lista3 = new Array(10);

# ____________________________________________________________________________________________________________

# . 3 - tamanho do array
## 1 - Propriedade length
    const arr = [10, 20, 30];

    console.log(arr.length); // 3

# ____________________________________________________________________________________________________________

# . 4 - adicionar elementos
## 1 - Adicionar no final
    const arr = [1, 2];
    arr.push(3);

## 2 - Adicionar no início
    const arr = [1, 2];
    arr.unshift(0);

# ____________________________________________________________________________________________________________

# . 5 - remover elementos
## 1 - Remover do final
    const arr = [1, 2, 3];
    arr.pop();

## 2 - Remover do início
    const arr = [1, 2, 3];
    arr.shift();

# ____________________________________________________________________________________________________________

# . 6 - buscar elementos
## 1 - Verificar se existe
    const arr = ["a", "b", "c"];
    arr.includes("b"); // true

## 2 - Encontrar índice
    const arr = ["a", "b", "c"];
    arr.indexOf("b"); // 1

# ____________________________________________________________________________________________________________

# . 7 - percorrer array (LOOP)
## 1 - For clássico (menos usado hoje)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

## 2 - forEach (mais usado)
    arr.forEach(function(item) {
        console.log(item);
    });

    ou

    arr.forEach(item => console.log(item));

# ____________________________________________________________________________________________________________

# . 8 - métodos IMPORTANTES
## 1 - map → transformar
    const numeros = [1, 2, 3];

    const dobrados = numeros.map(n => n * 2);

    console.log(dobrados); // [2, 4, 6]

    retorna novo array

## 2 - filter → filtrar
    const numeros = [1, 2, 3, 4];

    const pares = numeros.filter(n => n % 2 === 0);

    console.log(pares); // [2, 4]

## 3 - find → encontrar 1 item
    const usuarios = [
        { nome: "nico" },
        { nome: "joao" }
    ];

    const user = usuarios.find(u => u.nome === "nico");

    console.log(user);

## 4 - some → algum passa?
    arr.some(n => n > 10);

## 5 - every → todos passam?
    arr.every(n => n > 0);

## 6 - reduce → o mais poderoso
    const nums = [1, 2, 3];

    const soma = nums.reduce((acc, n) => acc + n, 0);

    console.log(soma); // 6

    usado pra:
    - somar
    - agrupar
    - transformar estrutura

# ____________________________________________________________________________________________________________

# . 9 - slice vs splice 
## 1 - slice (NÃO altera original)
    const arr = [1, 2, 3, 4];

    const novo = arr.slice(1, 3);

    console.log(novo); // [2, 3]

## 2 - splice (ALTERA o array)
    const arr = [1, 2, 3];

    arr.splice(1, 1); // remove 1 item a partir do índice 1

    console.log(arr); // [1, 3]

# ____________________________________________________________________________________________________________

# . 10 - arrays de objetos
## 1 - Estrutura básica
    const usuarios = [
        { nome: "nico", idade: 20 },
        { nome: "joao", idade: 30 }
    ];

## 2 - Operações com filter
    const maiores = usuarios.filter(u => u.idade >= 21);

# ____________________________________________________________________________________________________________

# . 11 - referência vs cópia 
## 1 - Problema de referência
    const a = [1, 2];
    const b = a;

    b.push(3);

    console.log(a); // [1, 2, 3]

    isso acontece porque array é referência

## 2 - Copiar corretamente
    const copia = [...a];

# ____________________________________________________________________________________________________________

# . 12 - destructuring
## 1 - Desempacotando arrays
    const arr = [10, 20];

    const [a, b] = arr;

    console.log(a); // 10

# ____________________________________________________________________________________________________________

# . 13 - spread operator
## 1 - Unindo arrays
    const a = [1, 2];
    const b = [3, 4];

    const c = [...a, ...b];

# ____________________________________________________________________________________________________________

# . 14 - arrays + async
## 1 - O erro clássico
    const ids = [1, 2, 3];

    ids.forEach(async (id) => {
        await buscarUsuario(id);
    });

    forEach não espera async

## 2 - Com Promise.all (paralelo - mais usado)
    const ids = [1, 2, 3];

    const promessas = ids.map(id => buscarUsuario(id));

    const usuarios = await Promise.all(promessas);

    roda tudo ao mesmo tempo → mais rápido

## 3 - Com for...of (sequencial)
    const usuarios = [];

    for (const id of ids) {
        const user = await buscarUsuario(id);
        usuarios.push(user);
    }

    usa quando depende da ordem ou de um resultado anterior

## 4 - Regra prática
    pode rodar junto? → Promise.all
    precisa ordem? → for...of

# ____________________________________________________________________________________________________________

# . 15 - imutabilidade
## 1 - Princípio geral (Angular/React)
    na prática, você não deve mutar array diretamente

    ❌ errado:
    arr.push(4);

    ✅ certo:
    const novo = [...arr, 4];

## 2 - Atualizar item dentro do array
    const usuarios = [
        { id: 1, nome: "nico" },
        { id: 2, nome: "joao" }
    ];

    const atualizado = usuarios.map(u =>
        u.id === 1 ? { ...u, nome: "novo nome" } : u
    );

    isso aqui é MUITO usado em front

# ____________________________________________________________________________________________________________

# . 16 - performance
## 1 - Evitar múltiplos loops
    ❌ ruim (vários loops):
    arr.filter(...).map(...).reduce(...);

    ✅ melhor (1 loop só):
    const resultado = arr.reduce((acc, item) => {
        if (item.ativo) {
            acc.push(item.valor * 2);
        }
        return acc;
    }, []);

    menos iteração → mais performático

# ____________________________________________________________________________________________________________

# . 17 - estruturação de dados
## 1 - Transformar array em objeto (indexação rápida)
    const usuarios = [
        { id: 1, nome: "nico" },
        { id: 2, nome: "joao" }
    ];

    const mapa = usuarios.reduce((acc, u) => {
        acc[u.id] = u;
        return acc;
    }, {});

    agora você acessa em O(1):

    mapa[1];

# ____________________________________________________________________________________________________________

# . 18 - flat e flatMap
## 1 - flat (array dentro de array)
    const arr = [[1, 2], [3, 4]];

    const flat = arr.flat(); // [1, 2, 3, 4]
    
    o flat tem um parâmetro opcional pra controlar a profundidade:
    const arr = [1, [2, [3, 4]]];
    const flat = arr.flat(2); // [1, 2, 3, 4]


## 2 - flatMap (map + flatten)
    const frases = ["oi mundo", "js é bom"];

    const palavras = frases.flatMap(f => f.split(" "));
    
    flatmap é muito usado pra transformar e achatar em um passo só.

# ____________________________________________________________________________________________________________

# . 19 - deduplicar array
## 1 - Removendo duplicatas
    const arr = [1, 1, 2, 3];

    const unico = [...new Set(arr)];

    esse set é uma estrutura que só aceita valores únicos, então ele automaticamente remove duplicatas.

# ____________________________________________________________________________________________________________

# . 20 - ordenação (sort)
## 1 - Cuidado: sort muta o array
    const nums = [10, 2, 5];

    nums.sort((a, b) => a - b);

## 2 - Ordenar objetos
    usuarios.sort((a, b) => a.idade - b.idade);

# ____________________________________________________________________________________________________________

# . 21 - exemplo REAL 
## 1 - Cenário: API de pedidos
    imagina API de pedidos:

    const pedidos = [
        { id: 1, cliente: "nico", valor: 100, ativo: true },
        { id: 2, cliente: "joao", valor: 200, ativo: false },
        { id: 3, cliente: "nico", valor: 50, ativo: true }
    ];

    objetivo:
    - só ativos
    - agrupar por cliente
    - somar valores

## 2 - Solução profissional
    const resultado = pedidos
        .filter(p => p.ativo)
        .reduce((acc, p) => {
            if (!acc[p.cliente]) {
                acc[p.cliente] = 0;
            }
            acc[p.cliente] += p.valor;
            return acc;
        }, {});

    saída:
    {
        nico: 150
    }

# ____________________________________________________________________________________________________________
