/* 10. (desafio real - async + objetos + organização)
crie um sistema simples de usuários seguindo os passos abaixo:
-1 - crie uma função construtora Usuario(nome, idade)
-2 - adicione no prototype o método:
    eMaiorDeIdade() → retorna true ou false
-3 - crie um array com pelo menos 5 usuários
-4 - crie uma função que:
    recebe um usuário
    retorna uma Promise
    usa setTimeout com tempo aleatório (Math.floor(Math.random() * 2000))
    adiciona o tempo ao usuário
    se for maior de idade → resolve
    se for menor de idade → reject
-5 - para todos os usuários:
    execute as Promises
    trate sucesso e erro
    aguarde todas com Promise.all
-6 - monte um objeto final no formato:
{
  maiores: [
    { nome: "joao", idade: 20, tempo: 123 },
  ],
  menores: [
    { nome: "carlos", idade: 15, tempo: 456 },
  ]
} */

const users = [ //array de usuários
    new Usuario("joão", 20),
    new Usuario("carlos", 25),
    new Usuario("pedro", 14),
    new Usuario("marcos", 17),
    new Usuario("gabriel", 28)
]

function Usuario(nome, idade) { //função construtora
    this.nome  = nome
    this.idade = idade
}

Usuario.prototype.eMaiorDeIdade = function() { //método adicionado no prototype da função Usuario
    return this.idade >= 18; //retorna true pra maior de idade, false pra menor de idade
}

function fPromise(usuario) { //função que recebe um usuário
    return new Promise((resolve, reject) => { //retorna uma promise
        const tempo = Math.floor(Math.random() * 2000) //tempo aleatório pro settimeout
        setTimeout(() => { //settimeout com tempo aleatório
            usuario.tempo = tempo //adicionando o campo tempo com valor no usuário

            if (usuario.eMaiorDeIdade()) { //se o usuário for maior de idade, resolve
                resolve(usuario);
            }
            else { //se for menor de idade, reject
                reject(usuario);
            }
        }, tempo);
    })
}

const resultado = { //objeto final com arrays dos maiores e menores de idade
    maiores: [],
    menores: []
}

const promises = users.map(user => { //array de promises
    return fPromise(user) //executa as promises
    .then(user => { //se vier como resolve (maior de idade), coloca a promise no array "maiores"
        resultado.maiores.push(user);
    })
    .catch(user => { //se vier como reject (menor de idade), coloca a promise no array "menores"
        resultado.menores.push(user);
    });
});

Promise.all(promises).then(() => { //aguarda todas as promises
    console.log(resultado); //exibe o resultado (objeto final)
});
