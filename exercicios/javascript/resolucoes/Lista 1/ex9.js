/* 9. Promise.any
Simula várias Promises onde algumas rejeitam e outras resolvem.
Exemplo:
Promise.any([
  Promise.reject("falhou 1"),
  Promise.reject("falhou 2"),
  Promise.resolve("deu certo aqui!")
])
Mostra qual resultado chegou. */

Promise.any([
  Promise.reject("Falhou 1"),
  Promise.reject("Falhou 2"),
  Promise.resolve("Deu certo aqui!"),
  Promise.resolve("Deu certo aqui 2!"),
  Promise.reject("Falhou 3")
]).then(r => console.log(r));