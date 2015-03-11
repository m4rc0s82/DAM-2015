window.onload = function(){
    "use strict";

    /* variables */
    var READY_STATE_COMPLETE = 4;
    var peticion_http = null;
    var lista_provincias = "";
    var lista_municipios = "";

    /* funcion para iniciar el XHR */
    var inicializa_xhr = function() {
        if(window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else if(window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    };

    peticion_http = inicializa_xhr();

    /* funcion a la que se llama para cargar las provincias) */
    var cargarProvincias = function() {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {
            if (peticion_http.status == 200) {
                lista_provincias = document.getElementById("provincia");
                var documento_xml = peticion_http.responseXML;

                var provincias = documento_xml.getElementsByTagName("provincias")[0];
                var lasProvincias = provincias.getElementsByTagName("provincia");

                // se añaden los elemntos al select de provincias

                for(var i=0; i<lasProvincias.length; i++) {
                    var codigo = lasProvincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                    var provincia = lasProvincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                    lista_provincias.options[i] = new Option(provincia, codigo);
                }

            }
        }
    };

    if(peticion_http) {
        peticion_http.onreadystatechange = cargarProvincias;
        peticion_http.open("GET", "http://localhost/DAM-2015/AJAX6/server/cargaProvinciasXML.php?nocache="+Math.random(), true);
        peticion_http.send(null);
    }

    /* funcion a la que se llama para cargar los municipios) */
    var muestraMunicipios = function() {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {
            if (peticion_http.status == 200) {
                lista_municipios = document.getElementById("municipio");
                var documento_xml = peticion_http.responseXML;

                var municipios = documento_xml.getElementsByTagName("municipios")[0];
                var losMunicipios = municipios.getElementsByTagName("municipio");

                // se añaden los elemntos al select de municipios

                for(var i=0; i<losMunicipios.length; i++) {
                    var codigo = losMunicipios[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                    var nombre = losMunicipios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                    lista_municipios.options[i] = new Option(nombre, codigo);
                }

            }
        }
    };



    var cargarMunicipios = function (){
        peticion_http = inicializa_xhr();
        if(peticion_http) {
            peticion_http.onreadystatechange = muestraMunicipios;
            peticion_http.open("GET", "http://localhost/DAM-2015/AJAX6/server/cargaMunicipiosXML.php?nocache="+Math.random(), true);
            peticion_http.send(null);
        }
    };



    document.getElementById("provincia").addEventListener("change", cargarMunicipios , true);

};


/*
function cargaMunicipios() {
    var lista = document.getElementById("provincia");
    var provincia = lista.options[lista.selectedIndex].value;
    if(!isNaN(provincia)) {
        peticion = inicializa_xhr();
        if (peticion) {
            peticion.onreadystatechange = muestraMunicipios;
            peticion.open("POST", "http://localhost/RUTA_HASTA_ARCHIVO/cargaMunicipiosXML.php?nocache=" + Math.random(), true);
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            peticion.send("provincia=" + provincia);
        }
    }
}

function muestraMunicipios() {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            var lista = document.getElementById("municipio");
            var documento_xml = peticion.responseXML;

            var municipios = documento_xml.getElementsByTagName("municipios")[0];
            var losMunicipios = municipios.getElementsByTagName("municipio");

            // Borrar elementos anteriores
            lista.options.length = 0;

            // Se utiliza el método de crear elementos Option() y añadirlos a la lista
            for(i=0; i<losMunicipios.length; i++) {
                var codigo = losMunicipios[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                var nombre = losMunicipios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                lista.options[i] = new Option(nombre, codigo);
            }
        }
    }
}
*/
