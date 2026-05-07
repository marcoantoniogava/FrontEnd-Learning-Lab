/* 3. (privado vs público)
baseado nisso que você viu:

function Pessoa(nome) {
  const id = 123;
  this.nome = nome;
}

adicione um método público mostrarNome
crie um método interno (privado)
tente acessar o método privado de fora e entenda o que acontece */

function Pessoa(nome) {
    const id = 123;
    const mostrarNomePriv = function () {
        console.log("Método Privado");
    }

    this.nome = nome;
    this.mostrarNomePub = function () { //método público
        console.log("Nome: " + this.nome);
    }
}

const p1 = new Pessoa("Marco");
p1.mostrarNomePub();
p1.mostrarNomePriv();
