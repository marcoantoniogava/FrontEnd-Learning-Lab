/* 4. (prototype + herança)
crie:
-function Pessoa(nome)
-function Funcionario(nome, salario)
-faça Funcionario herdar de Pessoa
-adicionar método:
-mostrarSalario
👉 sem usar class, só prototype */

function Pessoa(nome) {
    const sobrenome = " Gava";
    this.nome = nome + sobrenome;
    
};

function Funcionario(nome, salario) {
    Pessoa.call(this, nome)
    this.salario = salario;
};

Funcionario.prototype.mostrarSalario = function() {
    console.log(this.salario);
}

const f1 = new Funcionario("Marco", 1500)

console.log(f1.nome);
f1.mostrarSalario();
