# Lista 01 - Arrays, objetos e closures

> Lista para evoluir manipulacao de dados em memoria usando arrays, objetos, funcoes e Promises simuladas.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Arrays e objetos avancados](#secao-1---arrays-e-objetos-avancados)
- [Secao 2 - Funcoes e closures](#secao-2---funcoes-e-closures)
- [Secao 3 - Assincronismo simulado](#secao-3---assincronismo-simulado)

## Conteudos praticados

- `map`, `filter`, `reduce`, `find`, `some`, `every` e `flatMap`.
- Agrupamento de dados.
- Clonagem de objetos.
- Destructuring.
- Closures.
- `Promise.all`.
- `Promise.race`.

## Secao 1 - Arrays e objetos avancados

### Exercicio 1 - Usuarios agrupados por cidade

Conteudo:
- `filter`.
- `reduce`.
- Agrupamento.

Enunciado:
Dado um array de usuarios, filtre apenas os maiores de idade, agrupe por cidade e retorne um objeto no formato `{ cidade: [usuarios] }`.

Requisitos:
- Cada usuario deve ter nome, idade e cidade.
- Usar `filter` para remover menores de idade.
- Usar `reduce` para agrupar.
- Retornar um objeto final.

Dica:
- Primeiro resolva o filtro; depois faca o agrupamento.

### Exercicio 2 - Produtos por categoria

Conteudo:
- Array de objetos.
- `reduce`.
- Transformacao de dados.

Enunciado:
Dado um array de produtos `{ nome, preco, categoria }`, gere informacoes resumidas por categoria.

Requisitos:
- Criar um objeto agrupando produtos por categoria.
- Calcular o total de preco por categoria.
- Retornar uma lista apenas com nomes dos produtos que custam mais de 50.

Dica:
- Voce pode criar tres resultados separados para deixar o raciocinio mais claro.

## Secao 2 - Funcoes e closures

### Exercicio 3 - Contador com closure

Conteudo:
- Closure.
- Estado privado.
- Funcao retornando funcao.

Enunciado:
Crie uma funcao `contador(inicial)` que retorna outra funcao. Cada chamada da funcao retornada deve incrementar e retornar o valor atual.

Requisitos:
- Criar dois contadores diferentes.
- Provar que cada contador mantem seu proprio estado.
- Nao usar variavel global.

Dica:
- A variavel `inicial` continua acessivel pela funcao interna.

### Exercicio 4 - Pipeline funcional de numeros

Conteudo:
- `map`.
- `filter`.
- `reduce`.
- Encadeamento.

Enunciado:
Usando apenas `map`, `filter` e `reduce`, processe o array `[1,2,3,4,5,6,7,8,9,10]`.

Requisitos:
- Filtrar apenas os pares.
- Multiplicar cada par por 3.
- Somar o resultado final.

Dica:
- A ordem mais simples e filtrar, transformar e reduzir.

## Secao 3 - Assincronismo simulado

### Exercicio 5 - Fetch simulado

Conteudo:
- Promise.
- Tempo aleatorio.
- `Promise.all`.
- `Promise.race`.

Enunciado:
Crie uma funcao `simulaFetch(url)` que retorna uma Promise resolvida depois de 1 a 3 segundos com a string `dados da url: <url>`.

Requisitos:
- Criar cinco URLs diferentes.
- Executar todas e aguardar com `Promise.all`.
- Fazer outro teste retornando assim que a primeira terminar com `Promise.race`.

Dica:
- Use `Math.random()` para gerar o tempo de resposta.
