Claro, mano. Segue um estudo em **Markdown**, pronto para colocar no repositório:

````md
# Como Resolver Exercícios de Programação

Resolver exercícios de programação não é só sair escrevendo código.

Antes de programar, é preciso entender o problema, quebrar ele em partes menores e pensar em uma solução passo a passo.

A ideia deste documento é ensinar um método simples para resolver exercícios com mais clareza.

---

# 1. O que é resolver um exercício?

Resolver um exercício significa transformar um problema escrito em uma solução lógica usando código.

Exemplo:

```js
Crie uma função que receba dois números e retorne a soma deles.
````

Antes de escrever o código, precisamos entender:

* Quais dados entram?
* O que precisa sair?
* Qual operação deve acontecer?
* Existe alguma regra especial?

Neste caso:

* Entrada: dois números
* Processamento: somar os dois números
* Saída: resultado da soma

Código:

```js
function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3));
```

---

# 2. Leia o enunciado com calma

A primeira etapa é ler o enunciado inteiro.

Muitos erros acontecem porque a pessoa lê rápido, acha que entendeu e já começa a programar.

Exemplo:

```js
Crie uma função que receba uma lista de números e retorne apenas os números pares.
```

Aqui o exercício não pede:

* Somar os números
* Mostrar todos os números
* Retornar o maior número
* Alterar a lista original

Ele pede apenas:

```js
retornar os números pares
```

---

# 3. Identifique entrada, processamento e saída

Quase todo exercício pode ser dividido assim:

```txt
Entrada -> Processamento -> Saída
```

## Entrada

São os dados que o exercício fornece.

Exemplo:

```js
[1, 2, 3, 4, 5, 6]
```

## Processamento

É o que precisa ser feito com os dados.

Exemplo:

```txt
Verificar quais números são pares.
```

## Saída

É o resultado esperado.

Exemplo:

```js
[2, 4, 6]
```

---

# 4. Escreva a lógica em português antes do código

Antes de escrever JavaScript, escreva o raciocínio em português.

Exemplo:

```txt
Receber uma lista de números.
Criar uma nova lista vazia.
Percorrer cada número da lista.
Verificar se o número é par.
Se for par, adicionar na nova lista.
Retornar a nova lista.
```

Depois disso, fica muito mais fácil transformar em código.

```js
function filtrarPares(numeros) {
    const pares = [];

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares.push(numero);
        }
    }

    return pares;
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));
```

---

# 5. Quebre o problema em partes menores

Quando o exercício parece difícil, normalmente é porque ele junta várias pequenas tarefas.

Exemplo:

```js
Crie uma função que receba uma lista de alunos e retorne apenas os alunos aprovados.
Um aluno está aprovado quando sua nota for maior ou igual a 7.
```

Parece maior, mas dá para quebrar:

```txt
1. Receber uma lista de alunos.
2. Percorrer a lista.
3. Verificar a nota de cada aluno.
4. Se a nota for maior ou igual a 7, guardar esse aluno.
5. Retornar a lista de aprovados.
```

Código:

```js
function filtrarAprovados(alunos) {
    const aprovados = [];

    for (const aluno of alunos) {
        if (aluno.nota >= 7) {
            aprovados.push(aluno);
        }
    }

    return aprovados;
}

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 9 }
];

console.log(filtrarAprovados(alunos));
```

Resultado:

```js
[
    { nome: "Ana", nota: 8 },
    { nome: "Maria", nota: 9 }
]
```

---

# 6. Faça exemplos manuais

Antes de testar no código, simule o exercício com dados pequenos.

Exemplo:

```js
[3, 7, 2]
```

Exercício:

```txt
Retornar o maior número da lista.
```

Simulação:

```txt
Começo assumindo que o maior é 3.
Comparo 7 com 3.
7 é maior, então agora o maior é 7.
Comparo 2 com 7.
2 não é maior.
Resultado final: 7.
```

Código:

```js
function encontrarMaior(numeros) {
    let maior = numeros[0];

    for (const numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }

    return maior;
}

console.log(encontrarMaior([3, 7, 2]));
```

---

# 7. Comece pelo caso mais simples

Não tente resolver tudo de uma vez.

Primeiro faça funcionar com um exemplo simples.

Exemplo:

```js
function somar(a, b) {
    return a + b;
}
```

Depois teste:

```js
console.log(somar(2, 3));
console.log(somar(10, 5));
console.log(somar(-1, 4));
```

Depois pense em casos especiais:

```txt
E se os números forem negativos?
E se vier zero?
E se vier texto?
E se vier uma lista vazia?
```

---

# 8. Use console.log para entender o código

O `console.log` ajuda a enxergar o que está acontecendo.

Exemplo:

```js
function somarNumeros(numeros) {
    let total = 0;

    for (const numero of numeros) {
        console.log("Número atual:", numero);
        console.log("Total antes:", total);

        total += numero;

        console.log("Total depois:", total);
    }

    return total;
}

