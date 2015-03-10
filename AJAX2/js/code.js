
window.onload = function() {
    "use strict";

    //  cargar la página, el cuadro de texto debe mostrar por defecto la URL de la propia página.
    var elem = document.getElementById("recurso");
    var url = document.location.href;
    elem.value = url;

    var timestamp1 = 0;

    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }


    /* al pulsar el botón "Mostrar Contenidos", se debe descargar mediante peticiones AJAX el contenido correspondiente a la URL introducida por el usuario. El contenido de la respuesta recibida del servidor se debe mostrar en la zona de "Contenidos del archivo". */

    var READY_STATE_UNINITIALIZED=0;
    var READY_STATE_LOADING=1;
    var READY_STATE_LOADED=2;
    var READY_STATE_INTERACTIVE=3;
    var READY_STATE_COMPLETE=4;

    var peticion_http;

    function cargaContenido(url, metodo, funcion) {
        // Borrar datos anteriores
        document.getElementById('contenidos').innerHTML = "";
        document.getElementById('cabeceras').innerHTML = "";
        document.getElementById('estados').innerHTML = "";
        document.getElementById("codigo").innerHTML = "";

        peticion_http = inicializa_xhr();

        if(peticion_http) {
            peticion_http.onreadystatechange = funcion;
            timestamp1 =  new Date();
            peticion_http.open(metodo, elem.value+'?nocache='+Math.random(), true);
            peticion_http.send(null);
        }
    }

    function inicializa_xhr() {
        if(window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else if(window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    function muestraContenido() {
        var estado ="";
        if (peticion_http.readyState === 0){
            estado = "Sin iniciar";
        } if (peticion_http.readyState == 1){
            estado = "Cargando";
        } if (peticion_http.readyState == 2){
            estado = "Cargado";
        } if (peticion_http.readyState == 3){
            estado = "Ejecutando";
        } if (peticion_http.readyState == 4){
            estado = "Completado";
        }
        var timestamp2 =  new Date();

        var milisegundos = timestamp2 -timestamp1;
        document.getElementById("estados").innerHTML += estado + " [" + milisegundos + " mseg]<br/>";

        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
                document.getElementById("cabeceras").innerHTML = peticion_http.getAllResponseHeaders();
                document.getElementById("codigo").innerHTML = peticion_http.status +" "+ peticion_http.statusText;
                document.getElementById("contenidos").innerHTML = htmlEntities(peticion_http.responseText);
            }
        } else {
                document.getElementById("cabeceras").innerHTML = peticion_http.getAllResponseHeaders();
                document.getElementById("codigo").innerHTML = peticion_http.status +" "+ peticion_http.statusText;
                document.getElementById("contenidos").innerHTML = htmlEntities(peticion_http.responseText);
        }
    }

    function descargaArchivo() {
        cargaContenido(url, "GET", muestraContenido);
    }

    document.getElementById("enviar").addEventListener("click", descargaArchivo, true);

};
