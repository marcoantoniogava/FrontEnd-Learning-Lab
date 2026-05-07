/* 3. Fetch básico
Usa o fetch pra pegar 10 posts da API https://jsonplaceholder.typicode.com/posts.
Mostra no console só os títulos (title). */

for (let i = 1; i < 11; i++) {

    let url = "https://jsonplaceholder.typicode.com/posts" + "/" + i;

    fetch(url)
        .then(r => r.json())
        .then(dados => console.log("Título " + i + ": ", dados.title))
        .catch(e => console.log("Erro: ", e)) 
};

//Tentar puxar todos os posts (em um fetch só) e ordenar