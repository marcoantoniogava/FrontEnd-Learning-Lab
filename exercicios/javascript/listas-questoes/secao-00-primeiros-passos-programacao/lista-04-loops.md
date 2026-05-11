# Lista 04 - Loops

> Lista para treinar repeticao, percorrer arrays e resolver problemas que dependem de acumuladores.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Repeticao com contador](#secao-1---repeticao-com-contador)
- [Secao 2 - Percorrendo arrays](#secao-2---percorrendo-arrays)
- [Secao 3 - While e controle de fluxo](#secao-3---while-e-controle-de-fluxo)
- [Secao 4 - Desafio de fixacao](#secao-4---desafio-de-fixacao)

## Conteudos praticados

- `for`.
- `while`.
- Percorrer arrays.
- Acumuladores.
- Contadores.
- Controle de fluxo com `break` e `continue`.

## Secao 1 - Repeticao com contador

### Exercicio 1 - Contagem progressiva

Conteudo:
- `for`.
- Incremento.

Enunciado:
Imprima no console os numeros de 1 a 20.

Requisitos:
- Usar `for`.
- Nao escrever os numeros manualmente.

Dica:
- O contador deve aumentar de 1 em 1.

### Exercicio 2 - Contagem regressiva

Conteudo:
- `for`.
- Decremento.

Enunciado:
Imprima no console os numeros de 10 ate 1 e depois mostre "Fim".

Requisitos:
- Usar `for`.
- O contador deve diminuir.

Dica:
- Comece em 10 e pare quando chegar em 1.

## Secao 2 - Percorrendo arrays

### Exercicio 3 - Lista de nomes

Conteudo:
- Arrays.
- Loop com indice.

Enunciado:
Crie um array com cinco nomes e imprima cada nome no console.

Requisitos:
- Usar `for`.
- Acessar cada item pelo indice.

Dica:
- Use `nomes.length` como limite do loop.

### Exercicio 4 - Soma de numeros

Conteudo:
- Array.
- Acumulador.
- Soma.

Enunciado:
Dado um array de numeros, calcule a soma total usando loop.

Requisitos:
- Criar uma variavel acumuladora iniciando em 0.
- Percorrer todos os numeros.
- Exibir o total final.

Dica:
- A cada volta do loop, some o numero atual no acumulador.

### Exercicio 5 - Maior numero do array

Conteudo:
- Array.
- Comparacao.
- Variavel de controle.

Enunciado:
Crie uma funcao que recebe um array de numeros e retorna o maior numero sem usar `Math.max`.

Requisitos:
- Usar loop.
- Comparar item por item.
- Retornar o maior valor encontrado.

Dica:
- Comece assumindo que o primeiro item e o maior.

## Secao 3 - While e controle de fluxo

### Exercicio 6 - Tentativas de login

Conteudo:
- `while`.
- Contador.
- Condicao de parada.

Enunciado:
Simule uma tentativa de login com no maximo 3 tentativas. A cada tentativa, incremente o contador.

Requisitos:
- Usar `while`.
- Parar quando chegar em 3 tentativas.
- Exibir quantas tentativas foram feitas.

Dica:
- Cuidado para nao criar loop infinito.

### Exercicio 7 - Ignorar numeros impares

Conteudo:
- `continue`.
- Operador `%`.

Enunciado:
Imprima apenas os numeros pares de 1 a 20 usando `continue`.

Requisitos:
- Usar loop.
- Usar `continue` quando o numero for impar.

Dica:
- Um numero impar tem resto diferente de zero na divisao por 2.

### Exercicio 8 - Parar ao encontrar item

Conteudo:
- `break`.
- Busca simples.

Enunciado:
Crie um array de produtos e pare o loop quando encontrar o produto "teclado".

Requisitos:
- Usar `break`.
- Exibir uma mensagem quando encontrar.

Dica:
- Depois que encontrou, nao existe motivo para continuar o loop.

## Secao 4 - Desafio de fixacao

### Exercicio 9 - Relatorio de vendas

Conteudo:
- Array de objetos.
- Loop.
- Acumulador.
- Condicional.

Enunciado:
Dado um array de vendas com produto, valor e status, calcule o total apenas das vendas com status `aprovada`.

Requisitos:
- Criar pelo menos cinco vendas.
- Usar loop.
- Somar apenas vendas aprovadas.
- Exibir o total final.

Dica:
- Dentro do loop, use `if` antes de somar.
