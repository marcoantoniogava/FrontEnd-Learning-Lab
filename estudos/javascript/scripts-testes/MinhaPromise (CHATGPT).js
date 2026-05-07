function MinhaPromise(executor) {
    let estado = "pending";
    let valor;
    let callbacks = [];

    function resolvePromise(novoValor) {
        if (estado !== "pending") return;

        estado = "fulfilled";
        valor = novoValor;

        // simula microtask (aproximação)
        setTimeout(() => {
            callbacks.forEach(function(cb) {
                cb(valor);
            });
        }, 0);
    }

    this.then = function(callback) {
        if (estado === "fulfilled") {
            setTimeout(() => callback(valor), 0);
        } else {
            callbacks.push(callback);
        }
    };

    /* ENCADEAMENTO---
        this.then = function(callback) {
            return new MinhaPromise(function(resolve) {
                function handle(valorAtual) {
                    const resultado = callback(valorAtual);
                    resolve(resultado);
                }

                if (estado === "fulfilled") {
                    setTimeout(() => handle(valor), 0);
                } else {
                    callbacks.push(handle);
                }
            });
        };
    */

    executor(resolvePromise);
}

const p = new MinhaPromise(function(resolveParam) {
    setTimeout(() => {
        resolveParam("deu certo");
    }, 1000);
});

p.then(function(resultado) {
    console.log(resultado);
});

/* 
new MinhaPromise((resolve) => {
    resolve(10);
})
.then((v) => {
    console.log(v);
    return v * 2;
})
.then((v) => {
    console.log(v);
}); 
*/