//obeto global.
var APP = APP || {};

//esperar a que el DOM este cargado.
$(document).ready(function(){
    //Usar "use strict".
    "use strict";

    // Iniciaremos las variables privadas que sean necesarias.
    var html_nuevo = "";
    var html_click = "";
    var cont = 0;
    var cuantos = 0;

    $('#carga').on("click", function(){
        var columnas = $('#columnas').val();
        var filas = $('#filas').val();
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

        // Necesitaremos una o varias funcion(es) que controle(n) el paso del tiempo.
        /*function cargarColor(){
            $(".imagen").each(function() {
                var timer = $(this).attr("data-timer");
                var color = $(this).attr("data-color");
                setTimeout(function() {
                    $(this).addClass(color);
                }, timer * 1000);
            });
        }*/

        function cargarColor(){
            cont = cont +1000;
            $("img").each(function() {
                var timer = $(this).attr("data-timer");
                var color = $(this).attr("data-color");
                var nombre = $(this).attr("data-nombre");
                var animal = $(this).attr("data-animal");

                if ((timer * 1000 == cont) && !($(this).hasClass(color))){
                    $(this).addClass(color);
                    $(this).on("click",function(){
                        var $log = $("#eliminados");
                        $log.append("<p style='color:"+color+"'>Has hecho click en el "+ animal + " llamado "+ nombre +" de color "+color+"</p>");
                        $(this).addClass("hidden");
                    });
                }
            });
        }

        function ejecutarCarga(){
            var total = $("img").size();
            var cuantos = 0;
            if (cuantos <= total){
                var miIntervalo = setInterval(cargarColor, 1000);
            }else{
                clearInterval(miIntervalo);
            }

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
        }

        ejecutarCarga();


    });





    // Necesitaremos añadir los eventos necesarios en el momento adecuado.

    // Necesitaremos las funciones de callback para los eventos.

    // Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.

    // Necesitaremos una funcion que controle el final del juego.

    // Necesitaremos una funcion que controle la lista de eliminados.

    // Cualquier otra funcion que sea necesaria.


});




