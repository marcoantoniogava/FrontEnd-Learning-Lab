/* 1. (expressões + return)
refatore essa função usando apenas expressão (sem if):

function ehPar(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
} */

//1° versão:
const ehPar = function(n) {
    const resultado = n % 2 === 0 ? true : false;
    return resultado;
};

console.log(ehPar(10));

//dps de pesquisar como melhorar:
const ehPar2 = function(n) {
    return n % 2 === 0; //não precisa armazenar em uma const, é só retornar.
    //n % 2 === 0; já retorna true ou false, sendo desnecessário a expressão ternária
}

console.log(ehPar2(10));
