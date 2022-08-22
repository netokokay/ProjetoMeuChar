const axios = require("axios");
const btn = document.querySelector("#send");
//let name = document.getElementById("#nomeChar").value;


async function start() {
    try {

        const url = `https://api.tibiadata.com/v3/character/${value}`
        const resposta = await axios.get(url);
        const info = resposta.data.character;
        const level = resposta.data.characters.character.level;
        console.log(level)
        console.log(info)
} catch (error) {
        console.log("Erro na conexão com API")
    }
}


btn.addEventListener("click",function(e){

    e.preventDefault();
    const name = document.querySelector("#nomeChar");

    const value = name.value;

    console.log(value)
    start();
})
