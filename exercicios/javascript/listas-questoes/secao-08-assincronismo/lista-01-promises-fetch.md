# Lista 01 - Promises, async/await e Fetch

> Lista focada em assincronismo real: timers, encadeamento, requisicoes HTTP, tratamento de erro e execucao paralela.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Promises e timers](#secao-1---promises-e-timers)
- [Secao 2 - Fetch e tratamento de erro](#secao-2---fetch-e-tratamento-de-erro)
- [Secao 3 - Concorrencia com Promises](#secao-3---concorrencia-com-promises)
- [Secao 4 - Desafio final](#secao-4---desafio-final)

## Conteudos praticados

- `Promise`.
- `.then()` e `.catch()`.
- `async` e `await`.
- `try/catch`.
- `fetch`.
- `Promise.all`.
- `Promise.race`.
- `Promise.any`.
- Retry de requisicoes.

## Secao 1 - Promises e timers

### Exercicio 1 - Timer com Promise

Conteudo:
- Promise.
- `async/await`.
- `setTimeout`.

Enunciado:
Crie uma funcao `contagemRegressiva(segundos)` que imprime no console a contagem regressiva ate zero usando uma espera de 1 segundo entre cada numero.

Requisitos:
- Criar ou reaproveitar uma funcao `esperar(ms)`.
- Usar `await` dentro do loop.
- Exibir algo como `3...`, `2...`, `1...`, `fim`.

Dica:
- A funcao `esperar` deve retornar uma Promise resolvida depois do tempo informado.

### Exercicio 2 - Encadeando Promises

Conteudo:
- Encadeamento.
- Transformacao de valores.
- Comparacao entre `.then()` e `async/await`.

Enunciado:
Crie uma Promise que comeca com o numero 2. Depois multiplique por 3, some 10 e mostre o resultado final.

Requisitos:
- Fazer uma versao usando `.then()` encadeado.
- Fazer outra versao usando `async/await`.
- O resultado esperado deve ser o mesmo nas duas abordagens.

Dica:
- Cada `.then()` pode receber o valor anterior e retornar o proximo valor.

## Secao 2 - Fetch e tratamento de erro

### Exercicio 3 - Fetch basico

Conteudo:
- `fetch`.
- Conversao para JSON.
- Arrays de resposta.

Enunciado:
Use `fetch` para buscar posts da API `https://jsonplaceholder.typicode.com/posts` e exiba no console apenas os 10 primeiros titulos.

Requisitos:
- Usar `await response.json()`.
- Limitar a exibicao a 10 posts.
- Exibir apenas a propriedade `title`.

Dica:
- Depois de converter para JSON, voce tera um array.

### Exercicio 4 - Fetch com erro

Conteudo:
- `try/catch`.
- Validacao de resposta HTTP.
- Mensagem de erro.

Enunciado:
Tente buscar dados em uma URL invalida da JSONPlaceholder, como `https://jsonplaceholder.typicode.com/abcdxyz`, e trate o erro.

Requisitos:
- Usar `try/catch`.
- Verificar se `response.ok` e falso.
- Exibir `Erro ao buscar dados:` junto com a mensagem do erro.

Dica:
- `fetch` nem sempre cai no `catch` sozinho em erro HTTP; voce precisa validar `response.ok`.

### Exercicio 5 - Criando dados com POST

Conteudo:
- `fetch` com metodo `POST`.
- Headers.
- Corpo JSON.

Enunciado:
Crie uma funcao que envia um novo post fake para `https://jsonplaceholder.typicode.com/posts`.

Requisitos:
- Enviar `{ title: "teste", body: "conteudo do post", userId: 99 }`.
- Usar `method: "POST"`.
- Enviar `Content-Type: "application/json"`.
- Exibir a resposta no console.

Dica:
- O body precisa ser convertido com `JSON.stringify`.

## Secao 3 - Concorrencia com Promises

### Exercicio 6 - Requisicoes em paralelo

Conteudo:
- `Promise.all`.
- Fetch paralelo.
- Combinacao de respostas.

Enunciado:
Crie uma funcao que busca o usuario 1 e os posts do usuario 1 ao mesmo tempo.

Requisitos:
- Buscar `/users/1`.
- Buscar `/posts?userId=1`.
- Usar `Promise.all`.
- Exibir o nome do usuario e a quantidade de posts encontrados.

Dica:
- Nao precisa esperar uma requisicao terminar para iniciar a outra.

### Exercicio 7 - Fetch com retry

Conteudo:
- Retry.
- Promises.
- Tratamento de falha.

Enunciado:
Reaproveite ou implemente uma funcao `fetchComRetry(url, tentativas)` e teste com uma URL valida e uma invalida.

Requisitos:
- Tentar novamente quando falhar.
- Mostrar quantas tentativas foram feitas.
- Se der certo, mostrar o resultado.
- Se todas falharem, mostrar erro final.

Dica:
- A cada tentativa, chame o `fetch` novamente. Nao reutilize a Promise antiga.

### Exercicio 8 - Race condition

Conteudo:
- `Promise.race`.
- Competicao entre Promises.

Enunciado:
Crie duas Promises que resolvem em tempos diferentes e use `Promise.race` para descobrir qual termina primeiro.

Requisitos:
- Uma Promise deve esperar 2000ms.
- Outra Promise deve esperar 500ms.
- Mostrar no console quem ganhou.

Dica:
- O valor resolvido pela Promise mais rapida sera o resultado do `Promise.race`.

### Exercicio 9 - Promise.any

Conteudo:
- `Promise.any`.
- Falhas ignoradas.
- Primeiro sucesso.

Enunciado:
Simule varias Promises onde algumas rejeitam e uma resolve. Use `Promise.any` para capturar o primeiro sucesso.

Requisitos:
- Criar pelo menos duas Promises rejeitadas.
- Criar pelo menos uma Promise resolvida.
- Exibir o resultado que resolveu primeiro.

Dica:
- `Promise.any` e util quando voce quer o primeiro sucesso, nao a primeira finalizacao.

## Secao 4 - Desafio final

### Exercicio 10 - Buscar usuario e posts

Conteudo:
- Fetch.
- Async/await.
- Composicao de objeto.
- Organizacao de dados.

Enunciado:
Crie uma funcao `buscarUsuarioEPosts(id)` que busca um usuario e os posts desse usuario, retornando um objeto resumido.

Requisitos:
- Buscar `/users/:id`.
- Buscar `/posts?userId=:id`.
- Retornar:

```js
{
  nome: "...",
  email: "...",
  posts: [
    { id: 1, title: "..." }
  ]
}
```

- Exibir o objeto final no console.

Dica:
- Separe busca, conversao para JSON e montagem do objeto final.
