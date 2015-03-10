//Número de enlaces de la página
var enlaces = document.getElementsByTagName("a");
var parrafo1 = document.createElement("p");
var contenido1 = document.createTextNode("Número de enlaces de la página: "+ enlaces.length);
parrafo1.appendChild(contenido1);
document.body.appendChild(parrafo1);

//Dirección a la que enlaza el penúltimo enlace
var parrafo2 = document.createElement("p");
var penultimo = enlaces[enlaces.length-2];
var direccion = penultimo.href;
var contenido2 = document.createTextNode("Dirección a la que enlaza el penúltimo enlace: "+direccion);
parrafo2.appendChild(contenido2);
document.body.appendChild(parrafo2);

// Numero de enlaces que enlazan a http://prueba
var parrafo3 = document.createElement("p");
var cont = 0;
for(var i=0; i<enlaces.length; i++) {
    if ((enlaces[i].href == "http://prueba/") || (enlaces[i].href == "http://prueba")){
      console.log(enlaces[i].href);
    cont++;
  }
}
var contenido3 = document.createTextNode("Numero de enlaces que enlazan a http://prueba/: "+cont);
parrafo3.appendChild(contenido3);
document.body.appendChild(parrafo3);

//Número de enlaces del tercer párrafo
var parrafo4 = document.createElement("p");
var enlacesParrafo = document.querySelectorAll("p:nth-child(3) a");
var contenido4 = document.createTextNode("Número de enlaces del tercer párrafo: "+enlacesParrafo.length);
parrafo4.appendChild(contenido4);
document.body.appendChild(parrafo4);

