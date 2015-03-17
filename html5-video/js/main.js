$(document).ready(function(){
    "use strict";
    var $video = document.getElementById("myVideo");
    $("#iniciar").on("click", function(e){
        e.preventDefault();
        console.log("reproducir");
        $video.play();
    });

    $("#pausa").on("click", function(e){
        e.preventDefault();
        console.log("pausa");
        $video.pause();
    });

    $("#parar").on("click", function(e){
        e.preventDefault();
        console.log("parar");
        console.log($video.currentTime);
        $video.currentTime = 0;
        $video.pause();
    });

    $("#avanzar").on("click", function(e){
        e.preventDefault();
        console.log("avanzar");
        $video.currentTime += 10;

    });

    $("#retroceder").on("click", function(e){
        e.preventDefault();
        console.log("retroceder");
        $video.currentTime -= 10;
    });

    $("#inicio").on("click", function(e){
        e.preventDefault();
        console.log("inicio");
        $video.currentTime = 0;
        $video.pause();
    });

    $("#fin").on("click", function(e){
        e.preventDefault();
        console.log("fin");
        $video.currentTime = $video.duration;
        $video.pause();
    });

    $("#pantalla_completa").on("click", function(e){
        e.preventDefault();
        console.log("pantalla completa");
        $video.webkitRequestFullScreen();
    });


    $("#volumen").on("change",function(e){
        e.preventDefault();
        $video.volume = e.target.value;
    });



    function progreso() {
        var porcentaje = Math.floor((100 /  $video.duration) * $video.currentTime);
        $("#progreso").val(porcentaje);
    }

    $video.addEventListener("timeupdate", progreso, true);


    $("#lista_videos").on("change",function(e){
        e.preventDefault();
        var new_video = $(this).val();
        $video.setAttribute("src",new_video+".mp4");
    });
});
