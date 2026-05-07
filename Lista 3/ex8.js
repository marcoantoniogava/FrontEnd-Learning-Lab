/* 8. (promise básica)
crie uma função que retorna uma Promise que:
resolve após 2 segundos
retorna a string "deu certo" */

function retornaPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("deu certo")
        }, 2000);
    });
};

retornaPromise().then(msg => console.log(msg));
