/* 2. 👥 sistema de usuários + ranking
objetivo:
trabalhar com agregação e ordenação
requisitos:
!- função construtora Usuario(nome)
!- cada usuário tem um array de pontuacoes
!- prototype:
!  mediaPontuacao()
!- crie vários usuários
!- simule carregamento das pontuações via Promise
!- após carregar tudo:
!  calcule média de cada usuário
!  ordene do maior para o menor
!  retorne ranking:
[
    { nome: "joao", media: 9 },
    { nome: "maria", media: 7 }
] */

function Usuario(nome, pontuacoes) { //função construtora
  this.nome = nome;
  this.pontuacoes = pontuacoes;
};

Usuario.prototype.mediaPontuacao = function() { //adicionando método mediaPontuacao no prototype de Usuario
  let total = 0; //total começa em 0
  
  this.pontuacoes.forEach(pontuacao => { //pega todas as pontuações, soma elas e gera um total
    total += pontuacao;
  });

  let media = total / this.pontuacoes.length; //média vai ser o total / quantidade de pontuações no array
  return media; //retorna a média
};

function carregaPontuacoes(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { //timeout de 2s pra simular carregamento
      for (let i = 0; i < 3; i++) { //loop de 3
      let pontuacao = Math.floor(Math.random() * 10) + 1; //gera pontuação aleatória até 10
      usuario.pontuacoes.push(pontuacao); //coloca a pontuação no array de pontuações do usuário
      };
      resolve(usuario); //resolve (retorna) com o usuário atualizado (com pontuações)
    }, 2000);
  })
}

const u1 = new Usuario("Marco", []);
const u2 = new Usuario("Pedro", []);
const u3 = new Usuario("Lucas", []);
const u4 = new Usuario("Maria", []);
const u5 = new Usuario("Vitor", []);

//carregarPontuacoes retorna uma promise, entao aq tô passando um array com as promises pro Promise.all
Promise.all([carregaPontuacoes(u1), carregaPontuacoes(u2), carregaPontuacoes(u3), carregaPontuacoes(u4), carregaPontuacoes(u5)]) //cada um desse vai retornar o usuario atualizado (la do resolve(usuario))
.then((usuarios) => {
  let ranking = usuarios.map(usuario => ({ nome: usuario.nome, media: usuario.mediaPontuacao() })) //cria objeto com nome e média de cada usuário
  .sort((usuario1, usuario2) => usuario2.media - usuario1.media); //vai comparando todos os usuário e ordena do maior pro menor

  console.log("Ranking:", ranking);
  return ranking;
})
.catch((erro) => console.log(erro));
