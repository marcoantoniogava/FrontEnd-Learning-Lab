# Lista 02 - Map, prototype, class, bind, call e apply

> Lista para dominar recursos importantes de JavaScript que aparecem em codigo legado, bibliotecas e manutencao de sistemas reais.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Map](#secao-1---map)
- [Secao 2 - Prototype e class](#secao-2---prototype-e-class)
- [Secao 3 - Controle de contexto](#secao-3---controle-de-contexto)
- [Secao 4 - Eventos](#secao-4---eventos)

## Conteudos praticados

- `Map`.
- Cache em memoria.
- Prototype.
- Heranca.
- `class`, `extends` e `super`.
- `bind`, `call` e `apply`.
- Contexto do `this`.
- Mini pub/sub.

## Secao 1 - Map

### Exercicio 1 - Cache de usuarios com Map

Conteudo:
- `Map`.
- Cache.
- Promise simulada.

Enunciado:
Crie um cache de usuarios usando `Map`. Se o usuario ja existir no cache, retorne direto; se nao existir, simule uma busca em API e salve no cache.

Requisitos:
- Criar uma classe `Usuario` com `id` e `nome`.
- Criar `const cache = new Map()`.
- Implementar:
  - `adicionarUsuario(usuario)`.
  - `buscarUsuario(id)`.
  - `removerUsuario(id)`.
- Simular busca assincrona com Promise e `setTimeout`.

Dica:
- `Map` e melhor que objeto quando a chave pode ter significado proprio e voce quer uma API clara de cache.

### Exercicio 2 - Agrupamento com Map

Conteudo:
- `Map`.
- Agrupamento.
- Array de objetos.

Enunciado:
Dado o array abaixo, agrupe usuarios por tipo usando `Map`, nao objeto.

```js
const usuarios = [
  { nome: "joao", tipo: "admin" },
  { nome: "maria", tipo: "user" },
  { nome: "pedro", tipo: "admin" }
];
```

Resultado esperado:

```js
Map {
  "admin" => [...],
  "user" => [...]
}
```

Requisitos:
- Usar obrigatoriamente `Map`.
- Cada chave deve apontar para um array.
- Preservar os usuarios originais.

Dica:
- Verifique se a chave ja existe antes de inserir.

## Secao 2 - Prototype e class

### Exercicio 3 - Sistema com prototype e heranca

Conteudo:
- Prototype.
- Heranca.
- Funcoes construtoras.

Enunciado:
Crie `Pessoa(nome)` e `Funcionario(nome, salario)` usando prototype, sem `class`.

Requisitos:
- `Pessoa` deve ter o metodo `falarNome`.
- `Funcionario` deve herdar de `Pessoa`.
- `Funcionario` deve ter o metodo `mostrarSalario`.
- Instanciar objetos e validar a heranca.

Dica:
- Esse padrao ajuda a entender codigo legado e o funcionamento interno de `class`.

### Exercicio 4 - Refatoracao para class

Conteudo:
- `class`.
- `extends`.
- `super`.

Enunciado:
Pegue o exercicio anterior e refatore para `class`.

Requisitos:
- Criar `class Pessoa`.
- Criar `class Funcionario extends Pessoa`.
- Usar `super`.
- Manter o mesmo comportamento da versao com prototype.

Dica:
- `class` em JavaScript e uma sintaxe mais moderna sobre prototype.

## Secao 3 - Controle de contexto

### Exercicio 5 - Bind vs call vs apply

Conteudo:
- `this`.
- `call`.
- `apply`.
- `bind`.

Enunciado:
Crie uma funcao externa `saudacao(mensagem, pontuacao)` e execute usando `call`, `apply` e `bind`.

Base:

```js
const usuario = {
  nome: "joao"
};

function saudacao(mensagem, pontuacao) {
  return `${mensagem}, ${this.nome}${pontuacao}`;
}
```

Requisitos:
- Executar com `call`.
- Executar com `apply`.
- Executar com `bind`.
- Explicar a diferenca de cada um.

Dica:
- `call` recebe argumentos separados, `apply` recebe array, `bind` retorna uma nova funcao.

### Exercicio 6 - Simulador de tarefas com bind

Conteudo:
- `this`.
- Classe.
- `setTimeout`.
- `bind`.

Enunciado:
Crie uma classe `Timer` com a propriedade `segundos` e o metodo `iniciar()`. Dentro do `setTimeout`, chame um metodo da classe.

Requisitos:
- Primeiro provoque a perda de contexto do `this`.
- Depois corrija usando `bind`.
- Explicar em comentario o motivo da correcao.

Dica:
- Callback passado para `setTimeout` nao garante o mesmo `this` da classe.

### Exercicio 7 - Call/apply na manipulacao de array

Conteudo:
- `call`.
- `apply`.
- Metodo emprestado.

Enunciado:
Sem usar `arr.push(...)` diretamente, adicione elementos em um array usando `Array.prototype.push.call` e depois usando `apply`.

Base:

```js
const arr = [];
```

Requisitos:
- Adicionar um item usando `call`.
- Adicionar varios itens usando `apply`.
- Exibir o array final.

Dica:
- Isso mostra como metodos podem ser chamados definindo manualmente o contexto.

## Secao 4 - Eventos

### Exercicio 8 - Mini EventEmitter

Conteudo:
- `Map`.
- Funcoes callback.
- Pub/sub.
- Contexto.

Enunciado:
Crie uma classe `EventEmitter` que registra eventos e executa callbacks quando um evento for emitido.

Requisitos:
- Usar internamente `eventos = new Map()`.
- Criar metodo `on(evento, fn)`.
- Criar metodo `emit(evento, ...args)`.
- Permitir mais de uma funcao por evento.
- Desafio extra: garantir contexto correto usando `bind`.

Dica:
- O valor de cada chave no Map pode ser um array de funcoes.
