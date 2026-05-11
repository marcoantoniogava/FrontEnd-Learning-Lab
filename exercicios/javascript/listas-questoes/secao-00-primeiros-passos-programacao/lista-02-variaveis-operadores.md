# Lista 02 - Variaveis e operadores

> Primeira lista focada em entender como valores sao armazenados, alterados, comparados e usados em calculos.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Declaracao de variaveis](#secao-1---declaracao-de-variaveis)
- [Secao 2 - Operadores aritmeticos](#secao-2---operadores-aritmeticos)
- [Secao 3 - Comparacoes](#secao-3---comparacoes)
- [Secao 4 - Desafio de fixacao](#secao-4---desafio-de-fixacao)

## Conteudos praticados

- `let`, `const` e escolha correta de declaracao.
- Tipos primitivos.
- Operadores aritmeticos.
- Operadores de atribuicao.
- Conversao simples de tipos.
- Comparacoes basicas.

## Secao 1 - Declaracao de variaveis

### Exercicio 1 - Cadastro simples

Conteudo:
- `const`.
- Strings.
- Numeros.
- Boolean.

Enunciado:
Crie variaveis para representar um usuario com nome, email, idade e status ativo.

Requisitos:
- Usar `const` para valores que nao serao alterados.
- Exibir o objeto final no console.
- Usar tipos coerentes para cada dado.

Dica:
- `ativo` deve ser um boolean, nao uma string.

### Exercicio 2 - Atualizacao de pontos

Conteudo:
- `let`.
- Operador de atribuicao.
- Incremento.

Enunciado:
Crie uma variavel `pontos` iniciando em 0. Depois simule tres ganhos de pontos e exiba o resultado final.

Requisitos:
- Usar `let`.
- Atualizar a mesma variavel mais de uma vez.
- Exibir o total final.

Dica:
- Use `+=` para deixar a intencao mais clara.

## Secao 2 - Operadores aritmeticos

### Exercicio 3 - Calculo de salario

Conteudo:
- Multiplicacao.
- Soma.
- Subtracao.
- Percentual.

Enunciado:
Crie variaveis para salario base, bonus e desconto. Calcule o salario final.

Requisitos:
- O bonus deve ser somado ao salario.
- O desconto deve ser subtraido.
- Exibir salario base, bonus, desconto e salario final.

Dica:
- Nomeie bem as variaveis para nao misturar entrada com resultado.

### Exercicio 4 - Preco com desconto

Conteudo:
- Porcentagem.
- Divisao.
- Subtracao.

Enunciado:
Crie uma variavel `preco` e uma variavel `descontoPercentual`. Calcule o preco final com desconto.

Requisitos:
- Calcular o valor do desconto.
- Calcular o preco final.
- Exibir os dois valores.

Dica:
- `10%` em conta vira `10 / 100`.

## Secao 3 - Comparacoes

### Exercicio 5 - Validacao de estoque

Conteudo:
- Operadores relacionais.
- Boolean.

Enunciado:
Crie variaveis para estoque atual e quantidade solicitada. Verifique se existe estoque suficiente.

Requisitos:
- Criar uma variavel booleana com o resultado.
- Exibir `true` ou `false`.
- Depois exibir uma frase explicando o resultado.

Dica:
- Estoque suficiente significa `estoque >= quantidade`.

### Exercicio 6 - Comparacao estrita

Conteudo:
- `==` versus `===`.
- Tipos.
- Conversao implicita.

Enunciado:
Compare os valores `10` e `"10"` usando `==` e `===`. Explique no console a diferenca dos resultados.

Requisitos:
- Fazer as duas comparacoes.
- Exibir o resultado de cada uma.
- Escrever uma frase curta explicando por que o ideal e usar `===`.

Dica:
- O problema nao e so o valor, e tambem o tipo.

## Secao 4 - Desafio de fixacao

### Exercicio 7 - Carrinho simples

Conteudo:
- Variaveis.
- Operadores.
- Percentual.
- Comparacao.

Enunciado:
Monte o calculo de um carrinho com subtotal, frete e desconto. Depois verifique se o total final ficou acima de 200.

Requisitos:
- Criar `subtotal`, `frete` e `descontoPercentual`.
- Calcular o valor do desconto.
- Calcular o total final.
- Criar uma variavel booleana indicando se a compra e alta.

Dica:
- Faca o calculo por etapas para facilitar o debug.
