var APP = APP || {};
$(document).ready(function () {
    "use strict";
    APP.net = (function () {
        console.log("net cargado");
        var serverUrl = "php/getcards.php";

        var peticion = function(cnt,cb) {
            (cnt !== null || cnt !== 0) ? cnt : 1 ;
            $.ajax({

                url: serverUrl,
                data: {
                    numero: cnt
                },
                type: 'POST',
                dataType: 'json',
                success: function (json) {
//                    console.log(json);
//                    console.log("callback:" + cb);
                    cb(json);
                },


                error: function (jqXHR, status, error) {
                    console.error('Disculpe, existió un problema');
                }


            });
        };

        return{
            peticion : peticion
        };

    })();
});
