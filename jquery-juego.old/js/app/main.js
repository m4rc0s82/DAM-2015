//obeto global.
var APP = APP || {};

//esperar a que el DOM este cargado.
$(document).ready(function(){
    //Usar "use strict".
    "use strict";

    // Iniciaremos las variables privadas que sean necesarias.
    var html_nuevo = "";
    var cont = 0;
    var cuantos_eliminados = 0;
    var $log = $("#eliminados");

    $('#carga').on("click", function(){
        var columnas = $('#columnas').val();
        var filas = $('#filas').val();
        var cantidad = cantidad;
        // Necesitaremos las funciones de callback para los eventos.
        // Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.
        APP.net.peticion(columnas * filas, cb);

        /*mostramos las capas necesarias y ocultamos las otras */
        $("#botones").addClass("hidden");
        $("#contenedor").removeClass("hidden");
        $("#eliminados").removeClass("hidden");

        // Necesitaremos una funcion que cree objetos DOM de clase img y todos los atributos necesarios.
        function crearImagen (animal, color, nombre, timer){
            var imagen = "<img src='img/"+ animal +".png' data-animal='"+ animal +"' data-color='"+ color +"' data-nombre='"+ nombre +"' data-timer='"+ timer +"' width='"+(100/columnas)+"%'/>";
            return imagen;
        }


        // Necesitaremos una funcion que controle la lista de eliminados.
        function insertarEliminado( cuantos_eliminados, date, color, animal, nombre ){
            var seconds = date.getSeconds();
            var minutes = date.getMinutes();
            var hour = date.getHours();
            if (cuantos_eliminados>=6){
                $log.animate({scrollTop: '+=100px'});
            }
            $log.append("<p style='color:"+color+"'> ["+ hour +": "+ minutes +": "+ seconds+ "] Has hecho click en el "+ animal + " llamado "+ nombre +" de color "+color+"</p>");
        }

        function cargarColor(){
            cont = cont +1000;
            $("img").each(function() {
                var timer = $(this).attr("data-timer");
                var color = $(this).attr("data-color");
                var nombre = $(this).attr("data-nombre");
                var animal = $(this).attr("data-animal");

                if ((timer * 1000 == cont) && !($(this).hasClass(color))){
                    $(this).addClass(color);
                    // Necesitaremos añadir los eventos necesarios en el momento adecuado.
                    $(this).on("click",function(){
                        var date = new Date();
                        cuantos_eliminados++;
                        insertarEliminado(cuantos_eliminados,date, color, animal, nombre);
                        $(this).addClass("hidden");
                    });
                }
            });
        }

        function ejecutarCarga(){
                setInterval(cargarColor, 1000);
        }


        // Necesitaremos una funcion que agrege el array de img al DOM (no se realizaran cambios de DOM dentro de ningun bucle).
        function cb (json){
            var $contenido = $("#contenedor");
            for (var i=0; i<=json.length-1; i++){
                //console.log(json[i].animal);
                html_nuevo += crearImagen(json[i].animal,json[i].color,json[i].nombre,json[i].timer);
            }
            $contenido.html(html_nuevo);
            //console.log(html_nuevo);
            ejecutarCarga();
        }




    });






    // Necesitaremos una funcion que controle el final del juego.

    // Cualquier otra funcion que sea necesaria.


});




