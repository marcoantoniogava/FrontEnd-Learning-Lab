class PromiseSimulada {
    constructor(executor) {
        let callbacksResolve = [];
        let callbacksReject = [];
        let estado = "pending";
        let valorPromise;

        function resolveSimulado(valor) {
            if (estado !== "pending") return;

            estado = "fullfiled";
            valorPromise = valor;

            setTimeout(() => {
                callbacksResolve?.forEach(cb => {
                    cb(valorPromise);
                });
            }, 0);
        }

        function rejectSimulado(valor) {
            if (estado !== "pending") return;

            estado = "rejected";
            valorPromise = valor;

            setTimeout(() => {
                callbacksReject?.forEach(cb => {
                    cb(valorPromise);
                });
            }, 0);
        }

        this.then = function (callback) {
            return new PromiseSimulada((res, rej) => {
                function handleResolve () {
                    if (estado == "rejected")
                        return rej(valorPromise);
                    
                    let resultado = callback(valorPromise);

                    res(resultado);
                }

                if (estado == "pending") 
                    [callbacksResolve, callbacksReject].forEach(arr => {
                        arr.push(handleResolve)
                    });
                
                else if (estado == "rejected")
                    rej(valorPromise);

                else setTimeout(() => {
                    handleResolve();
                }, 0);
            });
        };

        this.catch = function (callback) {
            return new PromiseSimulada((res) => {
                function handleReject () {
                    let resultado = callback(valorPromise);

                    res(resultado);
                }

                if (estado == "pending")
                    callbacksReject.push(() => { handleReject(); });

                else setTimeout(() => {
                    handleReject();
                }, 0);
                    
            });
        };

        executor(resolveSimulado, rejectSimulado);
    }

    static resolve(valor) {
        return new PromiseSimulada(res => res(valor));
    }

    static reject(valor) {
        return new PromiseSimulada((res, rej) => rej(valor));
    }
}

/* EXEMPLOS */

const p = new PromiseSimulada((res, rej) => {
    setTimeout(() => {
        rej(2)
    }, 1000);
});

p.then(x=>x*2)
 .then(x=>x+1)
 .then(x=>console.log("não deveria rodar"))
 .catch(console.log);
