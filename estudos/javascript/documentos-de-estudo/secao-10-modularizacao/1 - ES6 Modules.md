    ```js
ES6 Modules (ou ESM) é o sistema nativo de módulos do JavaScript, lançado em junho de 2015.

-> é uma forma de dividir seu código em arquivos separados e conseguir importar/exportar coisas entre eles.

Antes do ES6, a gente tinha que usar bibliotecas externas (ex: CommonJS, AMD) para conseguir modularizar o código.
-> tudo no mesmo arquivo era bagunçado, difícil de manter e reutilizar.
-> ou usando gambiarra tipo IIFE, global (variáveis globais).

Hoje com ES6 Modules:
-> código organizado
-> reutilizável
-> escalável (padrão de mercado)

Por que isso é importante?
-> frameworks usam isso (React, Angular, etc)
-> separa responsabilidades
-> melhora manutenção
-> permite tree-shaking (performance)
-> evita poluição global

# ______________________________________________________________________________________________

# . 1 - Estrutura básica

Você tem arquivos separados:
/ projeto
|-- main.js
|-- utils.js

## 1 - Export (exportar coisas)

No arquivo utils.js:

export function somar(a, b) {
    return a + b;
}

-> Aqui será determinando que essa função pode ser usada fora desse arquivo.

## 2 - Import (importar coisas)

No main.js:
import { somar } from './utils.js';

console.log(somar(2,3));

-> Aqui você está puxando algo de outro arquivo

# ______________________________________________________________________________________________

# . 2 - Tipos de export 
## 1 - Name export (mais comum)

Você pode exportar várias coisas:

export const PI = 3.14;

export function multiplicar(a,b) {
    return a * b;
}

Importando:

import { PI, multiplicar } from './utils.js';

## 2 - Default export (export padrão)

SÓ pode ter UM por arquivo:

export default function saudacao() {
    console.log("Olá");
}

importando:

import saudacao from './utils.js';

-> Aqui é possível dar qualquer nome na importação.

## 3 - Misturando default export com name export

export const nome = "Nicolas";

export default function teste() {}

importando:

import teste, { nome } from './utils.js';

# ______________________________________________________________________________________________

# . 3 - Como isso funciona

## 1 - No navegador:

É necessário usar:
<script type="module" src="main.js"></script>

## 2 - Node.js:

No Node moderno:
-> usar "type": "module" no package.json
-> ou usar .mjs

# ______________________________________________________________________________________________

# . 4 - Conceitos importantes

## 1 - Cada arquivo é um módulo
// qualquer arquivo já é um módulo isolado
-> nada vaza automaticamente pro global, ou seja, o que você define em um arquivo não interfere no outro automaticamente.

## 2 - Import é estático (importante pra bundlers)
import { algo } from './arquivo.js';
-> isso é analisado em tempo de compilação, ou seja, o bundler sabe exatamente o que está sendo importado e pode otimizar (tree-shaking).
-> estático quer dizer que não é possível usar variáveis ou condições para importar dinamicamente (isso é possível com import() dinâmico).
-> bundlers são ferramentas que pegam todo o código e transformam em um único arquivo otimizado para produção.

## 3 - Caminho relativo
'./arquivo.js'; // mesma pasta
'../arquivo.js'; // pasta acima

# ______________________________________________________________________________________________

# . 5 - Tree-shaking
-> é uma técnica de otimização onde o bundler remove código que não está sendo usado (dead code elimination).
-> isso só funciona com ES6 Modules porque o import é estático, ou seja, o bundler sabe exatamente o que está sendo importado e pode eliminar o que não é usado.
-> isso melhora a performance do aplicativo, reduzindo o tamanho do bundle final.

# ______________________________________________________________________________________________

# . 6 - Erros comuns
## 1 - Esquecer de usar a extensão .js
import { algo } from './arquivo'; // isso pode causar erro dependendo do ambiente

## 2 - Misturar default export com name export sem entender a sintaxe
export default function teste() {}
export const nome = "Nicolas";

import teste, { nome } from './utils.js'; // isso é correto
import { teste, nome } from './utils.js'; // isso é incorreto, teste é default export
import teste from './utils.js'; // isso é correto, mas não importa nome

## 3 - Não usar type="module" no navegador
<script src="main.js"></script> // isso não funciona, precisa ser <script type="module" src="main.js"></script>

# ______________________________________________________________________________________________

# . 7 - Exemplo real completo

## 1 - utils.js
export function formatarNome(nome) {
    return nome.trim().toUpperCase();
}

export const idade = 20;

## 2 - services.js
export default function buscarUsuario() {
    return {
        nome: "Nicolas",
    };
}

## 3 - main.js
import buscarUsuario from './services.js';
import { formatarNome, idade } from './utils.js';

const usuario = buscarUsuario();

console.log(formatarNome(usuario.nome)); // "NICOLAS"
console.log(idade); // 20

## 4 - Quando usar o quê?

- name export -> padrão do mercado, recomendado para a maioria dos casos
- default export -> quando o módulo tem uma única responsabilidade clara, ou seja, exporta apenas uma coisa (ex: um componente React, uma função utilitária principal, etc)

# ______________________________________________________________________________________________

