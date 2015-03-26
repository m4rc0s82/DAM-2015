$(document).ready(function(){
    "use strict";
    /*
    $(window).on("orientationchange", function( event ) {
        $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
    });


    $(".caja").on("tap", tapHandler );
    function tapHandler(e){
        $(e.target).addClass("tap");
    }

    $(".caja").on("taphold", tapholdHandler );
    function tapholdHandler(e){
        $(e.target).addClass("double");
    }

    $(".caja").on("swiperight", swiperightHandler );
    function swiperightHandler(e){
        $(e.target).addClass("fright");
    }

    $(".caja").on("swipeleft", swipeleftHandler );
    function swipeleftHandler(e){
        $(e.target).removeClass("fright");
    }

    // The same for the navigating to the previous page
    $(document).on("swipeleft", ".ui-page", function(e) {
        var next = $(this).jqmData("next");
        if (next && (e.target === $(this)[0])){
            navnext(next);
        }
    });

    $(document).on("swiperight", ".ui-page", function(e) {
        var prev = $(this).jqmData("prev");
        if (prev && (e.target === $(this)[0])){
            navprev(prev);
        }
    });

    function navnext(next) {
        $(":mobile-pagecontainer").pagecontainer("change", "index.html#"+ next, {
            transition: "slide"
        });
    }

    function navprev(prev) {
        $(":mobile-pagecontainer").pagecontainer("change", "index.html#"+ prev, {
            transition: "slide",
            reverse: true
        });
    }
    */


    document.addEventListener("deviceready",onDeviceReady,false);



    function onDeviceReady() {
        console.log("ON");
    }

    function onSuccess(imageData) {
        var image = document.getElementById('image');
        //console.log(imageData);
        image.src = "data:image/jpeg;base64," + imageData;
    }


    function onFail(message) {
        console.log("Error");
    }


    function capturarFoto(){
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                        destinationType: Camera.DestinationType.DATA_URL });
    }


    $("#sacarFoto").on("click", capturarFoto);
});
