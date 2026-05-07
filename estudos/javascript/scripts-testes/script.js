function Pessoa (nome, sobrenome) {
    this.nome      = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Nícolas", "Machado");

/* 

1. O que você criou
function Pessoa (nome, sobrenome) {
    this.nome      = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Nícolas", "Machado");

2. O que o new fez de verdade

Por baixo dos panos:

const p1 = {};
p1.__proto__ = Pessoa.prototype;
Pessoa.call(p1, "Nícolas", "Machado");

então:

p1 tem:
- nome
- sobrenome
e também aponta para:
- Pessoa.prototype

3. O que você viu no console
Pessoa { nome: 'Nícolas', sobrenome: 'Machado' }

isso é só o “resumo visual”

Agora vamos abrir isso de verdade.

4. Estrutura real do p1

Pensa assim:

p1
│
├── nome: "Nícolas"
├── sobrenome: "Machado"
│
└── [[Prototype]] → Pessoa.prototype
5. Agora entra o Prototype
Pessoa.prototype
│
├── constructor: Pessoa
│
└── [[Prototype]] → Object.prototype

aqui começa a cadeia

6. Agora o próximo nível
Object.prototype
│
├── toString()
├── hasOwnProperty()
├── valueOf()
│
└── [[Prototype]] → null

esse é o topo da cadeia

7. Juntando tudo (cadeia completa)
p1
 ↓
Pessoa.prototype
 ↓
Object.prototype
 ↓
null

8. Sobre o que você viu (confusão comum)

Você falou:

tem proto com constructor Pessoa e outro [[Prototype]] e vai indo...

isso acontece porque:

__proto__ é só um acesso ao [[Prototype]]
o console repete a estrutura de forma meio confusa
Tradução do caos que você viu

Quando você abre no console:

[[Prototype]] → é o link interno real
__proto__ → é um getter (forma de acessar isso)

eles apontam pro mesmo lugar

9. Sobre o constructor
Pessoa.prototype.constructor === Pessoa // true

isso serve pra dizer:

“esse objeto foi criado por essa função”

10. Por que parece que repete várias vezes?

Porque:
= cada nível tem um prototype
= cada prototype tem outro prototype
= até chegar em null

Forma correta de pensar 
✔ Um objeto não tem tudo

Ele só tem:
- seus próprios dados
- um ponteiro para outro objeto (prototype)

✔ Quando você acessa algo:
p1.toString()

JS faz:

1. procura em p1 ❌
2. vai pra Pessoa.prototype ❌
3. vai pra Object.prototype ✅

console.log(p1.hasOwnProperty("nome"));

hasOwnProperty NÃO está em p1

mas funciona porque:

p1 → Pessoa.prototype → Object.prototype

12. Resumo
p1 → tem dados próprios
Pessoa.prototype → métodos compartilhados
Object.prototype → métodos padrão do JS
null → fim da cadeia

*/