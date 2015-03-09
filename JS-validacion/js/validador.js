window.onload = function() {
    document.getElementById("registro").addEventListener("submit", validar, false);


    function validar(e){
        e.preventDefault();
        var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

        //controlar el campo de nombre (obligatorio y con texto)
        var nombre = document.getElementById("registro_nombre");

        //controlar el campo de apellido (con texto)
        var apellido = document.getElementById("registro_apellido");

        //controlar el campo de mail (obligatorio y con formato mail)
        var email = document.getElementById("registro_email");
        if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
            console.log("El email introducido no es correcto")
            return false;
        }

        //controlar el campo de password( obligatorio y con  una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito)
        var password = document.getElementById("registro_password");
        if ((password.value).length<6){
            console.log("El password debe tener 6 caracteres o mas");
            return false;
        }

        //controlar el campo de comentarios (no debe exceder los 50 caracteres)
        var comentario = document.getElementById("registro_comentarios");
        if( (comentario.value).length > 5 ) {
            console.log("Comentario demasiado largo");
            return false;
        }

        //controlar que esta checkeado el checkbox de aceptar las condiciones.
        var condiciones = document.getElementById("registro_condiciones");
        if( !condiciones.checked ) {
            console.log("No hay aceptado las condiciones");
            return false;
        }
    }
}







