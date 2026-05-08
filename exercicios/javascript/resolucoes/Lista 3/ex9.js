/* 9. (simulando Promise.any)
implemente uma função simples estilo Promise.any:
function promiseAny(promises) {
  // sua implementação
}
regras:
retorna o valor da primeira promise que resolver
ignora as que falharem
se todas falharem, retorna erro */

//promises simuladas
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rej da 1");
  }, 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rej da 2");
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Res da 3");
  }, 500);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Res da 4");
  }, 500);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rej da 5");
  }, 500);
});

//colocando elas no array
const arrPrms = [p1, p2, p3, p4, p5];

function promiseAny(promises) {

  let erros = 0; //erros começa em 0
  
  return new Promise((resolve, reject) => { //promise principal
    promises.forEach(p => { //pra cada promise
      p.then((msg) => resolve(msg)) //verifica se deu res ou rej, se deu res, resolve a promise principal com a mensagem da primeira promise resolvida (do array)
       .catch(() => {
        erros++; //se deu rej, aumenta a variavel que acumula a quantidade de erros
        
        if (erros === promises.length) { //se der que os erros = tamanho do array
          reject("Todas falharam"); //rej na promise principal avisando que todas falharam
        };
      });
    });
  });
};

promiseAny(arrPrms).then(console.log).catch(console.log); //executa a função e se der res exibe a primeira promise que resolveu, se der rej exibe que todas falharam
