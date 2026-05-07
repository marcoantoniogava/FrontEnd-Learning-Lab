const falar = {
    falar() {
        console.log(this.nome+" está falando");
    }
}

const beber = {
    beber() {
        console.log(this.nome+" está bebendo");
    }
}

const comer = {
    comer() {
        console.log(this.nome+" está comendo");
    }
}

const pessoaPrototype = {...comer, ...beber, ...falar};

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    })
}

const p1 = criaPessoa("Nícolas", "Machado");
const p2 = criaPessoa("João", "Silva");

p1.falar();