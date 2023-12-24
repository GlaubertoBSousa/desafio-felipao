let xP = 1 

for (let i = 0; i <10000;i++) {
    xP +=1
    if ( xP>0 && xP<=1000){
        console.log("O herói é nível de Ferro")
    } else if (xP>1001 && xP<=2000){
        console.log("O herói é nível de Bronze")
    }else if (xP>2001 && xP<=5000){
        console.log("O herói é nível de Prata")
    }else if (xP>5001 && xP<=7000){
        console.log("O herói é nível de Ouro")
    }else if (xP>7001 && xP<=8000){
        console.log("O herói é nível de Platina")
    }else if (xP>8001 && xP<=9000){
        console.log("Agora o herói é nível de Ascendente")
    }else if (xP>8001 && xP<=10000){
        console.log("Parabéns herói é nível de Imortal")
    }else  {
        console.log("Parabéns herói é nível de Radiante")
}
}