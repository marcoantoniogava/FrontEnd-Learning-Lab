    ```js
Fetch API e Promises

# . 1 - O que é Fetch API

A Fetch API é a forma moderna nativa do JavaScript para realizar requisições HTTP entre cliente e servidor.

Ela substituiu em muitos cenários o antigo XMLHttpRequest (XHR), que era mais verboso e menos intuitivo.

Com fetch, você consegue:

- buscar dados de APIs
- enviar dados para backend
- autenticar usuários
- consumir microserviços
- enviar arquivos
- atualizar registros
- deletar dados
- integrar frontend com backend 

Ela funciona baseada em Promises, ou seja:

fetch("/usuarios");

retorna imediatamente uma Promise.

Isso significa que a requisição roda em segundo plano e o JS continua executando.

Quando terminar:

- resolve com um objeto Response
- ou rejeita em erro real de rede

Importante entender:

fetch NÃO retorna os dados diretamente.

Errado:
const dados = fetch("/api");

Correto:
const resposta = await fetch("/api");

ou:

fetch("/api").then(...);

Resumo profissional:

fetch = disparar requisição HTTP assíncrona de forma moderna.

--------------------------------------------------

# . 2 - Sintaxe básica

fetch(url, options);

Parâmetros:

1. url
endereço para onde vai a requisição

Exemplo:
"/api/usuarios"

2. options (opcional)
objeto de configuração

Exemplo:

{
    method: "POST",
    headers: {},
    body: ...
}

Sem options, o fetch faz GET automaticamente.

Exemplo:

fetch("/usuarios")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro");
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

Fluxo:

1. envia requisição
2. recebe Response
3. converte body
4. usa dados
5. trata erros

--------------------------------------------------

# . 3 - Exemplo com async await

async function carregarDados() {
    try {
        const response = await fetch("/usuarios");

        if (!response.ok) {
            throw new Error("Erro HTTP");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

Por que usar async/await?

- leitura linear
- parece síncrono
- mais limpo
- melhor manutenção
- melhor para fluxos grandes

Importante:

await pausa apenas a função async.
não trava o navegador.

--------------------------------------------------

# . 4 - Entendendo a resposta (Response)

Quando fetch resolve, ele entrega um objeto Response.
Esse objeto vem em formato de stream, ou seja, o corpo da resposta é lido aos poucos.

Exemplo:

const response = await fetch("/api");

Esse objeto representa a resposta HTTP inteira.

Principais propriedades:

response.status
    Ex:
    200
    404
    500

response.ok

    true se status entre 200 e 299

response.statusText

    texto do status

response.headers

    headers recebidos

response.url

    url final

response.redirected

    se houve redirecionamento

Principais métodos:

    response.json()
    response.text()
    response.blob()
    response.formData()
    response.arrayBuffer()

Importante:

    o body da resposta normalmente só pode ser consumido uma vez.

Errado:

    await response.json();
    await response.json();

--------------------------------------------------

# . 5 - Converter resposta

O servidor responde em formatos diferentes.

JSON:

    const dados = await response.json();

Mais comum em APIs REST.

Texto:

    const texto = await response.text();

HTML, logs, mensagens simples.

Blob:

    const arquivo = await response.blob();

Usado para:

- imagem
- pdf
- zip
- download

FormData:

    const form = await response.formData();

Usado em respostas multipart.

ArrayBuffer:

    const buffer = await response.arrayBuffer();

Usado para dados binários avançados.

Resumo:

    json = APIs
    text = texto puro
    blob = arquivos
    arrayBuffer = bytes

--------------------------------------------------

# . 6 - GET

Método padrão do fetch.

Usado para buscar dados.

async function listarProdutos() {
    const response = await fetch("/api/produtos");

    if (!response.ok) {
        throw new Error("Erro");
    }

    const produtos = await response.json();

    console.log(produtos);
}

Boas práticas:

- GET não envia body
- use query params para filtros
- ideal para listagem

Exemplo:

/api/produtos?categoria=tenis&pagina=2

--------------------------------------------------

# . 7 - POST

Usado para criar dados.

async function criarUsuario() {
    const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: "Nícolas",
            idade: 20
        })
    });

    const data = await response.json();
}

Explicando:

method:
    define POST

headers:
    informa tipo do body

body:
    dados enviados

JSON.stringify:
    transforma objeto JS em string JSON

Muito comum em:

- cadastro
- login
- criação de pedidos

--------------------------------------------------

# . 8 - PUT/PATCH

Usado normalmente para atualização total do recurso.

// EXEMPLO PUT
async function atualizarUsuario() {
    const response = await fetch("/api/usuarios/123", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: "Nícolas",
            idade: 21
        })
    });
}

// EXEMPLO PATCH
async function atualizarUsuarioParcial() {
    const response = await fetch("/api/usuarios/123", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idade: 21 // Só enviamos o atributo que queremos alterar
        })
    });
}

Semântica comum:

PUT = substitui tudo
PATCH = altera parcialmente

Nem toda API segue isso perfeitamente.

--------------------------------------------------

# . 9 - DELETE

Usado para remover recurso.

async function deletarUsuario() {
    const response = await fetch("/api/usuarios/123", {
        method: "DELETE"
    });

    if (response.ok) {
        console.log("Deletado");
    }
}

Algumas APIs retornam:

204 No Content

Ou seja:
sem body.

Então às vezes nem precisa response.json()

--------------------------------------------------

# . 10 - Tratando erros

Ponto MUITO importante:

fetch só rejeita Promise em erro técnico.

Exemplos:

- sem internet
- DNS falhou
- timeout externo
- CORS bloqueado
- conexão interrompida

404 e 500 NÃO entram automaticamente no catch.

Por isso:

try {
    const response = await fetch("/api");

    if (!response.ok) {
        throw new Error("Status: " + response.status);
    }

    const data = await response.json();

} catch (error) {
    console.log(error);
}

Mentalidade profissional:

erro HTTP ≠ erro de rede

Você trata os dois.

--------------------------------------------------

# . 11 - Headers

Headers são metadados enviados na requisição e recebidos na resposta.

Exemplos comuns:

Content-Type
Authorization
Accept
Cache-Control

Enviar token:

fetch("/perfil", {
    headers: {
        Authorization: "Bearer " + token
    }
});

Enviar JSON:

headers: {
    "Content-Type": "application/json"
}

Ler header:

const tipo = response.headers.get("Content-Type");

Muito usado para:

- autenticação JWT
- tipo de resposta
- cache
- idioma
- compressão

--------------------------------------------------

# . 12 - Query Params

Servem para filtros e paginação.

Exemplo:

    /api/usuarios?idade=20&cidade=SP

Muito comum em GET.

Exemplo real:

    /produtos?pagina=2&limite=10&ordem=preco

Forma segura:

const params = new URLSearchParams({
    idade: "20",
    cidade: "SP"
});

const response = await fetch("/api/usuarios?" + params.toString());

Resultado:

idade=20&cidade=SP

Vantagens:

- escapa caracteres especiais
- código limpo
- evita concatenação manual

--------------------------------------------------

# . 13 - Extra profissional: AbortController

Cancelar requisição.

const controller = new AbortController();

fetch("/api", {
    signal: controller.signal
});

controller.abort();

Usado em:

- autocomplete
- trocar tela
- usuário saiu da página
- evitar requests inúteis

--------------------------------------------------

# . 14 - Extra profissional: Credenciais

Enviar cookie/sessão:

fetch("/perfil", {
    credentials: "include"
});

Opções:

omit
same-origin
include

Muito usado em autenticação por cookie.

--------------------------------------------------

# . 15 - Extra profissional: Estrutura ideal

async function request(url, options = {}) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Erro HTTP " + response.status);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

Uso:

const usuarios = await request("/usuarios");

Isso centraliza padrão.