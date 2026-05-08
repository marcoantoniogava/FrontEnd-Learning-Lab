/* 2 - Array / Object Avançado
-dado um array de objetos representando produtos {nome, preco, categoria}, faça:
-um objeto que agrupe produtos por categoria
-calcule o total de preço por categoria
-retorne uma lista só com nomes dos produtos que custam mais de 50 */

const produtos = [
    {nome: "Banana",     preco: 30,   categoria: "Frutas"},
    {nome: "Maçã",       preco: 60,   categoria: "Frutas"},
    {nome: "Celular",    preco: 100,  categoria: "Eletrônicos"},
    {nome: "Abacaxi",    preco: 80,   categoria: "Frutas"},
    {nome: "Computador", preco: 250,  categoria: "Eletrônicos"},
];

const agrupados = produtos.reduce((acc, prod) => { //objeto que agrupa por categoria

    const categoria = prod.categoria;
    
    if (!acc[categoria]) { //se a categoria não existe no objeto,
        acc[categoria] = { //cria o objeto dela (dentro vai ter o array com os dados + total de preço)
            produtosPorCategoria: [],
            precoTotal: 0
        };
    };

    acc[categoria].produtosPorCategoria.push(prod); //adiciona o produto no array
    acc[categoria].precoTotal += prod.preco; //calcula o preço total por categoria

    return acc; //retorna o objeto
}, {}); //{} como valor inicial pro acc começar como um objeto

const maisDe50 = produtos.filter((prod) => prod.preco > 50); //filtra os produtos que custam mais de 50, e joga tudo em um objeto

//transforma esse objeto em um array só com os nomes
const transformados = maisDe50.map((prod) => { //map internamente faz um loop, e retorna um array
    return prod.nome; //retorna o nome de cada produto, que vai pro array "transformados"
});

console.log(JSON.stringify(agrupados, null, 2)); //JSON.stringify transforma em uma string JSON
console.log(transformados);
