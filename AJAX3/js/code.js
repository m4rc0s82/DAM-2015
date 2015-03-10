window.onload = function(){
    "use strict";

    document.getElementById("comprobar").addEventListener("click", valida , true);

    /* variables */
    var READY_STATE_COMPLETE=4;
    var peticion_http = null;

    /* funcion para iniciar el XHR */
    function inicializa_xhr() {
      if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
      else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    }

    /* crear el query string con los parametros que necesitamos */
    function crea_query_string() {
      var nombre = document.getElementById("login").value;
      return "login=" + encodeURIComponent(nombre.value) +
             "&nocache=" + Math.random();
    }


    /* funcion a la que se llama al hacer click (el listener) */
    function valida() {
      peticion_http = inicializa_xhr();
      if(peticion_http) {
        peticion_http.onreadystatechange = comprobarNombre;
        peticion_http.open("POST", "http://localhost/DAM-2015/AJAX3/server/compruebaDisponibilidad.php", true);

        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var query_string = crea_query_string();
        peticion_http.send(query_string);
      }
    }


    /* callback */
    function comprobarNombre(e) {
        e.preventDefault();
        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
            document.getElementById("disponibilidad").innerHTML = peticion_http.responseText;
            }
        }
    }
};
