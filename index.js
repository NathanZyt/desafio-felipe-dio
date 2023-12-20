let seuNome = "Nathan"
let nivelDeXP = "1000"
let titulo = ""

if(nivelDeXP < 1000){
    titulo = 'Ferro';
}else if(nivelDeXP >= 1001 && nivelDeXP <= 2000){
    titulo = 'Bronze';
}else if(nivelDeXP >= 2001 && nivelDeXP <= 5000){
    titulo = 'Prata'
}else if(nivelDeXP >= 5001 && nivelDeXP <= 7000){
    titulo = 'Ouro'
}else if(nivelDeXP >= 7001 && nivelDeXP <= 8000){
    titulo = 'Platina'
}else if(nivelDeXP >= 8001 && nivelDeXP <= 9000){
    titulo = 'Ascendente'
}else if(nivelDeXP >= 9001 && nivelDeXP <= 10000){
    titulo = 'Imortal'
}else {
    titulo = 'Radiante'
}


console.log("O herói cujo nome é " + seuNome + " está no nível de " + titulo)