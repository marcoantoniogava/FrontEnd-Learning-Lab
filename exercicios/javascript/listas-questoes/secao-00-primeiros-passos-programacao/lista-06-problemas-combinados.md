# Lista 06 - Problemas combinados

> Revisao pratica juntando variaveis, condicionais, loops, funcoes, arrays e objetos em pequenos fluxos reais.

## Sumario

- [Conteudos praticados](#conteudos-praticados)
- [Secao 1 - Revisao integrada](#secao-1---revisao-integrada)
- [Secao 2 - Arrays e objetos](#secao-2---arrays-e-objetos)
- [Secao 3 - Funcoes e regras](#secao-3---funcoes-e-regras)
- [Secao 4 - Desafio final](#secao-4---desafio-final)

## Conteudos praticados

- Variaveis.
- Operadores.
- Condicionais.
- Loops.
- Funcoes.
- Arrays.
- Objetos simples.
- Organizacao de pequenas regras.

## Secao 1 - Revisao integrada

### Exercicio 1 - Calculadora de IMC

Conteudo:
- Funcao.
- Operadores.
- Condicional.

Enunciado:
Crie uma funcao que recebe peso e altura, calcula o IMC e retorna a classificacao basica.

Requisitos:
- Calcular `peso / (altura * altura)`.
- Retornar `abaixo`, `normal`, `sobrepeso` ou `obesidade`.
- Exibir o IMC e a classificacao.

Dica:
- Use uma funcao para calcular e outra para classificar se quiser organizar melhor.

### Exercicio 2 - Controle de caixa

Conteudo:
- Array.
- Loop.
- Acumulador.
- Condicional.

Enunciado:
Dado um array de movimentacoes financeiras, calcule o saldo final considerando entradas e saidas.

Requisitos:
- Cada movimentacao deve ter `tipo` e `valor`.
- Tipo pode ser `entrada` ou `saida`.
- Entradas somam, saidas subtraem.

Dica:
- Uma estrutura de objeto deixa cada movimentacao mais clara.

## Secao 2 - Arrays e objetos

### Exercicio 3 - Filtro de produtos

Conteudo:
- Array de objetos.
- Loop.
- Condicional.

Enunciado:
Crie um array de produtos e retorne apenas os produtos com preco maior que 50.

Requisitos:
- Cada produto deve ter `nome` e `preco`.
- Criar um novo array para os produtos filtrados.
- Nao alterar o array original.

Dica:
- Primeiro resolva com `for`; depois tente com `filter`.

### Exercicio 4 - Agrupamento por status

Conteudo:
- Objetos.
- Arrays.
- Condicional.

Enunciado:
Dado um array de tarefas com status `pendente` ou `concluida`, monte um objeto separando as tarefas por status.

Requisitos:
- Retornar `{ pendentes: [...], concluidas: [...] }`.
- Percorrer todas as tarefas.
- Preservar os dados originais da tarefa.

Dica:
- O objeto final pode comecar com arrays vazios.

## Secao 3 - Funcoes e regras

### Exercicio 5 - Validador de usuario

Conteudo:
- Funcao.
- Condicional.
- Objeto.

Enunciado:
Crie uma funcao que recebe um usuario e retorna se ele esta valido para cadastro.

Requisitos:
- Usuario precisa ter nome preenchido.
- Email precisa conter `@`.
- Idade precisa ser maior ou igual a 18.
- Retornar `true` ou `false`.

Dica:
- Retornar boolean facilita usar essa funcao em outros fluxos.

### Exercicio 6 - Relatorio de alunos

Conteudo:
- Array de objetos.
- Funcao.
- Media.
- Agrupamento.

Enunciado:
Crie um relatorio que separa alunos aprovados e reprovados com base na media.

Requisitos:
- Cada aluno deve ter nome e notas.
- Calcular a media de cada aluno.
- Retornar `{ aprovados: [...], reprovados: [...] }`.

Dica:
- Crie uma funcao pequena para calcular media.

## Secao 4 - Desafio final

### Exercicio 7 - Mini sistema de pedidos

Conteudo:
- Objetos.
- Arrays.
- Funcoes.
- Condicionais.
- Loops.

Enunciado:
Monte um mini sistema que recebe pedidos, valida cada pedido e retorna um resumo com pedidos aprovados, recusados e total aprovado.

Requisitos:
- Cada pedido deve ter cliente, valor e status do cliente.
- Pedido e aprovado apenas se o cliente estiver ativo e o valor for maior que zero.
- Retornar:
  {
    aprovados: [...],
    recusados: [...],
    totalAprovado: 0
  }

Dica:
- Separe validacao, processamento e montagem do resumo.
