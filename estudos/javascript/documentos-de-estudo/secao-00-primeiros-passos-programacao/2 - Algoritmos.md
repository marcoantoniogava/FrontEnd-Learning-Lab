# Algoritmos

# . 1 - O que é um algoritmo

Um algoritmo é uma sequência lógica de passos para resolver um problema.

Basicamente:
-> entrada
-> processamento
-> saída

Exemplo simples:
Problema:
somar dois números

Passos:
1. receber número A
2. receber número B
3. somar A + B
4. mostrar resultado

Isso já é um algoritmo.

---

Exemplo em JavaScript:

```js
const a = 10;
const b = 5;

const resultado = a + b;

console.log(resultado);

````

---

Todo programa é composto por algoritmos.

O JavaScript em si não resolve nada sozinho.
Você escreve instruções organizadas em sequência lógica.

---

# . 2 - Características de um algoritmo

Um algoritmo precisa ser:

## 1 - Finito

Precisa terminar em algum momento.

ERRADO:

```js
while (true) {

}
```

Isso nunca termina.

---

## 2 - Bem definido

Cada passo precisa ser claro.

RUIM:

```txt
faz alguma coisa ai
```

BOM:

```txt
soma o valor A com o valor B
```

---

## 3 - Ter entrada

Dados que entram no algoritmo.

Exemplo:

```js
const nome = "Nícolas";
```

---

## 4 - Ter saída

Resultado produzido.

```js
console.log(nome);
```

---

## 5 - Resolver um problema

Se não resolve nada, não serve.

---

# . 3 - Fluxo básico de um algoritmo

Quase todo algoritmo segue isso:

```txt
Entrada
↓
Processamento
↓
Saída
```

Exemplo:

```txt
Usuário digita idade
↓
Sistema verifica se >= 18
↓
Mostra "maior de idade"
```

---

Em JS:

```js
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

---

# . 4 - Estruturas fundamentais

Todo algoritmo é formado basicamente por:

## 1 - Sequência

Código executado linha por linha.

```js
console.log("A");
console.log("B");
console.log("C");
```

Fluxo:

```txt
A → B → C
```

---

## 2 - Decisão

Escolher caminhos.

```js
const saldo = 100;

if (saldo >= 50) {
    console.log("Compra permitida");
} else {
    console.log("Saldo insuficiente");
}
```

---

## 3 - Repetição

Executar várias vezes.

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

# . 5 - Pensamento algorítmico

Programar NÃO é decorar sintaxe.

Programar é:
-> quebrar problemas
-> organizar lógica
-> criar fluxo
-> prever comportamento

---

Exemplo:

Problema:
"mostrar apenas números pares de 1 até 10"

Pensamento:

```txt
1. começar em 1
2. verificar se número é par
3. se for, mostrar
4. aumentar número
5. repetir até 10
```

---

Implementação:

```js
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

---

# . 6 - Fluxograma

Fluxograma é uma representação visual de algoritmos.

Exemplo:

```txt
Início
  ↓
Receber idade
  ↓
idade >= 18 ?
 ↓       ↓
sim      não
 ↓        ↓
adulto  menor
  ↓
Fim
```

---

# . 7 - Pseudocódigo

Pseudocódigo é escrever lógica sem linguagem específica.

Exemplo:

```txt
INICIO

receber idade

SE idade >= 18
    mostrar "adulto"
SENAO
    mostrar "menor"

FIM
```

---

Isso ajuda muito:
-> lógica
-> arquitetura
-> planejamento

---

# . 8 - Variáveis no algoritmo

Variáveis armazenam dados.

```js
let nome = "Nícolas";
let idade = 20;
```

Por trás:
o algoritmo guarda informações na memória.

---

# . 9 - Operadores importantes

## Aritméticos

```js
+
-
*
/
%
```

---

## Comparação

```js
>
<
>=
<=
==
===
```

---

## Lógicos

```js
&&
||
!
```

---

# . 10 - Condições

Controlam fluxo.

```js
const nota = 8;

if (nota >= 7) {
    console.log("Aprovado");
}
```

---

Múltiplas decisões:

```js
const nota = 5;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
```

---

# . 11 - Estruturas de repetição

## FOR

Quando sabe quantidade.

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

---

## WHILE

Quando não sabe.

```js
let senha = "";

