# Sumário

- [1 - O que é o DOM](#1-o-que-e-o-dom)
- [2 - Objeto principal document](#2-objeto-principal-document)
- [3 - Buscar elementos no DOM](#3-buscar-elementos-no-dom)
- [4 - Alterar texto e HTML](#4-alterar-texto-e-html)
- [5 - Alterar CSS pelo DOM](#5-alterar-css-pelo-dom)
- [6 - Criar elementos novos](#6-criar-elementos-novos)
- [7 - Estrutura de árvore do DOM](#7-estrutura-de-arvore-do-dom)
- [8 - Estrutura de dados real](#8-estrutura-de-dados-real)
- [9 - Por que document existe](#9-por-que-document-existe)
- [10 - JS Engine vs Browser Engine](#10-js-engine-vs-browser-engine)
- [11 - Por trás do querySelector](#11-por-tras-do-queryselector)
- [12 - Como innerText funciona](#12-como-innertext-funciona)
- [13 - DOM não é a tela](#13-dom-nao-e-a-tela)
- [14 - Layout reflow](#14-layout-reflow)
- [15 - Paint](#15-paint)
- [16 - Por que NodeList existe](#16-por-que-nodelist-existe)
- [17 - DOM vive fora do heap JS puro](#17-dom-vive-fora-do-heap-js-puro)
- [18 - Garbage collector e DOM](#18-garbage-collector-e-dom)
- [RESUMÃO DE REVISÃO](#resumao-de-revisao)



<a id="1-o-que-e-o-dom"></a>

# 1 - O que é o DOM

## Teoria

DOM significa **Document Object Model**.

Quando o navegador lê seu HTML, ele transforma tudo em objetos manipuláveis pelo JavaScript.

O JavaScript não mexe no arquivo HTML diretamente. Ele mexe em objetos que representam o HTML dentro da memória do navegador.

Com o DOM, conseguimos alterar dinamicamente o conteúdo da página, criar elementos, remover elementos, alterar estilos, escutar eventos e modificar a estrutura da página enquanto ela está sendo usada.


## Código

Exemplo de HTML:

```html
<h1>Olá</h1>
<button>Clique</button>
```

Por meio do DOM, isso vira algo que o JavaScript consegue acessar:

- Um objeto que representa o `h1`.
- Um objeto que representa o `button`.

Exemplo simples:

```html
<h1 id="titulo">Olá</h1>
<button id="botao">Trocar título</button>
```

```js
const btn = document.getElementById("botao");
const titulo = document.getElementById("titulo");

btn.addEventListener("click", function() {
    titulo.textContent = "Título alterado!";
});
```


## Prática

Nesse exemplo:

- O JavaScript acessa o botão e o título por meio do DOM.
- O JavaScript adiciona um evento de clique ao botão.
- Quando o botão é clicado, o texto do título é alterado.

Na prática, o DOM é usado quando queremos que a página reaja ao usuário sem precisar recarregar tudo.

Exemplos reais:

- Alterar um título depois de um clique.
- Mostrar ou esconder menus.
- Criar elementos dinamicamente.
- Remover cards, mensagens ou itens de uma lista.
- Atualizar texto, classes e estilos com JavaScript.


## Por trás dos panos

O navegador transforma o HTML em uma estrutura de objetos.

Esses objetos ficam organizados em uma árvore, chamada **árvore DOM**.

Quando usamos JavaScript para acessar algo como `document.getElementById("titulo")`, o JavaScript conversa com essa estrutura criada pelo navegador.

Então, quando alteramos `textContent`, não estamos editando o arquivo HTML original. Estamos alterando o objeto que representa aquele elemento na página atual.

Depois disso, o navegador atualiza a tela para refletir essa mudança.


## Resumo rápido

O DOM é a representação do HTML em forma de objetos.

O JavaScript usa o DOM para acessar e alterar a página.

Alterar o DOM muda a página visível no navegador, mas não altera o arquivo HTML original.



<a id="2-objeto-principal-document"></a>

# 2 - Objeto principal document

## Teoria

O objeto `document` representa a página inteira.

Ele é o ponto de entrada principal para acessar, buscar, criar e manipular elementos do DOM.

Quando usamos `document`, estamos dizendo ao JavaScript que queremos interagir com o documento HTML carregado no navegador.


## Código

```js
document.getElementById("id");
```

Acessa um elemento pelo `id`.

```js
document.querySelector("seletor");
```

Acessa o primeiro elemento que corresponde ao seletor CSS.

```js
document.createElement("tag");
```

Cria um novo elemento HTML.


## Prática

Esses métodos são parte do DOM e permitem manipular a estrutura da página.

Uso comum:

- `getElementById` quando você sabe exatamente o `id` do elemento.
- `querySelector` quando quer usar seletores CSS, como classes, tags, atributos ou seletores mais complexos.
- `createElement` quando precisa criar uma tag nova com JavaScript.


## Por trás dos panos

O `document` é uma interface fornecida pelo navegador.

Ele conecta o JavaScript à estrutura DOM que foi criada a partir do HTML.

Quando chamamos métodos como `getElementById`, `querySelector` ou `createElement`, estamos pedindo ao navegador para procurar ou criar objetos dentro da árvore DOM.


## Resumo rápido

`document` representa a página inteira.

É por ele que normalmente começamos a manipulação do DOM.

Com `document`, podemos buscar elementos, criar elementos e alterar a estrutura da página.



<a id="3-buscar-elementos-no-dom"></a>

# 3 - Buscar elementos no DOM

## Teoria

Buscar elementos é uma das tarefas mais comuns ao trabalhar com DOM.

Antes de alterar um texto, aplicar uma classe, escutar um evento ou remover uma tag, primeiro precisamos acessar o elemento correto.

Existem várias formas de buscar elementos:

- Por `id`.
- Por seletor CSS.
- Por seletores que retornam vários elementos.


## Código

Buscar por `id`:

```js
const titulo = document.getElementById("titulo");
```

Buscar usando seletor CSS:

```js
const titulo = document.querySelector("#titulo");
```

Buscar vários elementos:

```js
const itens = document.querySelectorAll(".item");
```


## Prática

Use `getElementById` quando o elemento tiver um `id` único:

```html
<h1 id="titulo">Olá</h1>
```

```js
const titulo = document.getElementById("titulo");
```

Use `querySelector` quando quiser mais flexibilidade:

```js
const titulo = document.querySelector("#titulo");
const primeiroItem = document.querySelector(".item");
const botao = document.querySelector("button");
```

Use `querySelectorAll` quando quiser pegar todos os elementos que combinam com o seletor:

```js
const itens = document.querySelectorAll(".item");
```

Isso retorna uma `NodeList` com todos os elementos encontrados.


## Por trás dos panos

### getElementById

Por trás dos panos, `getElementById` procura na página até encontrar o elemento com o `id` correspondente.

Como `id` deve ser único, essa busca costuma ser bem direta e eficiente.


### querySelector

`querySelector` é mais flexível porque aceita seletores CSS.

Ele pode buscar por:

- `id`.
- Classe.
- Tag.
- Atributo.
- Relações entre elementos.
- Seletores compostos.

Exemplo:

```js
const item = document.querySelector(".container .item");
```

Nesse caso, o navegador precisa verificar os elementos para encontrar quem tem a classe `item` e também está dentro de um elemento com a classe `container`.

Por isso, `querySelector` pode ser mais custoso do que `getElementById`, especialmente quando o seletor é complexo ou a página é muito grande.


### querySelectorAll e NodeList

`querySelectorAll` faz o mesmo processo de análise do seletor, mas retorna todos os elementos que correspondem a ele.

```js
const itens = document.querySelectorAll(".item");
```

O retorno é uma `NodeList`.

Uma `NodeList` é uma coleção de nós.

Um nó é um tipo de objeto que representa algo dentro do DOM, como:

- Um elemento.
- Um texto.
- Um comentário.
- Outras partes da estrutura da página.

A `NodeList` parece um array, mas não é um array de verdade.

Ela pode ser percorrida, mas não possui todos os métodos de array disponíveis em um array comum.

Em páginas grandes, `querySelectorAll` pode ser custoso, porque o navegador precisa analisar o seletor para vários elementos da página.


## Resumo rápido

Use `getElementById` para buscar por `id`.

Use `querySelector` para buscar com seletores CSS.

Use `querySelectorAll` para buscar vários elementos.

`querySelectorAll` retorna uma `NodeList`, que parece array, mas não é um array completo.



<a id="4-alterar-texto-e-html"></a>

# 4 - Alterar texto e HTML

## Teoria

Depois de buscar um elemento, podemos alterar seu conteúdo.

As formas mais comuns são:

- `textContent`.
- `innerText`.
- `innerHTML`.

Cada uma tem um comportamento diferente.


## Código

Alterando texto com `textContent`:

```js
titulo.textContent = "Novo título";
```

Alterando texto com `innerText`:

```js
titulo.innerText = "Novo título";
```

Alterando HTML interno com `innerHTML`:

```js
titulo.innerHTML = "<span>Novo título</span>";
```


## Prática

Use `textContent` quando quiser alterar apenas texto:

```js
titulo.textContent = "Título alterado!";
```

Isso altera o conteúdo de texto do elemento sem interpretar tags HTML.

Use `innerHTML` quando quiser inserir HTML:

```js
titulo.innerHTML = "<span>Novo título</span>";
```

Isso permite adicionar tags e formatação dentro do elemento.

Use `innerHTML` com cuidado, principalmente quando o conteúdo vier de usuários ou de fontes externas.


## Por trás dos panos

### textContent

`textContent` pega ou altera o conteúdo de texto do elemento.

Ele considera o texto como texto puro, incluindo espaços e quebras de linha.

Ele não interpreta tags HTML.


### innerText

`innerText` pega ou altera o texto visível do elemento.

Ele leva em conta o que está sendo renderizado visualmente na página.

Por isso, pode ignorar textos escondidos e tratar espaços ou quebras de linha de forma diferente.


### innerHTML

`innerHTML` altera o conteúdo HTML interno de um elemento.

Isso permite inserir tags:

```js
titulo.innerHTML = "<span>Novo título</span>";
```

Mas existe um risco importante: **XSS**.

XSS significa **Cross-Site Scripting**.

É um tipo de vulnerabilidade em que um atacante injeta código malicioso em uma página.

Se o site não tiver proteção contra isso, o código malicioso pode ser executado no navegador dos usuários.

Isso pode causar problemas como:

- Roubo de dados.
- Redirecionamento para sites maliciosos.
- Execução de scripts indesejados.
- Alteração indevida do comportamento da página.


## Resumo rápido

`textContent` altera texto puro.

`innerText` trabalha com texto visível.

`innerHTML` permite inserir HTML, mas exige cuidado com segurança.

Evite usar `innerHTML` com conteúdo vindo diretamente do usuário.



<a id="5-alterar-css-pelo-dom"></a>

# 5 - Alterar CSS pelo DOM

## Teoria

O DOM permite alterar estilos de elementos com JavaScript.

Podemos fazer isso diretamente pelo atributo `style` ou manipulando classes com `classList`.

Embora seja possível alterar CSS diretamente pelo JavaScript, geralmente é mais organizado usar classes.


## Código

Alterando estilo direto:

```js
titulo.style.color = "red";
```

Propriedades CSS com hífen viram `camelCase` no JavaScript:

```js
titulo.style.backgroundColor = "blue";
titulo.style.fontSize = "24px";
```

Manipulando classes:

```js
titulo.classList.add("classe1");
titulo.classList.remove("classe2");
titulo.classList.toggle("classe3");
```


## Prática

Use `style` para alterações pequenas, diretas e pontuais:

```js
titulo.style.color = "red";
```

Use `classList` quando quiser manter o CSS separado do JavaScript:

```css
.ativo {
    color: red;
    font-weight: bold;
}
```

```js
titulo.classList.add("ativo");
```

Isso deixa o código mais organizado e reutilizável.


## Por trás dos panos

Quando usamos `style`, estamos alterando o estilo inline do elemento.

Exemplo:

```js
titulo.style.color = "red";
```

Isso é semelhante a colocar diretamente no HTML:

```html
<h1 style="color: red;">Título</h1>
```

Quando usamos `classList`, o JavaScript apenas adiciona ou remove classes.

O visual final continua sendo controlado pelo CSS.

Isso é melhor para manutenção porque separa responsabilidades:

- HTML fica com a estrutura.
- CSS fica com o visual.
- JavaScript fica com o comportamento.


## Resumo rápido

`style` altera CSS diretamente no elemento.

No JavaScript, propriedades CSS usam `camelCase`.

`classList` é mais recomendado para manter o CSS separado do JS.

Classes tornam os estilos mais reutilizáveis e organizados.



<a id="6-criar-elementos-novos"></a>

# 6 - Criar elementos novos

## Teoria

O DOM permite criar elementos HTML usando JavaScript.

Isso é útil quando a página precisa gerar conteúdo dinamicamente.

Por exemplo:

- Criar um novo parágrafo.
- Adicionar uma mensagem.
- Inserir um item em uma lista.
- Renderizar cards vindos de uma API.


## Código

```js
const paragraph = document.createElement("p");
paragraph.textContent = "Novo parágrafo";

document.body.appendChild(paragraph);
```


## Prática

Nesse exemplo:

- `document.createElement("p")` cria uma nova tag `p`.
- `paragraph.textContent` define o texto do parágrafo.
- `document.body.appendChild(paragraph)` adiciona o parágrafo no final do `body`.

Na prática, uma tag foi criada pelo JavaScript e colocada dentro da página.


## Por trás dos panos

Quando usamos `createElement`, o navegador cria um novo objeto DOM em memória.

Esse elemento ainda não aparece na tela imediatamente.

Ele só passa a fazer parte da página quando é inserido em algum lugar da árvore DOM.

No exemplo:

```js
document.body.appendChild(paragraph);
```

O novo parágrafo é anexado ao `body`.

Depois disso, o navegador pode precisar atualizar a renderização para mostrar o novo elemento na tela.


## Resumo rápido

`createElement` cria uma nova tag em memória.

`textContent` define o texto do elemento.

`appendChild` insere o elemento na árvore DOM.

Depois de inserido, o elemento aparece na página.



<a id="7-estrutura-de-arvore-do-dom"></a>

# 7 - Estrutura de árvore do DOM

## Teoria

O DOM é organizado como uma árvore.

Quando o navegador abre um site, ele segue um processo:

1. O navegador lê o HTML.
2. O navegador monta a árvore DOM.
3. O JavaScript acessa essa árvore.
4. O JavaScript altera nós da árvore.
5. A tela é atualizada.

Cada parte do documento vira um nó dentro dessa árvore.


## Código

HTML:

```html
<body>
    <div>
        <h1>Olá</h1>
    </div>
</body>
```

Estrutura em árvore:

```txt
body
└── div
    └── h1
```

Propriedades úteis para navegar pela árvore:

```js
element.parentElement;
element.children;
element.nextElementSibling;
```


## Prática

Como o DOM é uma árvore, podemos navegar entre elementos relacionados.

Exemplos:

- Subir para o elemento pai com `parentElement`.
- Acessar os filhos com `children`.
- Ir para o próximo elemento irmão com `nextElementSibling`.

Isso é útil quando você já tem um elemento e quer acessar elementos próximos sem fazer uma nova busca global no documento.


## Por trás dos panos

O navegador não enxerga o HTML apenas como texto depois que ele é processado.

Ele cria uma árvore de objetos conectados.

Cada elemento conhece sua relação com outros elementos:

- Quem é seu pai.
- Quem são seus filhos.
- Quem são seus irmãos.

Por isso existem propriedades como:

```js
element.parentElement;
element.children;
element.nextElementSibling;
```

Essas propriedades permitem navegar pela estrutura já montada pelo navegador.


## Resumo rápido

O DOM é uma árvore de nós.

Elementos podem ter pai, filhos e irmãos.

O JavaScript consegue navegar por essa estrutura.

Alterações nos nós podem refletir diretamente na tela.



<a id="8-estrutura-de-dados-real"></a>

# 8 - Estrutura de dados real

## Teoria

O DOM é basicamente uma árvore de nós conectados por ponteiros ou referências.

Cada nó sabe onde está dentro da árvore.

Um elemento pode ter:

- Um pai.
- Vários filhos.
- Atributos.
- Conteúdo de texto.
- Outros elementos dentro dele.

Essa ideia explica por que conseguimos navegar pelo DOM usando propriedades como `parentElement`, `children` e `nextElementSibling`.


## Código

Uma representação simplificada de um nó poderia ser assim:

```js
class Node {
    parent;
    children = [];
}
```

Um elemento HTML poderia ser algo parecido com:

```js
class Element extends Node {
    tagName;
    attributes = {};
}
```

Um nó de texto poderia ser algo parecido com:

```js
class TextNode extends Node {
    textContent;
}
```

Então este HTML:

```html
<h1 id="x">Olá</h1>
```

Poderia virar algo parecido com:

```js
{
    type: "element",
    tagName: "H1",
    attributes: {
        id: "x"
    },
    children: [
        {
            type: "text",
            textContent: "Olá"
        }
    ]
}
```


## Prática

Essa estrutura explica por que um elemento pode conter texto dentro dele.

No exemplo:

```html
<h1 id="x">Olá</h1>
```

O `h1` não é apenas uma string.

Ele é um nó de elemento que contém um filho do tipo texto.

Na prática, quando alteramos o texto de um elemento, estamos mexendo em nós internos da árvore DOM.


## Por trás dos panos

Internamente, nos navegadores reais, essa estrutura é muito mais complexa.

A implementação não é feita com classes JavaScript simples como nos exemplos acima.

Em muitos navegadores, boa parte da estrutura real do DOM é implementada em linguagens como C++.

O JavaScript enxerga uma interface de alto nível, mas por baixo existem estruturas nativas otimizadas pela engine do navegador.


## Resumo rápido

O DOM é uma árvore de nós conectados por referências.

Elementos, textos e outras partes da página são nós.

Um elemento pode ter atributos e filhos.

Internamente, a estrutura real é muito mais complexa do que um objeto JavaScript comum.



<a id="9-por-que-document-existe"></a>

# 9 - Por que document existe

## Teoria

`document` existe porque o navegador expõe uma API para o JavaScript interagir com a página.

Quando o JavaScript roda no browser, ele recebe acesso a vários objetos prontos fornecidos pelo ambiente do navegador.

Esses objetos não fazem parte do JavaScript puro.

Eles são APIs do navegador.


## Código

Exemplos de objetos e APIs disponíveis no navegador:

```js
window;
document;
history;
location;
fetch;
console;
```


## Prática

Usamos `document` para acessar o HTML carregado na página.

Usamos `window` para acessar informações e recursos da janela do navegador.

Usamos `history` para trabalhar com histórico de navegação.

Usamos `location` para ler ou alterar a URL.

Usamos `fetch` para fazer requisições HTTP.

Usamos `console` para exibir mensagens no console do navegador.


## Por trás dos panos

JavaScript por si só não conhece HTML.

A linguagem JavaScript pura sabe executar código, criar variáveis, funções, objetos, classes, arrays e estruturas de controle.

Mas ela não sabe, sozinha, o que é uma tag `h1`, um botão ou uma página HTML.

Quem entrega esse acesso é o navegador.

O navegador fornece objetos como `document`, `window`, `history`, `location`, `fetch` e `console` para que o JavaScript consiga interagir com o ambiente da página.


## Resumo rápido

`document` é uma API fornecida pelo navegador.

JavaScript puro não conhece HTML.

O navegador entrega objetos prontos para o JS interagir com a página.

`document` é a porta de entrada para manipular o DOM.



<a id="10-js-engine-vs-browser-engine"></a>

# 10 - JS Engine vs Browser Engine

## Teoria

Dentro do navegador existem partes diferentes trabalhando juntas.

A **JS Engine** executa o JavaScript.

A **Browser Engine** ou engine de renderização cuida do HTML, CSS, DOM, eventos e renderização visual.

Elas trabalham em conjunto para transformar código em uma página interativa.


## Código

A JS Engine entende e executa código JavaScript:

```js
const x = 5 + 2;
```

Exemplos de JS Engines:

- V8, usada no Chrome e no Node.js.
- SpiderMonkey, usada no Firefox.
- JavaScriptCore, usada no Safari.


## Prática

Quando escrevemos JavaScript, a JS Engine executa o código.

Quando esse código acessa o DOM, o navegador precisa envolver outra parte do sistema: a engine responsável pela página.

Exemplo:

```js
const titulo = document.querySelector("h1");
titulo.textContent = "Novo título";
```

Nesse caso:

- A JS Engine executa o código JavaScript.
- A Browser Engine fornece acesso ao `document`.
- A estrutura DOM é consultada.
- O texto do nó é alterado.
- A renderização pode ser atualizada.


## Por trás dos panos

A JS Engine cuida de coisas como:

- Executar expressões.
- Criar variáveis.
- Chamar funções.
- Gerenciar objetos JavaScript.
- Trabalhar com memória do lado do JS.

A Browser Engine cuida de coisas como:

- DOM.
- HTML Parser.
- CSS.
- CSSOM.
- Renderização.
- Eventos.
- Layout.
- Paint.
- Composite.

A JS Engine conversa com a Browser Engine quando o código JavaScript precisa acessar recursos do navegador.


## Resumo rápido

A JS Engine executa JavaScript.

A Browser Engine cuida do DOM, HTML, CSS, eventos e renderização.

Quando o JS acessa o DOM, essas partes precisam conversar.

O DOM não é apenas JavaScript puro.



<a id="11-por-tras-do-queryselector"></a>

# 11 - Por trás do querySelector

## Teoria

`querySelector` permite buscar elementos usando seletores CSS.

Ele é flexível porque aceita o mesmo tipo de seletor usado no CSS.

Porém, essa flexibilidade tem custo: o navegador precisa interpretar o seletor e procurar elementos compatíveis na árvore DOM.


## Código

```js
document.querySelector(".btn");
```

Exemplo alterando o nó encontrado:

```js
const titulo = document.querySelector("h1");
titulo.innerText = "Novo";
```


## Prática

Use `querySelector` quando quiser buscar um elemento por seletores CSS.

Exemplos:

```js
const botao = document.querySelector(".btn");
const titulo = document.querySelector("#titulo");
const primeiroInput = document.querySelector("form input");
```

Esse método é excelente para praticidade e legibilidade.

Em páginas muito grandes ou com seletores muito complexos, vale ter atenção ao custo da busca.


## Por trás dos panos

Quando executamos:

```js
document.querySelector(".btn");
```

Acontece algo parecido com:

1. O JavaScript chama um método do objeto `document`.
2. O navegador recebe o seletor CSS.
3. O navegador interpreta o seletor.
4. O navegador percorre a árvore DOM procurando um elemento compatível.
5. O navegador retorna uma referência ao nó encontrado.

### Isso retorna uma cópia?

Não.

`querySelector` retorna uma referência ao objeto real da árvore DOM.

Por isso, quando fazemos:

```js
const titulo = document.querySelector("h1");
titulo.innerText = "Novo";
```

O próprio nó da árvore DOM foi alterado.

Não é uma cópia separada.

É uma referência para o elemento real representado na estrutura do navegador.


## Resumo rápido

`querySelector` usa seletores CSS para buscar elementos.

O navegador interpreta o seletor e procura na árvore DOM.

O retorno não é uma cópia.

O retorno é uma referência ao nó real do DOM.



<a id="12-como-innertext-funciona"></a>

# 12 - Como innerText funciona

## Teoria

`innerText` altera o texto visível de um elemento.

Quando definimos um novo valor em `innerText`, o navegador precisa atualizar os nós internos daquele elemento.

Isso parece simples, mas internamente envolve alteração da estrutura de filhos do nó.


## Código

```js
titulo.innerText = "Novo";
```

Representação simplificada do que pode acontecer:

```js
h1.children = [TextNode("Novo")];
```


## Prática

Use `innerText` quando quiser alterar o texto visível de um elemento.

Exemplo:

```html
<h1>Olá</h1>
```

```js
const titulo = document.querySelector("h1");
titulo.innerText = "Novo";
```

Depois da execução, o conteúdo visível do `h1` passa a ser `Novo`.


## Por trás dos panos

Quando fazemos:

```js
titulo.innerText = "Novo";
```

O navegador pode seguir um processo parecido com:

1. Encontra o nó `h1`.
2. Remove os filhos de texto antigos.
3. Cria um novo `TextNode`.
4. Coloca esse `TextNode` como filho do `h1`.
5. Marca a interface para re-renderizar.

Na prática, é como se o navegador fizesse algo parecido com:

```js
h1.children = [TextNode("Novo")];
```

Isso reforça uma ideia importante: texto dentro de um elemento também faz parte da árvore DOM.


## Resumo rápido

`innerText` altera o texto visível.

Internamente, o navegador pode remover nós de texto antigos e criar novos.

O texto dentro de uma tag também é representado como nó.

Alterar texto pode marcar a interface para nova renderização.



<a id="13-dom-nao-e-a-tela"></a>

# 13 - DOM não é a tela

## Teoria

DOM não é a mesma coisa que pixels da tela.

O DOM é uma estrutura lógica.

Ele representa a organização do documento, mas ainda não é a imagem final que aparece no monitor.

Depois do DOM, existem outras estruturas e etapas antes de algo virar tela.


## Código

Fluxo simplificado:

```txt
HTML -> DOM
CSS -> CSSOM
DOM + CSSOM -> Render Tree
Render Tree -> Layout
Layout -> Paint
Paint -> Composite
Composite -> Tela
```


## Prática

Quando alteramos o DOM, nem sempre estamos alterando pixels diretamente.

Exemplo:

```js
const titulo = document.querySelector("h1");
titulo.textContent = "Novo título";
```

Esse código altera a estrutura lógica.

Depois, o navegador decide quais etapas de renderização precisam ser refeitas para atualizar a tela.


## Por trás dos panos

Depois do DOM, existe o **CSSOM**.

CSSOM significa **CSS Object Model**.

Ele é a árvore do CSS interpretado pelo navegador.

Depois, o navegador combina:

- DOM.
- CSSOM.

Essa combinação forma a **Render Tree**.

A Render Tree mistura estrutura e estilo, mas inclui apenas elementos visíveis.

Depois disso, o navegador passa por etapas como:

- Layout.
- Paint.
- Composite.

### Fluxo real

```txt
HTML -> DOM
CSS -> CSSOM
DOM + CSSOM -> Render Tree
Render Tree -> Layout
Layout -> Paint
Paint -> Composite
Tela
```


## Resumo rápido

DOM não é pixels da tela.

DOM é estrutura lógica do documento.

CSS vira CSSOM.

DOM + CSSOM formam a Render Tree, que depois passa por layout, paint e composite.



<a id="14-layout-reflow"></a>

# 14 - Layout reflow

## Teoria

Layout, também chamado de **reflow**, é a etapa em que o navegador calcula tamanhos e posições dos elementos.

Quando uma alteração afeta dimensões, posição ou fluxo da página, o navegador pode precisar recalcular o layout.

Esse processo pode ser caro em termos de performance.


## Código

Alteração que pode causar layout/reflow:

```js
div.style.width = "500px";
```

Exemplo problemático:

```js
for (let i = 0; i < 1000; i++) {
    el.style.width = i + "px";
}
```


## Prática

Mudanças que podem gerar reflow:

- Alterar largura.
- Alterar altura.
- Alterar posição.
- Alterar fonte.
- Inserir ou remover elementos.
- Mudar conteúdo que afeta quebra de linha.
- Alterar algo que influencia scroll.

Se isso acontece muitas vezes em sequência, a página pode ficar lenta.

Por isso surge a necessidade de otimização.


## Por trás dos panos

Se mudamos:

```js
div.style.width = "500px";
```

O navegador pode precisar recalcular:

- Tamanho do elemento.
- Posição do elemento.
- Impacto nos elementos irmãos.
- Quebras de linha.
- Área de scroll.
- Espaço ocupado no layout.

Esse processo é chamado de **reflow** ou **layout**.

Ele é caro porque uma mudança em um elemento pode afetar vários outros elementos ao redor.

No exemplo:

```js
for (let i = 0; i < 1000; i++) {
    el.style.width = i + "px";
}
```

O navegador pode ser forçado a lidar com vários recálculos de layout.


## Resumo rápido

Layout/reflow calcula tamanho e posição dos elementos.

Mudanças de largura, altura, posição e conteúdo podem causar reflow.

Reflow pode ser caro.

Várias alterações seguidas podem prejudicar a performance.



<a id="15-paint"></a>

# 15 - Paint

## Teoria

Depois do layout, o navegador precisa desenhar os pixels dos elementos.

Essa etapa é chamada de **paint**.

Paint envolve transformar as informações visuais em pixels na tela.


## Código

Exemplo de alteração que pode exigir pintura:

```js
titulo.style.color = "red";
```

Outro exemplo:

```js
card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
```


## Prática

Paint acontece quando o navegador precisa redesenhar aspectos visuais, como:

- Cor.
- Borda.
- Sombra.
- Texto.
- Fundo.
- Imagens.

Nem toda alteração visual exige reflow, mas pode exigir paint.

Por exemplo, mudar apenas a cor de um texto normalmente não exige recalcular a posição dos elementos, mas exige redesenhar os pixels.


## Por trás dos panos

Depois que o layout define onde cada coisa fica, o paint define como cada coisa aparece visualmente.

O navegador redesenha pixels considerando informações como:

- Cor do texto.
- Cor de fundo.
- Bordas.
- Sombras.
- Imagens.
- Decoração visual.

Em seguida, o navegador pode passar para a etapa de composição, onde camadas são combinadas para formar a imagem final.


## Resumo rápido

Paint é a etapa de desenhar pixels.

Ele acontece depois do layout.

Mudanças de cor, borda, sombra e texto podem exigir paint.

Paint não é a mesma coisa que DOM; é uma etapa visual posterior.



<a id="16-por-que-nodelist-existe"></a>

# 16 - Por que NodeList existe

## Teoria

`NodeList` existe porque o navegador trabalha com coleções próprias de nós do DOM.

Quando usamos métodos como `querySelectorAll`, o navegador não precisa devolver um array JavaScript comum.

Ele pode devolver uma coleção especial mais ligada à estrutura interna do DOM.


## Código

```js
document.querySelectorAll("li");
```

Isso retorna uma `NodeList`.

Outros tipos de coleções do DOM:

```txt
NodeList
HTMLCollection
```


## Prática

Use `NodeList` quando receber vários elementos do DOM.

Exemplo:

```js
const itens = document.querySelectorAll("li");

itens.forEach(function(item) {
    item.classList.add("ativo");
});
```

Se precisar usar métodos completos de array, é comum converter para array:

```js
const itens = Array.from(document.querySelectorAll("li"));
```


## Por trás dos panos

O navegador evita devolver arrays JavaScript comuns em muitos casos porque usa tipos próprios otimizados.

Exemplos:

- `HTMLCollection`.
- `NodeList`.

Essas coleções representam grupos de elementos ou nós vindos do DOM.

Elas se parecem com arrays, mas não são necessariamente arrays reais.

Essa separação faz sentido porque o DOM vive em estruturas internas do navegador, e não apenas dentro do heap JavaScript puro.


## Resumo rápido

`querySelectorAll` retorna uma `NodeList`.

`NodeList` é uma coleção especial de nós.

Ela parece array, mas não é um array completo.

O navegador usa coleções próprias otimizadas para representar partes do DOM.



<a id="17-dom-vive-fora-do-heap-js-puro"></a>

# 17 - DOM vive fora do heap JS puro

## Teoria

Objetos DOM geralmente não são apenas objetos literais JavaScript.

Eles costumam ser interfaces JavaScript apontando para estruturas nativas internas do navegador.

Ou seja: quando o JavaScript acessa um elemento, ele pode estar lidando com um wrapper para uma estrutura real implementada internamente pelo navegador.


## Código

```js
const div = document.querySelector("div");
```

Nesse código, `div` parece um objeto JavaScript comum.

Mas ele representa uma interface para algo nativo do navegador.


## Prática

Na prática, podemos usar esse objeto como se ele fosse um objeto JavaScript acessível:

```js
const div = document.querySelector("div");

div.textContent = "Novo texto";
div.classList.add("ativo");
div.remove();
```

Mas é importante lembrar que essas operações conversam com estruturas internas do navegador.


## Por trás dos panos

Objetos DOM geralmente são **wrappers JS** apontando para estruturas nativas internas do navegador.

Essas estruturas podem ser implementadas em linguagens como C++.

Então:

```js
const div = document.querySelector("div");
```

O `div` no JavaScript é uma interface para algo nativo.

Ele não é apenas um objeto literal como:

```js
const div = {
    tagName: "DIV"
};
```

Essa diferença é importante para entender performance, memória e garbage collector.


## Resumo rápido

O DOM não vive apenas como objeto JavaScript puro.

O JS acessa wrappers que apontam para estruturas nativas do navegador.

Essas estruturas costumam ser mais complexas e otimizadas.

Manipular DOM envolve comunicação entre JS e navegador.



<a id="18-garbage-collector-e-dom"></a>

# 18 - Garbage collector e DOM

## Teoria

O garbage collector remove da memória objetos que não são mais alcançáveis pelo programa.

Com DOM, precisamos tomar cuidado porque um elemento removido da página pode continuar em memória se ainda existir alguma referência JavaScript apontando para ele.

Isso pode causar memory leak.


## Código

```js
const div = document.querySelector("div");

div.remove();
```

Se ainda guardarmos uma referência:

```js
const x = div;
```

Esse elemento pode continuar em memória.


## Prática

Memory leaks podem acontecer quando removemos elementos da tela, mas continuamos guardando referências a eles.

Exemplo comum:

```js
const elementosRemovidos = [];
const div = document.querySelector("div");

div.remove();
elementosRemovidos.push(div);
```

Nesse caso, a `div` saiu do DOM visível, mas ainda está referenciada dentro do array.

Como ainda existe uma referência, o garbage collector pode não liberar essa memória.


## Por trás dos panos

Quando fazemos:

```js
div.remove();
```

O elemento é removido da árvore DOM.

Mas se fizermos:

```js
const x = div;
```

Ou se ele continuar guardado em algum array, objeto, closure ou listener, ele ainda pode estar alcançável pelo JavaScript.

Enquanto um objeto está alcançável, o garbage collector tende a preservá-lo.

Por isso, memory leaks acontecem quando partes que já deveriam morrer continuam referenciadas em algum lugar.


## Resumo rápido

Remover um elemento do DOM não garante que ele saiu da memória.

Se ainda existir referência JavaScript, ele pode continuar vivo.

Isso pode causar memory leak.

Para liberar memória, o objeto precisa deixar de ser alcançável.



<a id="resumao-de-revisao"></a>

# RESUMÃO DE REVISÃO

## Buscar elementos

Use `document.getElementById("id")` para buscar um elemento pelo `id`.

Use `document.querySelector("seletor")` para buscar o primeiro elemento que combina com um seletor CSS.

Use `document.querySelectorAll("seletor")` para buscar vários elementos.

`querySelectorAll` retorna uma `NodeList`, que parece array, mas não é um array completo.

`querySelector` retorna uma referência ao nó real do DOM, não uma cópia.


## Alterar texto

Use `textContent` para alterar texto puro.

Use `innerText` para trabalhar com texto visível.

Use `innerHTML` para inserir HTML dentro de um elemento.

Tenha cuidado com `innerHTML`, porque ele pode abrir brecha para XSS quando usado com conteúdo inseguro.

Alterar texto pode remover nós de texto antigos e criar novos `TextNode` internamente.


## CSS

Use `element.style` para alterações diretas e pontuais.

No JavaScript, propriedades CSS usam `camelCase`.

Exemplo: `background-color` vira `backgroundColor`.

Prefira `classList` para manter CSS separado do JavaScript.

Alterações visuais podem acionar paint, layout/reflow ou ambos.


## Criar elementos

Use `document.createElement("tag")` para criar um elemento novo.

Use `textContent` para definir seu texto.

Use `appendChild` para inserir o elemento na árvore DOM.

O elemento só aparece na tela depois de ser anexado ao DOM.

Internamente, o elemento pode ser um wrapper JavaScript para uma estrutura nativa do navegador.


## Navegar DOM

O DOM é uma árvore.

Elementos podem ter pai, filhos e irmãos.

Use `parentElement`, `children` e `nextElementSibling` para navegar por essa estrutura.

Isso evita buscas desnecessárias quando você já está perto do elemento desejado.

Texto dentro de uma tag também pode ser representado como nó.


## Conceito central

O DOM é a representação do HTML em forma de objetos.

O navegador lê o HTML, usa o parser para criar objetos internos e monta a árvore DOM.

O JavaScript acessa essa árvore para alterar a página.

JavaScript puro não conhece HTML; quem fornece `document`, `window` e outras APIs é o navegador.

Alterações no DOM podem acionar renderização, recálculo de layout, paint e composite.

O DOM não é a tela; ele é uma estrutura lógica usada no caminho até a renderização visual.
