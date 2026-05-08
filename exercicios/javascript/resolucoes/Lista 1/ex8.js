/* 8. Race condition
Cria duas Promises que resolvem em tempos diferentes (esperar(2000) e esperar(500)).
Usa Promise.race e mostra no console quem “ganhou”. */

function esperar(dado, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(dado), ms); //passando função dentro do settimeout pq se nao ele resolve a promise instantaneamente (pq to passando (dado no resolve))
    })
};

async function fRace() {
    const vencedor = await Promise.race([
        esperar("p1", 2000),
        esperar("p2", 500)
    ]);
    console.log("Vencedor: " + vencedor);
};

fRace();