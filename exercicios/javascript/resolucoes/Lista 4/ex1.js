/* 1. (array + reduce + estrutura de dados)
dado:
const pedidos = [
  { cliente: "joao", total: 100 },
  { cliente: "maria", total: 200 },
  { cliente: "joao", total: 50 }
];
retorne um objeto agrupado por cliente:
{
  joao: 150,
  maria: 200
}
👉 obrigatório usar reduce */

const pedidos = [ //array de pedidos
  { cliente: "joao", total: 100 },
  { cliente: "maria", total: 200 },
  { cliente: "joao", total: 50 }
];

const obj = pedidos.reduce((acc, ped) => {

    const cliente = ped.cliente;

    if (!acc[cliente]) { //se o cliente não existe,
        acc[cliente] = 0; //cliente entra com um valor 0 (vai ser o total)
    };

    acc[cliente] += ped.total; //incrementa no total

    return acc; //retorna o objeto
}, {}); //{} pro acc começar como objeto

console.log(JSON.stringify(obj, null, 2));
