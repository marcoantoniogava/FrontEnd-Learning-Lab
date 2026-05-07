/* 5 - Async / Promise / Fetch Simulado
-crie uma função simulaFetch(url) que retorna uma promise que resolve em x segundos (random de 1 a 3s) com a string "dados da url: <url>"
-faça um loop pra chamar 5 urls diferentes e retorne quando todas terminarem (Promise.all)
-depois, faça um outro teste retornando assim que a primeira terminar (Promise.race) */

function simulaFetch(url) {
    return new Promise((resolve, reject) => {
        const ms = Math.floor(Math.random() * 2001) + 1000 //numero aleatório de 1000 a 3000 (2001 pq o random começa em 0, ent chegaria só a 2999 e não 3000)
        setTimeout(() => {
            resolve("dados da url: " + url)            
        }, ms);
    });
}

const urls = ["google.com", "youtube.com", "discord.com", "instagram.com", "facebook.com"] //urls
const promises = [] //promises com as urls

for (let i = 0; i < urls.length; i++) { //loop que roda 5 vezes (tamanho do array com as urls)
    const url = urls[i];
    promises.push(simulaFetch(url)) //cada url vai pra uma promise
}

/* NÃO USEI REJECT PQ ESSAS PROMISES SEMPRE RESOLVEM, MAS EM PROJETOS É NECESSÁRIO */
Promise.all(promises).then((res) => { //resolve todas as promises
    console.log(res)
})

//teste com Promise.race
Promise.race(promises).then((res) => { //retorna a que resolver primeiro
    console.log("Race: " + res)
})
