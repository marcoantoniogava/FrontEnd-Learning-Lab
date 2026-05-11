/* 10. (estrutura + lógica)
crie uma função que recebe:
[
  { nome: "joao", idade: 17 },
  { nome: "maria", idade: 22 },
  { nome: "pedro", idade: 17 }
]
retorne:
{
  menores: [...],
  maiores: [...]
} */

const arrPessoas = [
  { nome: "joao", idade: 17 },
  { nome: "maria", idade: 22 },
  { nome: "pedro", idade: 17 }
]

function retornaMaiorMenor(arr) {
    const MaiorMenor = arr.reduce((acc, pessoa) => {
        const idade = pessoa.idade;

        if (idade < 18) {
            acc.menores.push(pessoa);
        } else {
            acc.maiores.push(pessoa);
        }

        return acc;

    }, {menores: [], maiores: []})

    return MaiorMenor;
}

console.log(retornaMaiorMenor(arrPessoas));
