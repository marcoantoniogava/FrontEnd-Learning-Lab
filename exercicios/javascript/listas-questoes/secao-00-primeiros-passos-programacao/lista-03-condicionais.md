# Lista 03 - Condicionais

> Exercicios para transformar regras de negocio simples em decisoes claras no codigo.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Condicoes simples](#secao-1---condicoes-simples)
- [Secao 2 - Operadores logicos](#secao-2---operadores-logicos)
- [Secao 3 - Regras de negocio](#secao-3---regras-de-negocio)
- [Secao 4 - Desafio de fixacao](#secao-4---desafio-de-fixacao)

## Conteudos praticados

- `if`, `else if` e `else`.
- Operadores de comparacao.
- Operadores logicos `&&`, `||` e `!`.
- Regras de negocio simples.
- Validacao de dados.

## Secao 1 - Condicoes simples

### Exercicio 1 - Aprovacao por nota

Conteudo:
- `if` e `else`.
- Comparacao numerica.

Enunciado:
Crie uma variavel `nota`. Se a nota for maior ou igual a 7, mostre "Aprovado". Caso contrario, mostre "Reprovado".

Requisitos:
- Usar `if` e `else`.
- Testar pelo menos dois valores diferentes.

Dica:
- Troque o valor da nota manualmente para testar os dois caminhos.

### Exercicio 2 - Nivel de acesso

Conteudo:
- `else if`.
- Comparacao de strings.

Enunciado:
Crie uma variavel `perfil` que pode ser `admin`, `editor` ou `visitante`. Mostre uma mensagem diferente para cada perfil.

Requisitos:
- Tratar os tres perfis.
- Ter uma mensagem padrao para perfil desconhecido.

Dica:
- O `else` final serve para entradas inesperadas.

## Secao 2 - Operadores logicos

### Exercicio 3 - Login simples

Conteudo:
- `&&`.
- Validacao combinada.

Enunciado:
Crie variaveis para email e senha. Valide se o email e igual a `admin@teste.com` e a senha e igual a `123456`.

Requisitos:
- Usar `&&`.
- Exibir "Login autorizado" ou "Login recusado".

Dica:
- As duas condicoes precisam ser verdadeiras ao mesmo tempo.

### Exercicio 4 - Cupom de desconto

Conteudo:
- `||`.
- Regras alternativas.

Enunciado:
Crie uma regra onde o cliente recebe desconto se tiver cupom valido ou se o valor da compra for maior que 300.

Requisitos:
- Criar variaveis `temCupom` e `valorCompra`.
- Usar `||`.
- Exibir se o desconto foi aplicado.

Dica:
- Basta uma das condicoes ser verdadeira.

### Exercicio 5 - Bloqueio de usuario

Conteudo:
- `!`.
- Boolean.

Enunciado:
Crie uma variavel `usuarioAtivo`. Se o usuario nao estiver ativo, mostre "Usuario bloqueado".

Requisitos:
- Usar o operador `!`.
- Tratar usuario ativo e inativo.

Dica:
- `!usuarioAtivo` significa "usuario nao ativo".

## Secao 3 - Regras de negocio

### Exercicio 6 - Frete gratis

Conteudo:
- Condicional.
- Comparacao.
- Mensagem de negocio.

Enunciado:
Uma loja oferece frete gratis para compras acima de 150. Crie a regra e exiba o resultado.

Requisitos:
- Criar uma variavel com o valor da compra.
- Se passar de 150, mostrar "Frete gratis".
- Caso contrario, mostrar quanto falta para ganhar frete gratis.

Dica:
- Para saber quanto falta, subtraia o valor atual de 150.

### Exercicio 7 - Classificacao de idade

Conteudo:
- `else if`.
- Faixas de valor.

Enunciado:
Classifique uma pessoa como crianca, adolescente, adulto ou idoso com base na idade.

Requisitos:
- Crianca: ate 12.
- Adolescente: 13 ate 17.
- Adulto: 18 ate 59.
- Idoso: 60 ou mais.

Dica:
- A ordem das condicoes importa.

## Secao 4 - Desafio de fixacao

### Exercicio 8 - Validacao de pedido

Conteudo:
- Condicionais.
- Operadores logicos.
- Regra de negocio.

Enunciado:
Crie uma validacao de pedido. O pedido so pode ser aprovado se o cliente estiver ativo, o valor for maior que zero e houver estoque.

Requisitos:
- Criar variaveis `clienteAtivo`, `valorPedido` e `temEstoque`.
- Aprovar apenas se todas as regras forem verdadeiras.
- Exibir o motivo quando o pedido for recusado.

Dica:
- Primeiro valide cada erro separado; depois monte a regra final.
