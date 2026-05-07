    ```js
# . 1 - Maneiras de escrever funções 
## 1 - Função normal (function)
  Tem o próprio this
  O valor do this depende de como a função é chamada
  
  const obj = {
    nome: "Nícolas",
    falar: function () {
      console.log(this.nome);
    }
  };

  obj.falar(); // "Nícolas"

  aqui this aponta para obj

## 2 - Arrow function (=>)
  NÃO tem this próprio
  Ela herda o this do contexto onde foi criada
  
  const obj = {
    nome: "Nícolas",
    falar: () => {
      console.log(this.nome);
    }
  };

  obj.falar(); // undefined

  porque o this aqui não é do obj, é do escopo externo

  Diferença simples pra gravar
  function → tem this próprio
  arrow → herda o this

  const obj = {
    nome: "Nícolas",

    metodo1: function () {
      console.log("1:", this.nome);

      const metodo2 = () => {
        console.log("2:", this.nome);

        function metodo3() {
          console.log("3:", this.nome);

          const metodo4 = () => {
            console.log("4:", this.nome);
          };

          metodo4();
        }

        metodo3();
      };

      metodo2();
    }
  };

  obj.metodo1();

# _________________________________________________________________________

# . 2 - Closures 
## 1 - Conceito de escopo léxico
  escopo léxico é basicamente:
  uma função enxerga variáveis de onde ela foi criada, não de onde ela é chamada
  
  const nome = "global";

  function fora() {
      const nome = "fora";

      function dentro() {
        console.log(nome);
      }

      dentro();
  }

  fora(); // "fora"

  a função dentro pega o nome do lugar onde ela foi definida.

## 2 - O que é Closure
  A habilidade da função de reconhecer seu escopo léxico

  closure é quando uma função:

  lembra das variáveis do escopo onde foi criada, mesmo depois desse escopo ter "acabado"

  exemplo clássico
  function criarContador() {
      let contador = 0;

      return function() {
          contador++;
          return contador;
      };
  }

const contar = criarContador();

console.log(contar()); // 1
console.log(contar()); // 2

criarContador() termina
normalmente, contador morreria
MAS... a função retornada mantém acesso a contador
isso é closure

escopo léxico → define quem pode acessar o quê
closure → mantém esse acesso vivo na memória

-------------------------------------------------------------------------------------------

uso real
1. encapsulamento (tipo “variável privada”)
 
function criarUsuario(nome) {
    let senha = "123"; // privado

    return {
        getNome() {
            return nome;
        },
        validarSenha(s) {
            return s === senha;
        }
    };
}

const nicolas = criarUsuario("Nícolas");
console.log(nicolas.validarSenha("123"))

ninguém acessa senha direto — só via função

2. evitar variável global (organização)
function init() {
    let config = { api: "url" };

    function getConfig() {
        return config;
    }

    return { getConfig };
}

console.log(init().getConfig())

3. callbacks e async 
function executar() {
    let valor = 10;

    setTimeout(function() {
        console.log(valor);
    }, 1000);
}

mesmo depois da função acabar, o setTimeout ainda acessa valor

isso é closure em ação.

# _________________________________________________________________________

# . 3 - Tipos de funções
## 1 - Funções de callback 
  Funções passadas como argumento que outras funções manipulam ela como parâmetro.
  no JavaScript, funções são objetos e podem ser declaradas em basicamente qualquer lugar do código.

  exemplo:
  function executaCallback(fcallback) {
    fcallback();
  }

  executaCallback(function () {
    console.log("essa função está sendo passada como callback");
  });

  ou 

  function f1 () {
    console.log("essa função está sendo passada como callback");
  }

  executaCallback(f1);

## 2 - Funções imediatas (IIFE)
  Funções anônimas executadas logo após sua criação:
  São úteis para não poluir o escopo global com funções.

  (function () {
    const nome = "Nícolas"; // essa variável não afeta a variável "nome" no escopo global.
    console.log("Essa função está sendo executada");
  })();

  const nome = "Teste";

## 3 - Funções fábrica (Factory Functions) 
  são funções que retornam objetos prontos, sem usar new.
  ideia: você chama a função e ela fabrica um objeto pra você.
  usa quando o intuito é criar objetos de forma simples e flexível.

  function criaPessoa (nome, sobrenome) {
    return {
      nome,
      sobrenome,
      fala(assunto = "nada") {
        return `${this.nome} está falando sobre ${assunto}`;
      },
      // getter
      get nomeCompleto() {
        return this.nome + " " + this.sobrenome;
      },
      // setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');

        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');

        console.log(valor);
      }
    }
  }

  const p1 = criaPessoa("Nícolas", "Machado");
  p1.fala("JS");
  p1.nomeCompleto = "Nícolas Machado Cardoso";
  console.log(p1.nomeCompleto);

## 4 - Funções construtoras 
  são usadas com new pra instanciar objetos.
  ideia: a função serve como um molde, e o new cria o objeto.
  usa quando o intuito é criar vários objetos com a mesma estrutura, principalmente com herança/prototype.

  function Pessoa(nome, sobrenome) {
    // Atributos privados
    const ID = 123456;
    const metodoInterno = function () {
      console.log("Método interno");
    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
      console.log(this.nome + ": sou um método");
    }
  }

  const p1 = new Pessoa("Nícolas", "Machado");
  p1.metodo();

  function Usuario(nome, senha) {
    const senhaInterna = senha;

    this.nome = nome;

    this.validarSenha = function(s) {
        return s === senhaInterna;
    };
  }

  const u = new Usuario("Nícolas", "123");

  console.log(u.validarSenha("123")); // true
  console.log(u.senhaInterna); // undefined

## 5 - Funções recursivas 
  Funções que chamam ela mesma

  function recursiva (max) {
    if (max > 10) return;
    max ++;
    console.log(max);
    recursiva(max);
  }

  recursiva(-10);

## 6 - Funções geradoras 
  são funções que podem pausar e continuar execução, usando yield.
  Lazy evaluation -> não entrega todos os valores de uma vez.
  usa quando o intuito é controlar execução passo a passo, ou lidar com fluxo de dados incremental.

  function* gerarIds() {
      let i = 1;
      while (true) {
          yield i++;
      }
  }

  const ids = gerarIds();

  console.log(ids.next().value); // 1
  console.log(ids.next().value); // 2

# _________________________________________________________________________