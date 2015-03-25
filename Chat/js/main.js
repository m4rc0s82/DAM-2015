$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var $status = $("#status");
    var $input = $("#input");
    var $content = $("#content");

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    var cont = 0;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.websockets) {
        console.log("ok");
    }else{
        console.log("ko");
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;


    // Abrir la conexion con ws://10.70.1.111:1337
    var socket = new WebSocket('ws://10.70.1.111:1337');
    socket.onopen  = function(){
        console.log("Conectado");
        $input.prop("disabled", false);
        // 1. Al abrir la conexión, solicitar el nick.
        $status.html("Conectado");


        $(document).keypress(function(e) {
            if(e.which == 13) {
                cont++;
                if (cont===1){
                    myName = $input.val();
                    $input.val("");
                    $status.html(myName);
                }else{
                    myName = $input.val();
                    socket.send(myName);
                    $input.val("");
                }
            }
            console.log(cont);
        });


    };


    // 2. Controlar posibles errores del servidor.
    // 3. Escuchar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});
