var lettuce = {
    name: "Lettuce", 
    attributes: {
        hoursOfSun: 4, 
        days2Harvest:50,
        vaseSize: 225, 
    },
    img : "https://img.freepik.com/fotos-gratis/fechar-o-agricultor-de-mao-no-jardim-durante-o-fundo-de-comida-de-manha_1150-7185.jpg?w=740&t=st=1647461044~exp=1647461644~hmac=9b84945d8a480c1f3f52c84bde492f3760a770ba4351f49583cf0bb2de841549",
}

var carrot = {
    name: "Carrot", 
    attributes: {
        hoursOfSun: 4, 
        days2Harvest:75,
        vaseSize: 900, 
     } ,
     img : "https://img.freepik.com/fotos-gratis/cenouras-exploracao-homem_144627-9323.jpg?w=360&t=st=1647461327~exp=1647461927~hmac=dd92b51c41e80c9c494aebeac6cd105329a02dbdde02fadc936f443365896077",
}

var kale = {
    name: "Kale",
    attributes: {
        hoursOfSun: 4, 
        days2Harvest:80,
        vaseSize: 225, 
    },
    img : "https://img.freepik.com/fotos-gratis/close-up-de-couve_23-2148685426.jpg?w=740&t=st=1647465968~exp=1647466568~hmac=2fbf04f9db68e099bd52cb3671d2b5cd6cc4b15d20cb04dfd4ddb548c59bd6c7",
}

var onion = {
    name: "Onion",
    attributes: { 
        hoursOfSun: 4, 
        days2Harvest:120,
        vaseSize: 225, 
    },
    img : "https://img.freepik.com/fotos-gratis/cebolas-cruas-e-cortadas_144627-41767.jpg?w=360&t=st=1647466245~exp=1647466845~hmac=8e799a6b1e2444010daa5c2c0dec857a1e54af9be68f5517c1c6e906bd9c7c12",
}

var garlic = {
    name: "Garlic",
    attributes: { 
        hoursOfSun: 4, 
        days2Harvest:240,
        vaseSize: 225,
    },
    img : "https://img.freepik.com/fotos-gratis/fundo-de-alho_1150-8292.jpg?w=740&t=st=1647466662~exp=1647467262~hmac=b2c196f7d1f7ba41a75a21341cc43369e200207a45857f3c0bf3b38e5e23a58d",
}

var potato = {
    name: "Potato",
    attributes: { 
        hoursOfSun: 4, 
        days2Harvest:240, 
        vaseSize: 225, 
    },
    img : "https://img.freepik.com/fotos-gratis/cacho-de-batatas-em-caneca-de-metal-com-serapilheira_114579-58262.jpg?w=740&t=st=1647460905~exp=1647461505~hmac=e57221197922066fda0fed21c28e41c0271cab2222684f279cb7d93a04c95972",
}

var tomato = {
    name: "Tomato",
    attributes: { 
        hoursOfSun: 4, 
        days2Harvest:70, 
        vaseSize: 225, 
    },
    img : "https://img.freepik.com/fotos-gratis/feche-as-maos-do-agricultor-segurando-em-suas-maos-tomates-organicos-frescos-sobre-uma-caixa-de-tomates-comida-saudavel_158595-7768.jpg?w=740&t=st=1647460964~exp=1647461564~hmac=4e447e93fed3f6833eacf3f036c5e0e48f578a6ccd9e699ed8803ef56138c349",
}

var greenOnion= {
    name: "Green Onion",
    attributes: { 
        hoursOfSun: 4, 
        days2Harvest:90,
        vaseSize: 225, 
    },
    img : "https://img.freepik.com/fotos-gratis/cebolinhas-frescas-em-marmore_114579-72151.jpg?t=st=1647466765~exp=1647467365~hmac=d4747d43a4747151d24bfc98d8ef84c6554aabcb9a385c8aeb7f6e7a89c99a72&w=740",
}

var cards = [lettuce, carrot, kale, onion, garlic, potato, tomato, greenOnion]

var systemCard;

var playerCard;

function pickCard() {
   var numSyCard = parseInt(Math.random() *8);
   systemCard = cards[numSyCard];

   var numPlCard = parseInt(Math.random() *8);

   while (numSyCard == numPlCard){
    numPlCard = parseInt(Math.random() *8)
   }


   playerCard = cards[numPlCard];
   console.log(playerCard)
 document.getElementById("btnSort").disabled = true;
 document.getElementById("btnPlay").disabled = false;
 displayOptions()
}

function displayOptions() {
    var options = document.getElementById("options");
    var textOptions = "";

    for (var attribute in playerCard.attributes){
        textOptions += "<input type='radio' name='attribute' value='" +
         attribute + 
         "'/>" +
          attribute;
    }
    options.innerHTML = textOptions;
}

function getSelectedAttribute(){
    var radioAttributes = document.getElementsByName("attribute");
    
    for (var i = 0; i < radioAttributes.length; i++){
        if (radioAttributes[i].checked == true){
            return radioAttributes[i].value;
            
        }
    }
}

function play(){
    let selectedAttribute = getSelectedAttribute();
    const getDivResult = document.getElementById('result');
    let plCardValue = playerCard.attributes[selectedAttribute];
    let syCardValue = systemCard.attributes[selectedAttribute];

    if (plCardValue > syCardValue){
        alert('Congratulations, you have won!')
    } else if (syCardValue > plCardValue){
        alert('The system has won.')
    } else if (plCardValue == syCardValue){
        alert("It's a draw.")
    } else {
        alert("Error 404 (or probably other code)")
    }
}