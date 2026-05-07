/* 4. Fetch com erro
Tenta fazer um fetch numa URL errada (ex: https://jsonplaceholder.typicode.com/abcdxyz).
Trata o erro com try/catch e mostra "Erro ao buscar dados:" + mensagem. */

async function f() {
    try {
        let r = await fetch("https://jsonplaceholder.typicode.com")
        let dados = await r.json()
        console.log(dados);
    } catch (e) {
        console.log("Erro ao buscar dados: " + e);
    }
};

f();