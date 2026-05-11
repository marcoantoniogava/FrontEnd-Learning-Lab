# Lista 01 - Estrutura de dados, imutabilidade e Promises

> Lista de problemas intermediarios para treinar transformacao de dados, contexto do `this`, prototype e funcoes de controle.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Estrutura de dados](#secao-1---estrutura-de-dados)
- [Secao 2 - Imutabilidade e contexto](#secao-2---imutabilidade-e-contexto)
- [Secao 3 - Prototype e heranca](#secao-3---prototype-e-heranca)
- [Secao 4 - Promises e funcoes de alto nivel](#secao-4---promises-e-funcoes-de-alto-nivel)
- [Secao 5 - Desafio de organizacao](#secao-5---desafio-de-organizacao)

## Conteudos praticados

- `reduce`.
- Imutabilidade.
- `this` e `bind`.
- Prototype e heranca sem `class`.
- Deduplicacao manual.
- Encadeamento de Promises.
- Retry.
- Debounce.
- Agrupamento de dados.

## Secao 1 - Estrutura de dados

### Exercicio 1 - Total de pedidos por cliente

Conteudo:
- `reduce`.
- Agrupamento.
- Objeto acumulador.

Enunciado:
Dado o array abaixo, retorne um objeto agrupado por cliente com o total gasto por cada um.

```js
const pedidos = [
  { cliente: "joao", total: 100 },
  { cliente: "maria", total: 200 },
  { cliente: "joao", total: 50 }
];
```

Resultado esperado:

```js
{
  joao: 150,
  maria: 200
}
```

Requisitos:
- Usar obrigatoriamente `reduce`.
- Nao alterar o array original.

Dica:
- O acumulador pode comecar como `{}`.

### Exercicio 2 - Remover duplicados sem Set

Conteudo:
- Array.
- Busca.
- Deduplicacao.

Enunciado:
Dado o array abaixo, retorne uma nova lista sem valores duplicados.

```js
const numeros = [1, 2, 2, 3, 4, 4, 5];
```

Requisitos:
- Nao usar `Set`.
- Retornar um novo array.
- Manter a ordem original dos primeiros valores encontrados.

Dica:
- Use `includes` para verificar se o item ja foi adicionado.

## Secao 2 - Imutabilidade e contexto

### Exercicio 3 - Atualizar usuario sem mutacao

Conteudo:
- Spread operator.
- Imutabilidade.
- Funcao pura.

Enunciado:
Crie uma funcao `atualizarUsuario(usuario, novosDados)` que retorna um novo objeto atualizado sem alterar o objeto original.

```js
const user = { nome: "joao", idade: 20 };
const atualizado = atualizarUsuario(user, { idade: 25 });
```

Requisitos:
- Nao alterar `user`.
- Retornar um novo objeto.
- Manter os campos antigos que nao foram atualizados.

Dica:
- Em sistemas reais, mutacao indevida gera bugs dificeis de rastrear.

### Exercicio 4 - Corrigir contexto com bind

Conteudo:
- `this`.
- Perda de contexto.
- `bind`.

Enunciado:
Explique por que o codigo abaixo retorna errado e corrija usando `bind`.

```js
const usuario = {
  nome: "joao",
  saudacao() {
    return `ola, ${this.nome}`;
  }
};

const fn = usuario.saudacao;

console.log(fn());
```

Requisitos:
- Mostrar o problema.
- Corrigir com `bind`.
- Explicar em comentario curto por que o contexto foi perdido.

Dica:
- Quando voce copia o metodo para outra variavel, ele perde o objeto dono.

## Secao 3 - Prototype e heranca

### Exercicio 5 - Heranca sem class

Conteudo:
- Funcao construtora.
- Prototype.
- Heranca.

Enunciado:
Crie `Pessoa(nome)` e `Funcionario(nome, salario)`. Faca `Funcionario` herdar de `Pessoa` sem usar `class`.

Requisitos:
- `Pessoa` deve ter um metodo no prototype.
- `Funcionario` deve herdar de `Pessoa`.
- `Funcionario` deve ter o metodo `mostrarSalario`.
- Testar com uma instancia.

Dica:
- Use `Object.create` para montar a cadeia de prototype.

## Secao 4 - Promises e funcoes de alto nivel

### Exercicio 6 - Encadeamento de Promises

Conteudo:
- Promise.
- Encadeamento.
- `.catch`.

Enunciado:
Crie tres funcoes que retornam Promise: `buscarUsuario`, `buscarPedidos` e `calcularTotal`. Encadeie as chamadas para buscar usuario, buscar pedidos dele e calcular o total gasto.

Requisitos:
- Usar `.then()` encadeado.
- Tratar erro com `.catch`.
- Simular erro em alguma etapa.

Dica:
- Cada etapa deve receber o resultado da etapa anterior.

### Exercicio 7 - Executar com retry

Conteudo:
- Funcao de alto nivel.
- Promise.
- Retry.

Enunciado:
Implemente `executarComRetry(fn, tentativas)`.

Requisitos:
- `fn` deve ser uma funcao que retorna Promise.
- Se resolver, retornar o resultado imediatamente.
- Se rejeitar, tentar novamente ate atingir o limite.
- Se todas falharem, rejeitar com o ultimo erro.
- Chamar `fn` novamente a cada tentativa.
- Nao usar variaveis globais.

Dica:
- O retry deve controlar tentativas, nao reaproveitar a mesma Promise.

### Exercicio 8 - Debounce

Conteudo:
- Funcao de alto nivel.
- Timer.
- Controle de execucao.

Enunciado:
Implemente uma funcao `debounce(fn, delay)` que retorna uma nova funcao controlada.

Requisitos:
- A funcao retornada pode ser chamada varias vezes.
- Cancelar o timer anterior se uma nova chamada acontecer antes do delay.
- Executar `fn` apenas quando pararem de chamar por X ms.

Dica:
- Guarde o id do timer em uma variavel no escopo da funcao `debounce`.

## Secao 5 - Desafio de organizacao

### Exercicio 9 - Separar maiores e menores

Conteudo:
- Array de objetos.
- Agrupamento.
- Regra de negocio.

Enunciado:
Crie uma funcao que recebe usuarios e retorna um objeto separando menores e maiores de idade.

Entrada:

```js
[
  { nome: "joao", idade: 17 },
  { nome: "maria", idade: 22 },
  { nome: "pedro", idade: 17 }
]
```

Saida esperada:

```js
{
  menores: [],
  maiores: []
}
```

Requisitos:
- Retornar um novo objeto.
- Nao alterar o array original.
- Separar usando idade maior ou igual a 18.

Dica:
- Esse tipo de agrupamento aparece muito em telas administrativas.
