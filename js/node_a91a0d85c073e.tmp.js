const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemeto)=>{
    console.log(elemeto)
} )

somar.addEventListener("click", ()=> {manipulaDados("somar")})

subtrair.addEventListener("click", ()=> {manipulaDados("subtrair")})

function manipulaDados(operacao){
    if(operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}





/*const roboTron = document.querySelector("#robotron");

roboTron.addEventListener("click", dizOi);

function dizOi(){
    console.log("Oi");
    console.log("Bem-vindo ao Robotron 2000");

} */


/*---Usando função anonima--- 

const roboTron = document.querySelector("#robotron");

roboTron.addEventListener("click", function(){ 
    console.log("Cliquei no robô")
});

function dizOi(){
    console.log("Oi");
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi()*/

/*---Usando arrow function---
para arrow function com mais linhas de codigo é nesseçario usar chaves{} Exemplo: roboTron.addEventListener("click", () => { 
    console.log("Cliquei no robô")
    mais codigo aqui...
    ...
    ...
})  

const roboTron = document.querySelector("#robotron");
 
roboTron.addEventListener("click", (evento) => console.log(evento))


function dizOi(nome){
    console.log("Oi " + nome);
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi('Ale') */

