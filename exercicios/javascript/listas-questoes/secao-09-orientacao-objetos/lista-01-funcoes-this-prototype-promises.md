# Lista 01 - Funcoes, this, prototype e Promises

> Lista intermediaria para consolidar base de JavaScript antes de entrar em problemas mais completos.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Expressoes e funcoes](#secao-1---expressoes-e-funcoes)
- [Secao 2 - Objetos, this e prototype](#secao-2---objetos-this-e-prototype)
- [Secao 3 - Arrays e comparacoes](#secao-3---arrays-e-comparacoes)
- [Secao 4 - Promises](#secao-4---promises)
- [Secao 5 - Desafio final](#secao-5---desafio-final)

## Conteudos praticados

- Return direto.
- Funcoes construtoras.
- `this`.
- Membros publicos e privados.
- Prototype.
- Arrays.
- Comparacao de objetos.
- Promise basica.
- Implementacao manual de comportamento parecido com `Promise.any`.

## Secao 1 - Expressoes e funcoes

### Exercicio 1 - Refatorar `ehPar`

Conteudo:
- Expressao booleana.
- Return direto.

Enunciado:
Refatore a funcao abaixo usando apenas expressao, sem `if`.

```js
function ehPar(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

Requisitos:
- Remover o `if`.
- Retornar diretamente uma expressao booleana.

Dica:
- A comparacao `n % 2 === 0` ja retorna `true` ou `false`.

## Secao 2 - Objetos, this e prototype

### Exercicio 2 - Funcao construtora Carro

Conteudo:
- Funcao construtora.
- `this`.
- Metodo de instancia.

Enunciado:
Crie uma funcao construtora `Carro` com `marca`, `velocidade` e um metodo `acelerar()` que soma 10 na velocidade.

Requisitos:
- Criar dois carros diferentes.
- Chamar `acelerar()` em cada um.
- Mostrar que cada carro mantem sua propria velocidade.

Dica:
- Dentro da funcao construtora, use `this.marca` e `this.velocidade`.

### Exercicio 3 - Privado vs publico

Conteudo:
- Escopo.
- Propriedade publica.
- Funcao privada.

Enunciado:
Com base na funcao abaixo, adicione um metodo publico `mostrarNome`, crie uma funcao interna privada e tente acessa-la de fora.

```js
function Pessoa(nome) {
  const id = 123;
  this.nome = nome;
}
```

Requisitos:
- Criar um metodo publico acessivel pela instancia.
- Criar uma funcao interna privada.
- Testar o acesso externo e entender o resultado.

Dica:
- O que esta em `this` fica publico na instancia; o que esta em variavel local nao.

### Exercicio 4 - Metodo no prototype

Conteudo:
- Prototype.
- Compartilhamento de metodos.

Enunciado:
Crie uma funcao construtora `Animal(nome)`, adicione no prototype um metodo `falar` e teste com dois animais.

Requisitos:
- O metodo deve ser adicionado em `Animal.prototype`.
- Criar pelo menos duas instancias.
- Mostrar que ambas usam o mesmo metodo.

Dica:
- Metodos no prototype evitam recriar a mesma funcao em toda instancia.

## Secao 3 - Arrays e comparacoes

### Exercicio 5 - Pares multiplicados por 2

Conteudo:
- `filter`.
- `map`.
- Array imutavel.

Enunciado:
Dado o array abaixo, retorne um novo array apenas com numeros pares multiplicados por 2.

```js
const numeros = [1, 2, 3, 4, 5, 6];
```

Requisitos:
- Usar `filter` e `map`.
- Nao alterar o array original.

Dica:
- Primeiro filtre os pares, depois transforme.

### Exercicio 6 - Maior e menor numero

Conteudo:
- Loop.
- Comparacao.
- Controle de estado.

Enunciado:
Crie uma funcao que recebe um array de numeros e retorna o maior e o menor numero, sem usar `Math.max` ou `Math.min`.

Requisitos:
- Percorrer o array.
- Comparar manualmente.
- Retornar um objeto com `maior` e `menor`.

Dica:
- Comece assumindo que o primeiro item e maior e menor ao mesmo tempo.

### Exercicio 7 - Comparacao de objetos

Conteudo:
- Referencia de objeto.
- Wrapper object.
- Comparacao correta de valor.

Enunciado:
Explique com codigo por que a comparacao abaixo retorna `false` e mostre como comparar corretamente o valor.

```js
const a = new Number(10);
const b = new Number(10);

console.log(a === b);
```

Requisitos:
- Demonstrar a comparacao falsa.
- Explicar que sao objetos diferentes em memoria.
- Comparar corretamente usando valor primitivo.

Dica:
- `valueOf()` retorna o valor primitivo de um wrapper.

## Secao 4 - Promises

### Exercicio 8 - Promise basica

Conteudo:
- Promise.
- `setTimeout`.
- Resolve.

Enunciado:
Crie uma funcao que retorna uma Promise resolvida apos 2 segundos com a string `deu certo`.

Requisitos:
- Usar `new Promise`.
- Usar `setTimeout`.
- Consumir a Promise com `.then()` ou `await`.

Dica:
- O `resolve` deve ser chamado dentro do `setTimeout`.

### Exercicio 9 - Simulando Promise.any

Conteudo:
- Promises.
- Controle de falhas.
- Implementacao manual.

Enunciado:
Implemente uma funcao simples parecida com `Promise.any`.

```js
function promiseAny(promises) {
  // sua implementacao
}
```

Requisitos:
- Retornar o valor da primeira Promise que resolver.
- Ignorar Promises que falharem.
- Se todas falharem, rejeitar com erro.

Dica:
- Voce precisa contar quantas Promises falharam.

## Secao 5 - Desafio final

### Exercicio 10 - Sistema simples de usuarios

Conteudo:
- Funcao construtora.
- Prototype.
- Promises.
- Arrays.
- Agrupamento de resultado.

Enunciado:
Crie um sistema simples que processa usuarios de forma assincrona e separa maiores e menores de idade.

Requisitos:
- Criar `Usuario(nome, idade)`.
- Adicionar no prototype o metodo `eMaiorDeIdade()`.
- Criar um array com pelo menos 5 usuarios.
- Criar uma funcao que retorna Promise, usa tempo aleatorio e adiciona `tempo` ao usuario.
- Resolver se for maior de idade.
- Rejeitar se for menor de idade.
- Ao final, montar:

```js
{
  maiores: [
    { nome: "joao", idade: 20, tempo: 123 }
  ],
  menores: [
    { nome: "carlos", idade: 15, tempo: 456 }
  ]
}
```

Dica:
- Como `Promise.all` rejeita no primeiro erro, pense em tratar cada Promise individualmente antes de agrupar.
