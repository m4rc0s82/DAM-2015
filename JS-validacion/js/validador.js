window.onload = function() {
    document.getElementById("registro").addEventListener("submit", validar, false);


    function validar(e){
        e.preventDefault();

        //controlar el campo de nombre (obligatorio y con texto)
        var elem = document.getElementById("registro_nombre");
        var nombre = document.getElementById("registro_nombre").value;
        if (!(nombre !== null && nombre.length > 0 && !/\s+/.test(nombre))){
            elem.style.backgroundColor = "red";
            console.log("El nombre es un campo obligatorio");
            var obj = document.createElement("div");
            var msg = document.createTextNode("El nombre es un campo obligatorio");
            obj.appendChild(msg);
            elem.parentNode.appendChild(obj);
            //return false;
        }


        //controlar el campo de mail (obligatorio y con formato mail)
        var elem = document.getElementById("registro_email");
        var email = document.getElementById("registro_email").value;
        if( !(/^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/.test(email)) ) {
            elem.style.backgroundColor = "red";
            console.log("El email introducido no es correcto");
            var obj = document.createElement("div");
            var msg = document.createTextNode("El email introducido no es correcto");
            obj.appendChild(msg);
            elem.parentNode.appendChild(obj);
            //return false;
        }

        //controlar el campo de password( obligatorio y con  una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito)
        var elem = document.getElementById("registro_password");
        var password = document.getElementById("registro_password").value;
        if (!(/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && password.length > 5 && password !== null && !/\s+/.test(password))){
            elem.style.backgroundColor = "red";
            console.log("El password debe tener 6 caracteres o mas y contener al menos una letra minúscula, una letra mayúscula y un dígito");
            var obj = document.createElement("div");
            var msg = document.createTextNode("El password debe tener 6 caracteres o mas y contener al menos una letra minúscula, una letra mayúscula y un dígito");
            obj.appendChild(msg);
            elem.parentNode.appendChild(obj);
            //return false;
        }

        //controlar el campo de comentarios (no debe exceder los 50 caracteres)
        var elem = document.getElementById("registro_comentarios");
        var comentario = document.getElementById("registro_comentarios").value;
        if( (comentario).length > 5 ) {
            elem.style.backgroundColor = "red";
            console.log("Comentario demasiado largo");
            var obj = document.createElement("div");
            var msg = document.createTextNode("Comentario demasiado largo");
            obj.appendChild(msg);
            elem.parentNode.appendChild(obj);
            //return false;
        }

        //controlar que esta checkeado el checkbox de aceptar las condiciones.
        var elem = document.getElementById("registro_condiciones");
        var condiciones = document.getElementById("registro_condiciones");
        if( !condiciones.checked ) {
            elem.nextSibling.style.color = "red";
            console.log("No hay aceptado las condiciones");
            var obj = document.createElement("div");
            var msg = document.createTextNode("No hay aceptado las condiciones");
            obj.appendChild(msg);
            elem.parentNode.appendChild(obj);
            //return false;
        }
    }
}







