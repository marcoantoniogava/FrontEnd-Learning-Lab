    ```js
Expressões e Instruções em JavaScript

Introdução
Uma expressão é qualquer pedaço de código que retorna um valor. Diferente das instruções (statements), que apenas executam ações sem retornar valores diretos.

Exemplos básicos:

    2 + 2; // 4
    "oi " + "nicolas"; // "oi nicolas"
    true && false // false

# _______________________________________________________________________________________________________________________

# . 1 - Expressão vs Instrução (Statement)

    A diferença entre expressão e instrução é crucial em JavaScript:

    !1 - Expressão (retorna valor)
        Uma expressão sempre produz um valor que pode ser utilizado em outro contexto

        -------exemplo---------
        let x = 10 + 5;
        
        10 + 5 → expressão → resulta em 15
        --------fim-exemplo-----

    !2 - Instrução/Statement (não retorna valor direto)
        Uma instrução executa uma ação, mas não retorna um valor utilizável

        -------exemplo---------
        if (x > 10) {
            console.log("maior");
        }
        --------fim-exemplo-----

        Isso é um statement, não uma expressão. Você não consegue fazer:
        let resultado = if (x > 10) { 10 }; // Erro!

# _______________________________________________________________________________________________________________________

# . 2 - Expressão de Atribuição

    A própria atribuição é uma expressão que retorna o valor atribuído

    -------exemplo---------
    let x = 10;

    O 10 é uma expressão
    E o próprio x = 10 também retorna valor

    let y = (x = 10); // y recebe 10
    console.log(y); // 10
    --------fim-exemplo-----

# _______________________________________________________________________________________________________________________

# . 3 - Expressão de Função

    Uma função pode ser escrita como uma expressão (function expression) e armazenada em uma variável

    -------exemplo---------
    const soma = function(a, b) {
        return a + b;
    };

    console.log(soma(2, 3)); // 5
    --------fim-exemplo-----

    Diferente de uma função declarada (que é um statement):

    -------exemplo---------
    function somar(a, b) {
        return a + b;
    }
    --------fim-exemplo-----

# _______________________________________________________________________________________________________________________

# . 4 - Arrow Function (também é expressão)

    Arrow functions são expressões mais concisas para escrever funções

    -------exemplo---------
    const soma = (a, b) => a + b;

    console.log(soma(2, 3)); // 5
    --------fim-exemplo-----

    Retorna automaticamente quando não há chaves {}

# _______________________________________________________________________________________________________________________

# . 5 - Expressão Ternária

    A expressão ternária é uma alternativa às condições if/else que retorna um valor direto

    -------exemplo---------
    let resultado = idade >= 18 ? "maior" : "menor";

    Diferente do if, que é um statement
    --------fim-exemplo-----

    A expressão ternária sempre retorna um valor que pode ser utilizado em outro contexto:

    -------exemplo---------
    const status = idade >= 18 ? "maior de idade" : "menor de idade";
    console.log(status); // funciona perfeitamente
    --------fim-exemplo-----

# _______________________________________________________________________________________________________________________

# . 6 - Chamadas de Função

    Chamadas de função também são expressões, mesmo que retornem undefined

    -------exemplo---------
    console.log("oi"); // é uma expressão

    let resultado = console.log("teste"); // resultado = undefined
    --------fim-exemplo-----

# _______________________________________________________________________________________________________________________

# . 7 - Teste Prático: É Expressão ou Não?

    A regra de ouro: se você consegue usar algo dentro de outro código esperando um valor, então é expressão

    -------exemplo---------
    ✔️ FUNCIONA (expressão)
    let x = 10 + 5; // expressão aritmética
    let y = (x = 10); // expressão de atribuição

    ❌ NÃO FUNCIONA (statement)
    let resultado = if (true) { 10 }; // erro - if não é expressão
    --------fim-exemplo-----

