const btn = document.querySelector("#send");
//const nomeDoChar = document.querySelector("#nickName")

async function start(value) {
    try {

        const url = `https://api.tibiadata.com/v3/character/${value}`
        const resposta = await axios.get(url);
        const nick = resposta.data.characters.character.name;
        const level = resposta.data.characters.character.level;
        console.log(`Nome do Char: ${nick}`)
        console.log(`Level: ${level}`)
        console.log(resposta.data)
        document.getElementById("nickName").value = resposta.data.characters.character.name;
        document.getElementById("levelInput").value = level;
        document.getElementById("vocInput").value = resposta.data.characters.character.vocation;
        const sex = resposta.data.characters.character.sex;
        if (sex === 'female'){
            document.getElementById("sexInput").value = 'Feminino';
        } else{
            document.getElementById("sexInput").value = 'Masculino';
        }
        document.getElementById("mundoInput").value = resposta.data.characters.character.world;
        document.getElementById("cityInput").value = resposta.data.characters.character.residence;
        document.getElementById("statusInput").value = resposta.data.characters.character.account_status;




} catch (error) {
    console.log(error)
        console.log("Erro na conexão com API")
    }
}


btn.addEventListener("click",function(e){

    e.preventDefault();
    const name = document.querySelector("#nomeChar");

    const value = name.value;

    console.log(`O nome digitado foi: ${value}`)

    start(value);
})

document.addEventListener('keypress', function(e){
    if(e.which == 13){
        const name = document.querySelector("#nomeChar");
    
       
       const value = name.value;
       start(value);
    }
 }, false);