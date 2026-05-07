/* 9. debounce (controle de execução)
-implemente uma função chamada:
-debounce(fn, delay)
-descrição
-essa função deve receber:
-fn: função que será executada
-delay: tempo em milissegundos
-e retornar uma nova função controlada (função de alto nível)
-comportamento esperado:
-a função retornada pode ser chamada várias vezes
-a execução de fn deve ser adiada
-se a função for chamada novamente antes do tempo (delay) acabar:
-o timer anterior deve ser cancelado
-um novo timer deve começar
-fn só deve ser executada quando pararem de chamar a função por X ms */

function debounce(fn, delay) {
    let timeout; //define timeout
    return function fControlada() {
        clearTimeout(timeout); //limpa o timeout

        timeout = setTimeout(() => {
            fn();
        }, delay);
    };
};

const fDeb = debounce(() => console.log("executou"), 1500); //fDeb vai ser a função q roda o debounce

//chamando varias vezes
fDeb();
fDeb();
fDeb();
fDeb();
fDeb();
