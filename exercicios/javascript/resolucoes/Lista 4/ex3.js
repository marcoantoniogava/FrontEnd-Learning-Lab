/* 3. (this + bind + contexto)
explique e resolva:
const usuario = {
  nome: "joao",
  saudacao() {
    return `ola, ${this.nome}`;
  }
};
const fn = usuario.saudacao;
console.log(fn());
por que retorna errado?
corrija usando bind */

const usuario = {
  nome: "joao",
  saudacao() {
    return `ola, ${this.nome}`;
  }
};

const fn = usuario.saudacao.bind(usuario); //apenas colocar .bind(usuario), para que o this.nome se referencie ao nome do usuário.

console.log(fn());
