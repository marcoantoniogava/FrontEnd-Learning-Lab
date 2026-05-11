# . 1 - O que é um programa

Um programa é um conjunto de instruções que dizem ao computador o que fazer.

Essas instruções são escritas em alguma linguagem de programação:
- JavaScript
- C
- Java
- Python
- etc

Mas o computador não entende essas linguagens diretamente.

No final das contas, tudo vira:
- sinais elétricos
- operações matemáticas
- instruções binárias (0 e 1)

Ou seja:

```txt
Seu código
↓
Tradutor (compilador/interpreter)
↓
Código de máquina
↓
CPU executa
```

---

# . 2 - O computador por trás dos panos

Os principais componentes envolvidos:

| Componente | Função |
|---|---|
| CPU | executa instruções |
| RAM | armazena dados temporários |
| Disco/SSD | armazena arquivos permanentemente |
| Sistema Operacional | controla tudo |
| GPU | processamento gráfico |
| Barramentos | comunicação entre peças |

---

# . 3 - Como um programa começa

Quando você abre um programa:

```txt
Você clica no .exe
↓
Sistema operacional carrega ele na RAM
↓
CPU começa a executar instruções
↓
Programa roda
```

Exemplo:
- Chrome
- VSCode
- jogo
- node.js
- app mobile

Todos seguem essa ideia.

---

# . 4 - O que existe dentro de um programa

Basicamente:
- instruções
- memória
- variáveis
- funções
- dados
- loops
- condições

Exemplo:

```js
let nome = "nicolas";

console.log(nome);
```

Por trás:
- memória é reservada
- string é armazenada
- variável aponta praquele local
- console.log executa uma função do ambiente

---

# . 5 - CPU executa tudo em sequência

A CPU funciona num ciclo:

```txt
buscar instrução
↓
decodificar
↓
executar
↓
próxima instrução
```

Isso acontece bilhões de vezes por segundo.

Exemplo simplificado:

```js
let x = 5;
let y = 10;

console.log(x + y);
```

A CPU faz algo parecido com:

```txt
carrega 5
salva memória
carrega 10
salva memória
soma valores
envia resultado
```

---

# . 6 - Memória RAM

RAM é memória temporária.

Tudo que está rodando fica nela:
- navegador
- jogos
- variáveis
- imagens
- abas
- processos

Quando o programa fecha:
- memória é liberada

---

# . 7 - Sistema Operacional

O sistema operacional é o intermediário entre:
- hardware
- programas

Exemplos:
- Windows
- Linux
- Android
- iOS

Ele controla:
- arquivos
- memória
- permissões
- processos
- dispositivos

Sem SO seria um caos do caralho kkkkk cada programa teria que controlar hardware direto.

---

# . 8 - O que é um processo

Quando um programa roda:
ele vira um processo.

Cada processo possui:
- memória própria
- execução própria
- recursos próprios

Exemplo:
- abrir 3 Chromes
- 3 processos diferentes

---

# . 9 - Threads

Threads são "linhas de execução".

Um programa pode fazer várias coisas ao mesmo tempo.

Exemplo:
Chrome:
- uma thread renderiza
- outra baixa arquivos
- outra executa JS

---

# . 10 - Como linguagens funcionam

Existem dois modelos principais:

## Compiladas

Exemplo:
- C
- C++
- Rust

O código vira executável antes de rodar.

```txt
codigo.c
↓
compilador
↓
programa.exe
```

Mais rápidas normalmente.

---

## Interpretadas

Exemplo:
- JavaScript
- Python

Um interpretador lê e executa em tempo real.

```txt
codigo.js
↓
engine JS
↓
execução
```

---

# . 11 - JavaScript especificamente

No navegador:

```txt
JavaScript
↓
Engine V8 / SpiderMonkey
↓
Bytecode / otimizações
↓
CPU
```

O navegador:
- parseia o código
- cria AST
- compila
- otimiza
- executa

---

# . 12 - O que é binário

Computadores funcionam com:
- ligado
- desligado

Representado por:
- 1
- 0

Tudo vira binário:
- texto
- imagens
- vídeos
- música
- código

Exemplo:

```txt
A = 01000001
```

---

# . 13 - O que é linguagem de máquina

É o nível mais baixo executado pela CPU.

Exemplo real:

```txt
10110000 01100001
```

Isso representa instruções reais do processador.

---

# . 14 - Abstração

Programação inteira é baseada em abstração.

Você escreve:

```js
fetch("/usuarios");
```

Mas por trás:
- navegador abre conexão
- usa TCP/IP
- envia pacotes
- SO conversa com placa de rede
- hardware envia sinais elétricos
- servidor responde
- navegador parseia resposta

Você usa uma interface simples escondendo bilhões de operações.

---

# . 15 - Fluxo completo simplificado

```txt
Você escreve código
↓
Compilador/interpreter traduz
↓
Sistema operacional carrega
↓
Programa vai pra RAM
↓
CPU executa instruções
↓
Programa interage com hardware
↓
Resultado aparece na tela
```

---

# . 16 - Resumo

Programação no fundo é:
- manipulação de memória
- controle de fluxo
- transformação de dados

Só muda o nível de abstração.

No baixo nível:
- você controla bytes

No alto nível:
- você manipula objetos e funções

Mas no final...
tudo ainda vira:
- memória
- instrução
- CPU
- binário
