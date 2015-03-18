$(document).ready(function(){
    "use strict";

    var dragSrcEl="";
    console.log("Document ready");

    /* ponemos a todos los productos el atributo draggable como true */
    $(".product").attr("draggable", true);

    function handleDragStart(){
        console.log("start");
        $("#drop").css("opacity", 1);
    }

    /*function handleDrag(e){
        e.preventDefault();
        console.log("drag");
    }*/

    function handleDragEnter(e){
        e.preventDefault();
        console.log("enter");
    }

    function handleDragOver(e){
        e.preventDefault();
        console.log("over");
    }

    function handleDragLeave(e){
        e.preventDefault();
        console.log("leave");
    }

    function handleDrop(e){
        e.preventDefault();
        console.log("drop");

    }

    function handleDragEnd(e){
        e.preventDefault();
        console.log("end");
        $("#drop").css("opacity", 0.4);
    }

    var prods = document.querySelectorAll('.product');
    [].forEach.call(prods, function(prod) {
        prod.addEventListener('dragstart', handleDragStart, false);
        //prod.addEventListener('drag', handleDrag, false);
        prod.addEventListener('dragend', handleDragEnd, false);
    });

    document.getElementById("drop").addEventListener('dragenter', handleDragEnter, false);
    document.getElementById("drop").addEventListener('dragover', handleDragOver, false);
    document.getElementById("drop").addEventListener('dragleave', handleDragLeave, false);
    document.getElementById("drop").addEventListener('drop', handleDrop, false);


});
