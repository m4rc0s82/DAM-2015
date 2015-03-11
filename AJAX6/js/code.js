window.onload = function(){
    "use strict";

    /* variables */
    var READY_STATE_COMPLETE = 4;
    var peticion_http = null;

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
                var lista_provincias = document.getElementById("provincia");
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


    var cargarMunicipios = function (){
        var lista = document.getElementById("provincia");
        var idProvincia = lista.options[lista.selectedIndex].value;
        if(!isNaN(idProvincia)) {
            peticion_http = inicializa_xhr();
            if(peticion_http) {
                peticion_http.onreadystatechange = mostrarMunicipios;
                peticion_http.open("POST", "http://localhost/DAM-2015/AJAX6/server/cargaMunicipiosXML.php?nocache="+Math.random(), true);
                peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                peticion_http.send("provincia=" + idProvincia);
            }
        }
    };

    /* funcion a la que se llama para cargar los municipios) */
    var mostrarMunicipios = function() {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {
            if (peticion_http.status == 200) {
                var lista_municipios = document.getElementById("municipio");
                var documento_xml = peticion_http.responseXML;
                console.log(documento_xml);
                var municipios = documento_xml.getElementsByTagName("municipios")[0];
                var losMunicipios = municipios.getElementsByTagName("municipio");

                // borramos los anteriores
                lista_municipios.options.length = 0;

                // se añaden los elemntos al select de municipios

                for(var i=0; i<losMunicipios.length; i++) {
                    var codigo = losMunicipios[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                    var nombre = losMunicipios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                    lista_municipios.options[i] = new Option(nombre, codigo);
                }

            }
        }
    };



    document.getElementById("provincia").addEventListener("change", cargarMunicipios , true);

};

