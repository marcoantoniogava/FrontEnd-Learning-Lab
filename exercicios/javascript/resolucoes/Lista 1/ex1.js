/* 1. Timer com Promise
Cria uma função contagemRegressiva(segundos)
Que imprime no console a contagem (3... 2... 1... 🚀)
Usando await esperar(ms) a cada segundo. */

/* Função que espera os ms passados como argumento*/
function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
};

/* recebe uma quantidade de segundos, e espera eles passarem, exibindo em sequência o próximo log */
async function contagemRegressiva(segundos) {
    await esperar(1000); //1 segundo pra começar
    console.log("3...");
    await esperar(segundos * 1000);
    console.log("2...");
    await esperar(segundos * 1000);
    console.log("1...");
    await esperar(segundos * 1000);
    console.log("🚀");
};

contagemRegressiva(2); //passa os segundos

//Implementar um loop