var APP = APP || {};
$(document).ready(function () {
    "use strict";
    console.log("main cargado");

    var generalTimer = 0;
    var timerInterval;
    var cartas;

    var obtenerCartas = function (datos) {
        var jsonObj = datos;
        cartas = [];
        for (var i = 0; i < jsonObj.length; i++) {
            var carta = crearCarta(jsonObj[i].animal, jsonObj[i].color, jsonObj[i].nombre, jsonObj[i].timer);
            cartas.push(carta);
        }
        $('#contenedor').empty().append(cartas);
        timerInterval = setInterval(addSecond, 1000);
    };

    var addSecond = function () {
        var listaCartas = cartas;
        for (var i = 0; i < listaCartas.length; i++) {
            if ($(listaCartas[i]).data('timer') < generalTimer) {

                $(listaCartas[i]).addClass(listaCartas[i].data('color'));
                $(listaCartas[i]).on("click", clickDeCarta);
                listaCartas.splice(i, 1);
            }
        }

        if (listaCartas.length > 0) {
            console.log("Siguiente intervalo");
            generalTimer++;
        } else {
            console.log("Fin del intervalo");
            resetTimer();
        }
    }

    var resetTimer = function () {
        clearInterval(timerInterval);
        generalTimer = 0;
    }

    var crearCarta = function (animal, color, nombre, timer) {
        var card = ($('<img/>', {
            'data-name': nombre,
            'data-animal': (animal === "cat") ? "gato" : "perro",
            'data-color': color,
            'data-timer': timer,
            src: "img/" + animal + ".png"
        }));
        card.css({
            "width": (100 / $('#columnas').val()) + "%"
        });
        return card;
    };


    var clickDeCarta = function () {
        var theClass = $(this).attr('class') + "Txt";
        var ele = $('<p/>', {
            'class': theClass
        });
        var d = new Date();
        var time = ((d.getHours().toString().length === 1) ? "0" + d.getHours() : d.getHours()) + ":" +
                   ((d.getMinutes().toString().length === 1) ? "0" + d.getMinutes() : d.getMinutes()) + ":" +
                   ((d.getSeconds().toString().length === 1) ? "0" + d.getSeconds() : d.getSeconds());

        ele.text("[" + time + "] " + $(this).data('name') + ". El " + $(this).data('animal') + " " + traducirColor($(this).data('color')));

        $('#eliminados').append(ele);

        $("#eliminados").animate({
            scrollTop: $('#eliminados')[0].scrollHeight
        }, 1000);

        if ($(this).siblings().length === 0) {
            $('#botones').children().last().removeClass('hidden');
        }
        this.remove();
    }

    var traducirColor = function (s) {
        var r;
        switch (s) {
        case "red":
            r = "rojo";
            break;
        case "green":
            r = "verde";
            break;
        case "blue":
            r = "azul";
            break;
        case "yellow":
            r = "amarillo";
            break;
        case "purple":
            r = "morado";
            break;
        case "orange":
            r = "naranja";
            break;
        case "black":
            r = "negro";
            break;
        case "pink":
            r = "rosa";
            break;
        }
        return r;
    }

    var realizarPeticion = function () {
        var cantidad = ($('#filas').val() * $('#columnas').val());
        console.log("CANTIDAD: " + cantidad);
        if (cantidad > 0) {
            $('#botones').children().addClass('hidden').end().siblings().removeClass('hidden');
            APP.net.peticion(cantidad, obtenerCartas);
        }
    }

    $('#carga').on('click', realizarPeticion);
    $('#restart').on('click', realizarPeticion);

});
