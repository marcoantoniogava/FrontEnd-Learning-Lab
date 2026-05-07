/* 8. função de alto nível com retry (promises)
-implemente uma função chamada:
-executarComRetry(fn, tentativas)
descrição
essa função deve receber:
-fn: uma função que retorna uma Promise
-tentativas: número máximo de tentativas em caso de falha
comportamento esperado:
-a função deve executar fn
-se a Promise for resolvida, retornar o resultado imediatamente
-se a Promise for rejeitada, tentar executar novamente
-repetir até atingir o limite de tentativas
-se todas as tentativas falharem, deve lançar (reject) o último erro ocorrido
-regras importantes
-fn deve ser chamada novamente a cada tentativa (não reutilizar resultado anterior)
-não usar variáveis globais para controle
-o retorno de executarComRetry deve ser uma Promise
-respeitar o número máximo de tentativas */

function executarComRetry(fn, tentativas) 
{
    return new Promise((resolve, reject) => { //promise principal
        function tentar(vezesRestantes) {
            fn().then(resolve) //se der certo, resolve a promise principal com o resultado da outra
            .catch((erro) => { //se der errado, verifica
                if (vezesRestantes > 1) { //se as vezesRestantes são maiores q 1 (se ainda precisa repetir)
                    tentar(vezesRestantes - 1); //tenta de novo (diminuindo uma vez restante)
                }
                else {
                    reject(erro) //se nao, rejeita a promise principal com o erro da outra
                };
            });
        };
        tentar(tentativas); //chama a funcao que tenta, passando a quantidade de tentativas q ela vai fazer
    });
};

function fPromise() {
    return new Promise((resolve, reject) => {
        resolve("resolvi");
        //reject("rejeitei");
    });
};

//mudar numero de tentartivas (ta como 3) e descomentar o reject pra testar
executarComRetry(fPromise, 3).then(console.log).catch(console.log);
