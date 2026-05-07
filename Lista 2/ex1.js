/* 1 - Manipulação avançada de arrays e objetos
Map, reduce, filter, find, some, every, flatMap
Clonagem profunda de objetos (structuredClone, JSON, lodash)
Destructuring complexo (arrays, objetos, funções)
Exercício rápido:
-pegar um array de usuários,
-filtrar por idade,
-agrupar por cidade,
-retornar um objeto {cidade: [usuarios]} */

const users = [ //array de usuários
    { nome: "user1", idade: 19, cidade: "Criciúma" },
    { nome: "user2", idade: 27, cidade: "São Paulo" },
    { nome: "user3", idade: 43, cidade: "Rio de Janeiro" },
    { nome: "user4", idade: 21, cidade: "Fortaleza" },
    { nome: "user5", idade: 65, cidade: "Manaus" }
];

const filtrados = users.filter((user) => user.idade >= 25); //filtrando os maiores de 25 anos

const agrupados = filtrados.reduce((acc, user) => { //agrupando por cidade

    const cidade = user.cidade;

    if (!acc[cidade]) { //se a cidade não existir no objeto,
        acc[cidade] = []; //cria o array dela (dentro vai ter os objetos com os dados)
    }

    acc[cidade].push(user); //adiciona o usuário no array

    return acc; //retorna o objeto
}, {}); //{} como valor inicial pro acc começar como um objeto

console.log(agrupados);
