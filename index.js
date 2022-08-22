const axios = require("axios");
//const btnSubmit = document.querySelectorAll("select");
let name = document.getElementById("#nomeChar").value;


name = 'Goraca';
console.log(name)


async function start() {
    try {

        const url = `https://api.tibiadata.com/v3/character/${name}`
        const resposta = await axios.get(url);
        const info = resposta.data.character;
        const level = resposta.data.characters.character.level;
        console.log(level)
        console.log(info)
} catch (error) {
        console.log("Erro na conexão com API")
    }
}

start();