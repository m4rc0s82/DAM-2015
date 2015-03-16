 window.onload = function(){

    if (Modernizr.input.placeholder){
        console.log("YEP");
    } else {
        console.log("NOP");
    }

    Modernizr.load({
        test: Modernizr.input.placeholder,
        nope: [
            'placeholder_polyfill.min.css',
            'placeholder_polyfill.jquery.min.combo.js'
        ]
    });
};
