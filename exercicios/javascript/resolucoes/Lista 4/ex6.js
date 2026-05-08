/* 6. (promise + encadeamento)
-crie 3 funções:
-buscarUsuario
-buscarPedidos
-calcularTotal
-cada uma retorna uma Promise
-encadeie para:
-buscar usuário
-buscar pedidos dele
-calcular total gasto
-- depois de concluido: --
-trate erro com .catch
-simule erro em alguma etapa */

/* 
function buscarUsuario() {
    return new Promise((resolve, reject) => {
        let usuario = "Marco"; //usuario ficticio
        resolve(usuario); //resolve com ele ("busca")
        //reject(usuario);
    });
};

function buscarPedidos(usuario) {
    return new Promise((resolve, reject) => {
        let pedidos = [ //array de pedidos ficticio
            {id: 1, usuario: usuario, valor: 10}, //criar usuarios diferentes pra cada pedido, e selecionar o valor total dos pedidos do usuario escolhido
            {id: 2, usuario: usuario, valor: 40},
            {id: 3, usuario: usuario, valor: 30},
            {id: 4, usuario: usuario, valor: 70},
            {id: 5, usuario: usuario, valor: 50}
        ];
        resolve(pedidos); //resolve com ele ("busca")]
        //reject(pedidos);
    });
};

function calcularTotal(pedidos) {
    return new Promise((resolve, reject) => {
        let total = 0; //total começa em 0

        for (let i = 0; i < pedidos.length; i++) {
            const pedido = pedidos[i]; //define pedido como cada pedido do array
            let valor = pedido.valor; //define valor como o valor de cada pedido
            total += valor; //soma o valor no total
        };
        
        resolve(total); //resolve com o total
        //reject(total);
    });
};

buscarUsuario().then((usuario) => buscarPedidos(usuario).then((pedidos) => calcularTotal(pedidos))).then(console.log).catch(console.log);
*/



/* 
novo jeito de fazer:
    -1- Pedir pro chatgpt criar uma base de dados mockado de varios usuarios que possuem varios pedidos.
    -2- a gente vai chamar buscarusuario, passando um nome, ele vai retornar o id.
    -3- buscar os pedidos com esse id de usuario, e depois prosseguir com a lógica atual

melhorias do código:
    -1 - trocar loop for por forEach
    -2 - criar uma função async await pra realizar as operações finais
*/

// base de dados mockada
const usuarios = [
  { id: 1, nome: "Marco" },
  { id: 2, nome: "Joao" },
  { id: 3, nome: "Maria" }
];

const pedidos = [
  { id: 1, usuarioId: 1, valor: 10 },
  { id: 2, usuarioId: 1, valor: 40 },
  { id: 3, usuarioId: 2, valor: 30 },
  { id: 4, usuarioId: 1, valor: 70 },
  { id: 5, usuarioId: 3, valor: 40 },
  { id: 6, usuarioId: 2, valor: 20 }
];

function buscarUsuario(nome) {
    return new Promise((resolve, reject) => {
        let idUsuario = 0; //id como 0 só pra dizer q é numero

        usuarios.forEach(usuario => {
            if (usuario.nome === nome) { //se o nome do usuario q ta passando no loop for = ao usuario passado como argumento:
                idUsuario = usuario.id; //idUsuario vai ser o id desse usuario
                resolve(idUsuario); //resolve com id
            };
        });
    });
};

function buscarPedidos(idUsuario) {
    return new Promise((resolve, reject) => {
        let pedidosDoUsuario = []; //array q vai guardar os pedidos do usuario

        pedidos.forEach(pedido => {
            if (pedido.usuarioId === idUsuario) { //se o usuarioId do pedido for = ao id do usuario passado como argumento
                pedidosDoUsuario.push(pedido); //adiciona o pedido no array de pedidos do usuario
            };
        });
        if (pedidosDoUsuario.length > 0) { //se tem pedidos no array
            resolve(pedidosDoUsuario); //resolve com ele
        }
        else {
            reject("Não foi encontrado pedidos pro usuário escolhido"); //se não, rejeita com uma mensagem
        };
    });
};

function calcularTotal(pedidos) {
    return new Promise((resolve, reject) => {
        let total = 0; //total começa em 0

        pedidos.forEach(pedido => {
            let valor = pedido.valor; //define valor como o valor de cada pedido
            total += valor; //soma o valor no total
        });
        resolve(total); //resolve com o total
    });
};

async function fFinal() { //função async que realiza as operações
    const id      = await buscarUsuario("Marco"); //mudar o nome para testar
    const pedidos = await buscarPedidos(id);
    const total   = await calcularTotal(pedidos);
    console.log(total);
};

fFinal();

//obs: poderia usar filter ao inves de foreach, mas só vi depois.
