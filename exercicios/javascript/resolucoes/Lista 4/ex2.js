/* 2. (função pura + imutabilidade)
crie uma função atualizarUsuario(usuario, novosDados) que:
NÃO altera o objeto original
retorna um novo objeto atualizado
exemplo:
const user = { nome: "joao", idade: 20 };
const atualizado = atualizarUsuario(user, { idade: 25 }); */

const user = {nome: "joão", idade: 20};

function atualizarUsuario(usuario, novosDados) {
    return {...usuario, ...novosDados} //spread operator: espalha os dados, exemplo: a = [1, 2], b = [3, 4], c = [...a, ...b] retorna [1, 2, 3, 4]
}

const atualizado = atualizarUsuario(user, {idade: 25});

console.log(user);
console.log(atualizado);
