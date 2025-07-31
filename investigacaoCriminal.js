let prompt = require('prompt-sync')()

function investigacao(){
    
    let telefonou = prompt("Você telefonou para a vítima: ")
    
    let localCrime = prompt("Você esteve no local do crime: ")
    
    let moraPerto = prompt("Você mora perto da vítima: ")
    
    let devia = prompt("Você devia para a vítima: ")
    
    let trabalhou = prompt("Você já trabalhou para a vítima: ")
    
    let suspeita = 0
    
    if( telefonou == "sim" || telefonou == "Sim" || telefonou == "s" || telefonou == "y" ){
        suspeita = suspeita + 1
    }
    
    if( localCrime == "sim" || localCrime == "Sim" || localCrime == "s" || localCrime == "y" ){
        suspeita = suspeita + 1
    }
    
    if( moraPerto == "sim" || moraPerto == "Sim" || moraPerto == "s" || moraPerto == "y" ){
        suspeita = suspeita + 1
    }
    
    if( devia == "sim" || devia == "Sim" || devia == "s" || devia == "y" ){
        suspeita = suspeita + 1
    }
    
    if( trabalhou == "sim" || trabalhou == "Sim" || trabalhou == "s" || trabalhou == "y" ){
        suspeita = suspeita + 1
    }
    
    if(suspeita == 2){
        console.log("Você é suspeito")
    }else if(suspeita == 3 || suspeita == 4){
        console.log("Você é cumplice")
    }else if(suspeita == 5){
        console.log("Você é o assassino!")
    }else{
        console("Você é inocente")
    }
}

investigacao()
