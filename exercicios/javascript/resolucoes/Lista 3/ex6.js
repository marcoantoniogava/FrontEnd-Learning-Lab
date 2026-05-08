/* 6. (prototype)
crie:
function Animal(nome) {
  this.nome = nome;
}
adicione no prototype um método falar
crie dois animais e teste
👉 objetivo: entender que ambos compartilham o mesmo método */

function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.falar = function () { //colocando método no prototype de Animal
    console.log("Nome: " + this.nome);
}

const a1 = new Animal("Tigre");
const a2 = new Animal("Leão");

a1.falar();
a2.falar();