console.log(somarNumeros([1, 2, 3]));
```

Isso ajuda muito quando o aluno não entende onde está errando.

---

# 9. Não tenha medo de errar

Errar faz parte do processo.

Quando o código dá erro, ele está mostrando que alguma parte da lógica, sintaxe ou estrutura precisa ser ajustada.

O importante é perguntar:

```txt
O que eu esperava que acontecesse?
O que aconteceu de verdade?
Em qual linha o erro apareceu?
Qual valor está diferente do esperado?
```

Erro não é fracasso.

Erro é informação.

---

# 10. Tipos comuns de exercícios

## 10.1 Exercícios de cálculo

Normalmente usam operadores matemáticos.

Exemplo:

```js
function calcularDobro(numero) {
    return numero * 2;
}

console.log(calcularDobro(5));
```

---

## 10.2 Exercícios com condicionais

Normalmente usam `if`, `else if` e `else`.

Exemplo:

```js
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    }

    return "Menor de idade";
}

console.log(verificarIdade(20));
```

---

## 10.3 Exercícios com loops

Normalmente pedem repetição.

Exemplo:

```js
function mostrarNumeros() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

mostrarNumeros();
```

---

## 10.4 Exercícios com arrays

Normalmente pedem para buscar, filtrar, somar ou transformar listas.

Exemplo:

```js
function somarNumeros(numeros) {
    let total = 0;

    for (const numero of numeros) {
        total += numero;
    }

    return total;
}

console.log(somarNumeros([1, 2, 3, 4]));
```

---

## 10.5 Exercícios com objetos

Normalmente trabalham com dados mais organizados.

Exemplo:

```js
const usuario = {
    nome: "Carlos",
    idade: 22
};

function apresentarUsuario(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}

console.log(apresentarUsuario(usuario));
```

---

# 11. Método recomendado para resolver qualquer exercício

Use esta ordem:

```txt
1. Ler o enunciado inteiro.
2. Identificar a entrada.
3. Identificar a saída esperada.
4. Escrever o passo a passo em português.
5. Criar exemplos manuais.
6. Transformar o passo a passo em código.
7. Testar com dados simples.
8. Testar com dados diferentes.
9. Corrigir erros.
10. Melhorar a legibilidade do código.
```

---

# 12. Exemplo completo

Enunciado:

```txt
Crie uma função que receba uma lista de produtos e retorne o valor total da compra.
Cada produto possui nome, preço e quantidade.
```

Entrada:

```js
[
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 100, quantidade: 1 }
]
```

Processamento:

```txt
Para cada produto:
multiplicar preço pela quantidade.
Somar todos os resultados.
```

Saída esperada:

```js
200
```

Código:

```js
function calcularTotal(produtos) {
    let total = 0;

    for (const produto of produtos) {
        total += produto.preco * produto.quantidade;
    }

    return total;
}

const produtos = [
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 100, quantidade: 1 }
];

console.log(calcularTotal(produtos));
```

---

# 13. Como saber se a solução está boa?

Uma boa solução geralmente tem:

* Código fácil de ler
* Nomes claros
* Pouca repetição
* Resultado correto
* Lógica simples
* Testes com exemplos diferentes

Exemplo ruim:

```js
function x(a) {
    let b = 0;

    for (let c of a) {
        b += c.p * c.q;
    }

    return b;
}
```

Exemplo melhor:

```js
function calcularTotal(produtos) {
    let total = 0;

    for (const produto of produtos) {
        total += produto.preco * produto.quantidade;
    }

    return total;
}
```

Os dois podem funcionar, mas o segundo é muito mais fácil de entender.

---

# 14. O que fazer quando travar?

Quando travar, tente fazer estas perguntas:

```txt
Eu entendi o que o exercício quer?
Eu sei qual é a entrada?
Eu sei qual deve ser a saída?
Consigo resolver manualmente no papel?
Consigo explicar a solução em português?
O problema pode ser dividido em partes menores?
```

Se não conseguir explicar em português, provavelmente ainda não entendeu a lógica.

Programar é transformar raciocínio em código.

---

# 15. Conclusão

Resolver exercícios é uma habilidade que melhora com prática.

No começo, é normal demorar, errar e ficar perdido.

O objetivo não é decorar respostas.

O objetivo é aprender a pensar.

Quanto melhor o aluno entende o problema, mais fácil fica escrever o código.

Sempre siga este caminho:

```txt
Entender -> Planejar -> Codar -> Testar -> Melhorar
```

Esse processo serve para exercícios simples, projetos reais e problemas do dia a dia como desenvolvedor.

````

A estrutura já está no jeito pra salvar como:

```txt
estudos/javascript/documentos-de-estudo/secao-00-primeiros-passos-programacao/3 - Como resolver exercicios.md
````
