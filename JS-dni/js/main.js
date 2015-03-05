function comprobar_letra(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numero = document.getElementById("numero");
    var letra = document.getElementById("letra");
    letra = letra.toUpperCase;

    if ((numero<0) || (numero>99999999)){
        alert ("El numero introducido no es correcto");
    } else{
        var letra_real = numero % 23;
        letra_real = letras[letra_real];

        if (letra === letra_real){
            alert ("LETRA CORRECTA");
        }else{
            alert ("LETRA INCORRECTA");
        }
    }
}
