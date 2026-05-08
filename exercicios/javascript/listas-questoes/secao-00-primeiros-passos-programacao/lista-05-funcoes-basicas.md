# Lista 05 - Funcoes basicas

> Lista para praticar funcoes pequenas, reutilizaveis e com responsabilidade clara.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Criando funcoes simples](#secao-1---criando-funcoes-simples)
- [Secao 2 - Funcoes com regra de negocio](#secao-2---funcoes-com-regra-de-negocio)
- [Secao 3 - Escopo e organizacao](#secao-3---escopo-e-organizacao)
- [Secao 4 - Desafio de fixacao](#secao-4---desafio-de-fixacao)

## Conteudos praticados

- Declaracao de funcao.
- Parametros.
- Retorno.
- Escopo local.
- Reutilizacao de regra.
- Separacao entre calcular e exibir.

## Secao 1 - Criando funcoes simples

### Exercicio 1 - Saudacao

Conteudo:
- Funcao declarada.
- Parametro.
- Retorno de string.

Enunciado:
Crie uma funcao `criarSaudacao(nome)` que retorna a frase `Ola, <nome>`.

Requisitos:
- A funcao deve receber o nome por parametro.
- A funcao deve retornar a frase, nao imprimir direto.
- O `console.log` deve ficar fora da funcao.

Dica:
- Retornar deixa a funcao mais reutilizavel.

### Exercicio 2 - Dobro de um numero

Conteudo:
- Parametro numerico.
- Retorno.
- Multiplicacao.

Enunciado:
Crie uma funcao que recebe um numero e retorna o dobro dele.

Requisitos:
- Nome sugerido: `calcularDobro`.
- Testar com pelo menos tres valores.

Dica:
- Evite criar variaveis desnecessarias se o retorno for simples.

## Secao 2 - Funcoes com regra de negocio

### Exercicio 3 - Calcular media

Conteudo:
- Multiplos parametros.
- Operadores.
- Retorno.

Enunciado:
Crie uma funcao `calcularMedia(nota1, nota2, nota3)` que retorna a media das tres notas.

Requisitos:
- Receber as tres notas por parametro.
- Retornar a media.
- Exibir o resultado fora da funcao.

Dica:
- A funcao nao precisa saber de onde as notas vieram.

### Exercicio 4 - Verificar aprovacao

Conteudo:
- Funcao.
- Condicional.
- Boolean.

Enunciado:
Crie uma funcao `estaAprovado(media)` que retorna `true` se a media for maior ou igual a 7.

Requisitos:
- Retornar boolean.
- Nao retornar texto.
- Testar usando o resultado da funcao `calcularMedia`.

Dica:
- Separar calculo de validacao e uma pratica real de manutencao.

### Exercicio 5 - Calcular desconto

Conteudo:
- Funcao pura.
- Percentual.
- Retorno.

Enunciado:
Crie uma funcao que recebe preco e percentual de desconto, retornando o preco final.

Requisitos:
- Nao alterar variaveis externas.
- Retornar apenas o valor final.
- Testar com percentuais diferentes.

Dica:
- Uma funcao pura depende apenas dos parametros.

## Secao 3 - Escopo e organizacao

### Exercicio 6 - Variavel local

Conteudo:
- Escopo de funcao.
- Variavel local.

Enunciado:
Crie uma funcao que calcula o total de uma compra. Dentro dela, crie uma variavel local para armazenar o total.

Requisitos:
- A variavel de total deve existir dentro da funcao.
- Tente acessar essa variavel fora da funcao e observe o erro.
- Explique com um comentario curto o motivo.

Dica:
- Variavel criada dentro da funcao nao existe fora dela.

### Exercicio 7 - Funcao reutilizavel

Conteudo:
- Reutilizacao.
- Parametros.

Enunciado:
Crie uma funcao `formatarProduto(nome, preco)` que retorna uma string com o nome e preco do produto.

Requisitos:
- Testar com pelo menos tres produtos.
- Nao repetir a montagem da string em varios lugares.

Dica:
- Se a regra se repete, pode virar funcao.

## Secao 4 - Desafio de fixacao

### Exercicio 8 - Fechamento de pedido

Conteudo:
- Funcoes pequenas.
- Composicao.
- Condicional.

Enunciado:
Crie um fluxo simples de pedido usando funcoes para calcular subtotal, aplicar desconto e validar se o pedido pode ser aprovado.

Requisitos:
- `calcularSubtotal(preco, quantidade)`.
- `aplicarDesconto(valor, percentual)`.
- `pedidoEhValido(total)`.
- Exibir o resultado final no console.

Dica:
- Cada funcao deve fazer uma coisa so.
