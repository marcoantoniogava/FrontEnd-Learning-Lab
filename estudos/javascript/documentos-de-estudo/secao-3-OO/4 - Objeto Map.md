    ```js
Map é uma estrutura de dados que armazena pares chave - valor, parecido com objetos,
mas com várias vantagens importantes.

# . 1 - Diferenças principais entre Map e Object
## 1 - Chaves de qualquer tipo
    Map permite usar qualquer tipo como chave (objetos, funções, etc), enquanto objetos só permitem strings ou símbolos.

## 2 - Ordem de inserção
    Map mantém a ordem de inserção dos pares chave-valor, enquanto objetos não garantem isso.

## 3 - Performance
    Melhor para muitas operações, porque é otimizado para isso, enquanto objetos podem ter performance degradada com muitas chaves.

## 4 - Iteração fácil
    Map tem métodos nativos para iterar (forEach, keys, values, entries) por conta de sua estrutura interna ser um array, enquanto objetos exigem mais trabalho para iterar.

## 5 - Tamanho
    Map tem a propriedade size para obter o número de pares, enquanto objetos exigem contagem manual.

    Resumindo:
    - Objetos são melhores para estruturas simples e fixas, enquanto Map é melhor para coleções dinâmicas e complexas.

# __________________________________________________________________________________________________________________

# . 2 - Criando um Map
    const mapa = new Map();

    const mapa2 = new Map([
        ["chave1", "valor1"],
        ["chave2", "valor2"]
    ]);

# __________________________________________________________________________________________________________________

# . 3 - Métodos principais
## 1 - set(chave, valor)
    mapa.set("chave", "valor");
    mapa.set(1, "valor numérico");
    mapa.set(true, "valor booleano");

## 2 - get(chave)
    console.log(mapa.get("chave")); // valor

## 3 - has(chave)
    console.log(mapa.has("chave")); // true

## 4 - delete(chave)
    mapa.delete("chave");

## 5 - clear()
    mapa.clear();

## 6 - size
    console.log(mapa.size); // número de pares chave-valor

# __________________________________________________________________________________________________________________

# . 4 - Iteração
## 1 - for...of
    for (const [chave, valor] of mapa) {
        console.log(chave, valor);
    }

## 2 - forEach
    mapa.forEach((valor, chave) => {
        console.log(chave, valor);
    });

## 3 - keys()
    for (const chave of mapa.keys()) {
        console.log(chave);
    }

## 4 - values()
    for (const valor of mapa.values()) {
        console.log(valor);
    }

## 5 - entries()
    for (const [chave, valor] of mapa.entries()) {
        console.log(chave, valor);
    }

# __________________________________________________________________________________________________________________

# . 5 - Comparação de chaves
    O Map usa comparação por referência, não por valor.

    const obj1 = { };
    const obj2 = { };

    mapa.set(obj1, "valor");

    console.log(mapa.get(obj2)); // undefined, porque obj1 e obj2 são referências diferentes

    // É como se todas as chaves do Map fossem objetos, mesmo que sejam strings ou números, elas são convertidas para objetos internamente.

# __________________________________________________________________________________________________________________

# . 6 - Vantagens do Map
    - Permite chaves de qualquer tipo
    - Mantém a ordem de inserção
    - Melhor performance para grandes coleções
    - Métodos nativos para iteração
    - Propriedade size para contar pares chave-valor

# __________________________________________________________________________________________________________________

# . 7 - Casos reais de uso
## 1 - Cache
    const cache = new Map();

    function buscar(id) {
        if (cache.has(id))
            return cache.get(id);

        const resultado = "dados do banco";
        cache.set(id, resultado);

        return resultado;
    }


## 2 - Contagem de ocorrências
    const lista = ["a", "b", "a", "c", "b", "a"];
    const contagem = new Map();

    for (let item of lista) {
        contagem.set(item, (contagem.get(item) || 0) + 1);
    }

    console.log(contagem); // Map { "a" => 3, "b" => 2, "c" => 1 }

## 3 - Chaves complexas (OBJETO como chave)
    const usuarios = new Map();

    const user1 = { nome: "nico" };
    const user2 = { nome: "joao" };

    usuarios.set(user1, "dados do nico");
    usuarios.set(user2, "dados do joao");

    console.log(usuarios.get(user1)); // dados do nico
    console.log(usuarios.get(user2)); // dados do joao

    // isso aqui é impossível com objeto.

# __________________________________________________________________________________________________________________

# . 8 - Convertendo Map para Object e vice-versa
## 1 - Map para Object
    const mapa = new Map([
        ["chave1", "valor1"],
        ["chave2", "valor2"]
    ]);

    const obj = Object.fromEntries(mapa);
    console.log(obj); // { chave1: "valor1", chave2: "valor2" }

## 2 - Object para Map
    const obj = { chave1: "valor1", chave2: "valor2" };

    const mapa = new Map(Object.entries(obj));
    console.log(mapa); // Map { "chave1" => "valor1", "chave2" => "valor2" }

    