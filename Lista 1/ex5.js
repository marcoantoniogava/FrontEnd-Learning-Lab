/* 5. Requisições em paralelo
Cria uma função que busca usuário 1 e posts do usuário 1 ao mesmo tempo (Promise.all).
Mostra o nome do usuário e quantos posts ele tem. */

async function buscaUsuario1() {
    const [usuario, post] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(r => r.json())
    ]);
    console.log("Usuário: ", usuario.name);
    console.log("Post: ", post.length);
};

buscaUsuario1();