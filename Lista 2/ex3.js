/* 3 - Funções e Closures
-crie uma função contador(inicial)
-que retorna outra função
-que ao ser chamada incrementa e retorna o valor atual
-teste criando 2 contadores diferentes, veja se cada um mantém seu próprio estado */

function contador(inicial) {
    let valorAtual = inicial;
    
    return function closure() {
        valorAtual++;
        return valorAtual;
    }
}

const c1 = contador(2)
const c2 = contador(7)

console.log(c1());
console.log(c1());
console.log(c2());
console.log(c2());
