# Lista 02 - Sistemas assincronos

> Desafios mais completos simulando pequenos fluxos de backend, processamento, ranking, estoque e pipeline de dados.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Pedidos](#secao-1---pedidos)
- [Secao 2 - Usuarios e ranking](#secao-2---usuarios-e-ranking)
- [Secao 3 - Estoque com retry](#secao-3---estoque-com-retry)
- [Secao 4 - Tarefas async](#secao-4---tarefas-async)
- [Secao 5 - Pipeline de processamento](#secao-5---pipeline-de-processamento)

## Conteudos praticados

- Funcoes construtoras.
- Prototype.
- Promises.
- `Promise.all`.
- Tratamento de sucesso e erro.
- Retry.
- Agrupamento de resultados.
- Pipeline de dados.

## Secao 1 - Pedidos

### Exercicio 1 - Sistema de pedidos com processamento assincrono

Conteudo:
- Funcao construtora.
- Prototype.
- Promise.
- Processamento em lote.

Enunciado:
Simule um backend simples de pedidos. Cada pedido deve ser processado de forma assincrona e separado entre aprovado e recusado.

Requisitos:
- Criar `Pedido(id, cliente, valor)`.
- Adicionar no prototype:
  - `aplicarDesconto(percentual)`.
  - `ehValido()` retornando se `valor > 0`.
- Criar um array com varios pedidos.
- Simular processamento com `setTimeout`.
- Usar tempo aleatorio ate 2 segundos.
- Se o pedido for invalido, rejeitar.
- Se for valido, aplicar 10% de desconto e resolver.
- Retornar:

```js
{
  aprovados: [],
  recusados: []
}
```

Dica:
- Trate cada Promise para que uma rejeicao nao derrube todo o lote.

## Secao 2 - Usuarios e ranking

### Exercicio 2 - Sistema de usuarios com ranking

Conteudo:
- Prototype.
- Media.
- Ordenacao.
- Promise simulada.

Enunciado:
Crie um sistema de usuarios com pontuacoes carregadas de forma assincrona e gere um ranking por media.

Requisitos:
- Criar `Usuario(nome)`.
- Cada usuario deve ter um array de `pontuacoes`.
- Adicionar no prototype o metodo `mediaPontuacao()`.
- Criar varios usuarios.
- Simular carregamento das pontuacoes via Promise.
- Ordenar do maior para o menor.
- Retornar:

```js
[
  { nome: "joao", media: 9 },
  { nome: "maria", media: 7 }
]
```

Dica:
- Calcule a media depois que todas as pontuacoes forem carregadas.

## Secao 3 - Estoque com retry

### Exercicio 3 - Sistema de estoque

Conteudo:
- Classe ou funcao construtora.
- Retry.
- Falha aleatoria.
- Agrupamento de resultado.

Enunciado:
Crie um sistema de estoque que tenta retirar produtos e usa retry quando a operacao falhar.

Requisitos:
- Criar `Produto(nome, estoque)`.
- Criar metodo `retirar(qtd)` que diminui o estoque.
- Criar uma funcao async que tenta retirar produto.
- A retirada pode falhar aleatoriamente.
- Implementar `executarComRetry(fn, tentativas)`.
- Retornar:

```js
{
  sucesso: [],
  falha: []
}
```

Dica:
- Retry faz sentido para falha temporaria, nao para regra invalida.

## Secao 4 - Tarefas async

### Exercicio 4 - Mini todo list assincrona

Conteudo:
- Funcao construtora.
- Prototype.
- Prioridade.
- Agrupamento.

Enunciado:
Crie um sistema de tarefas onde tarefas de alta prioridade sao processadas mais rapido que tarefas de baixa prioridade.

Requisitos:
- Criar `Tarefa(descricao, prioridade)`.
- Prioridade pode ser `baixa`, `media` ou `alta`.
- Adicionar no prototype `ehAltaPrioridade()`.
- Simular processamento async.
- Agrupar resultado:

```js
{
  alta: [],
  media: [],
  baixa: []
}
```

Dica:
- A prioridade pode definir o tempo usado no `setTimeout`.

## Secao 5 - Pipeline de processamento

### Exercicio 5 - Pipeline de dados

Conteudo:
- Pipeline.
- Promise.
- Transformacao.
- Tratamento de erro.

Enunciado:
Crie um pipeline com tres etapas: buscar dados, transformar dados e salvar dados.

Requisitos:
- Criar as etapas:
  - `buscarDados`.
  - `transformarDados`.
  - `salvarDados`.
- Cada etapa pode falhar.
- Usar encadeamento de Promises.
- Tratar erro corretamente.
- Entrada:

```js
[
  { nome: "joao", idade: 20 },
  { nome: "maria", idade: 15 }
]
```

- Saida:

```js
{
  sucesso: [],
  erro: []
}
```

Dica:
- Pense como fluxo real: buscar, validar/transformar e persistir.