while (senha !== "123") {
    senha = prompt("Digite a senha");
}
```

---

## DO WHILE

Executa pelo menos uma vez.

```js
do {
    console.log("Executou");
} while (false);
```

---

# . 12 - Algoritmos e complexidade

Nem todo algoritmo é eficiente.

Exemplo:

```js
for (let i = 0; i < 1000000; i++) {

}
```

Quanto mais operações:
-> mais CPU
-> mais memória
-> mais lento

---

# . 13 - Big O

Big O mede eficiência.

Exemplo:

## O(1)

Sempre mesma velocidade.

```js
array[0];
```

---

## O(n)

Depende do tamanho.

```js
for (const item of array) {

}
```

---

## O(n²)

Loop dentro de loop.

```js
for (const a of lista) {
    for (const b of lista) {

    }
}
```

---

Quanto maior:
-> pior escala

---

# . 14 - Algoritmos de busca

## Busca linear

Procura item um por um.

```js
const numeros = [1, 2, 3, 4, 5];

function buscar(valor) {
    for (const numero of numeros) {
        if (numero === valor) {
            return true;
        }
    }

    return false;
}
```

Complexidade:

```txt
O(n)
```

---

## Busca binária

Muito mais rápida.

Só funciona em lista ordenada.

Ideia:
-> pega meio
-> decide esquerda/direita
-> corta metade do problema

Complexidade:

```txt
O(log n)
```

---

# . 15 - Algoritmos de ordenação

## Bubble Sort

Troca valores vizinhos.
Funciona da seguinte forma:
1. Compara o primeiro elemento com o segundo.
2. Se o primeiro for maior, troca eles de lugar.
3. Depois compara o segundo com o terceiro, e assim por diante.

```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
```

---

Apesar de famoso:
é lento.

Complexidade:

```txt
O(n²)
```

---

# . 16 - Recursão

Quando função chama ela mesma.

Exemplo:

```js
function contagem(n) {
    if (n === 0) {
        return;
    }

    console.log(n);

    contagem(n - 1);
}

contagem(5);
```

Fluxo:

```txt
5
4
3
2
1
```

---

Muito usado em:
-> árvores
-> grafos
-> parsing
-> algoritmos complexos

---

# . 17 - Stack overflow

Recursão infinita explode a stack.

```js
function loop() {
    loop();
}

loop();
```

Erro:

```txt
Maximum call stack size exceeded
```

---

Porque:
cada chamada ocupa memória na call stack.

---

# . 18 - Estruturas de dados

Algoritmos dependem MUITO disso.

Exemplos:

## Array

Lista indexada.

```js
const lista = [1, 2, 3];
```

---

## Object

```js
const usuario = {
    nome: "Nícolas"
};
```

---

## Map

```js
const mapa = new Map();
```

---

## Set

```js
const set = new Set();
```

---

A escolha da estrutura muda:
-> performance
-> memória
-> complexidade

---

# . 19 - Paradigmas de algoritmos
São formas de pensar e organizar a lógica.

## Imperativo

Passo a passo explícito.

```js
let soma = 0;

for (const n of numeros) {
    soma += n;
}
```

---

## Declarativo

Descreve intenção.

```js
const soma = numeros.reduce((a, b) => a + b);
```

---

## Funcional

Baseado em funções puras.

```js
const dobrados = numeros.map(n => n * 2);
```

---

# . 20 - Algoritmos no mundo real

Tudo usa algoritmo:

-> Instagram feed
-> TikTok recomendação
-> Spotify recomendação
-> GPS rota
-> Banco antifraude
-> Jogos
-> IA
-> Pesquisa Google

---

# . 21 - Como evoluir em algoritmos

O maior erro:
ficar decorando.

Você melhora resolvendo problemas.

---

Melhor caminho:

## 1 - Aprender lógica

if
loop
função
variáveis

---

## 2 - Resolver exercícios

MUITOS.

---

## 3 - Quebrar problemas

Sempre pensar:

```txt
entrada
processamento
saída
```

---

## 4 - Ler código dos outros

Ajuda muito.

---

## 5 - Refatorar

Mesmo algoritmo:
-> mais limpo
-> mais rápido
-> mais legível

---

# . 22 - Dica MUITO importante

Código funcionando NÃO significa algoritmo bom.

Isso aqui funciona:

```js
for (let i = 0; i < usuarios.length; i++) {
    for (let j = 0; j < usuarios.length; j++) {

    }
}
```

Mas talvez:
-> lento
-> difícil manter
-> escala mal

---

Mercado valoriza MUITO:
-> clareza
-> legibilidade
-> eficiência
-> arquitetura

---

# . 23 - Mentalidade correta

Programador forte:
-> entende problema
-> quebra em partes
-> organiza fluxo
-> prevê cenários
-> pensa em escala

Sintaxe vem depois.

---

# . 24 - Resumo final

Algoritmo é:
-> lógica
-> sequência
-> resolução de problemas

Programação é transformar algoritmos em código.

Quem domina algoritmos:
-> aprende linguagens mais rápido
-> resolve problemas melhor
-> escreve código mais limpo
-> cresce muito mais como desenvolvedor

```
```
