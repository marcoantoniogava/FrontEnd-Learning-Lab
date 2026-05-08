    ```js
Avaliação de Curto-Circuito em JavaScript

Introdução
Avaliação de curto-circuito é quando o JavaScript interrompe a avaliação de uma expressão lógica assim que encontra um resultado decisivo.

# _______________________________________________________________________________________________________________________

# . 1 - Operador AND (&&)

    Retorna o PRIMEIRO valor falsy ou o último valor se todos forem truthy

    -------exemplo---------
    console.log("teste" && null && "opa"); // null (primeiro falsy)
    console.log(true && "valor" && 10);     // 10 (último valor, todos truthy)
    --------fim-exemplo-----

# _______________________________________________________________________________________________________________________

# . 2 - Operador OR (||)

    Retorna o PRIMEIRO valor truthy ou o último valor se todos forem falsy

    -------exemplo---------
    console.log(0 || false || "teste"); // "teste" (primeiro truthy)
    console.log(null || undefined || 0); // 0 (último valor, todos falsy)
    --------fim-exemplo-----

# _______________________________________________________________________________________________________________________

# . 3 - Operador de Coalescência Nula (??)

    Retorna o valor da ESQUERDA se ele existir (não for null ou undefined)
    Caso contrário, retorna o valor da DIREITA

    -------exemplo---------
    console.log(0 ?? 10);          // 0 (zero é um valor válido)
    console.log(null ?? "padrão"); // "padrão" (null é considerado inválido)
    console.log(undefined ?? 5);   // 5 (undefined é considerado inválido)
    --------fim-exemplo-----

# _______________________________________________________________________________________________________________________

# . 4 - Valores Falsy
    "", '', ``
    0, -0, 0n
    null
    undefined
    false

# _______________________________________________________________________________________________________________________

# . 5 - Valores Truthy
    "valor", "0", "false"
    {}, []
    true
    1, Infinity, -Infinity
    new Promise()

# _______________________________________________________________________________________________________________________

# . 6 - Curto-Circuito em Atribuições
    console.log("teste" && null && "opa") -> imprime null, parará no primeiro valor falsy
    console.log(0 && null && "opa") -> imprime "opa", parará no primeiro valor falsy

    console.log(0 ?? 10);   // -> imprime 0, ?? = “usa o da esquerda se existir de verdade”
    console.log(null ?? "teste");   // -> imprime "teste"
