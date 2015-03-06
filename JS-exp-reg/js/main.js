var regexp_fecha = /(\d{2}\/\d{2}\/\d{4}){1}/;
var fecha= "Nací el 05/04/1982 en Donostia.";
console.log(regexp_fecha.test(fecha));



var regexp_mail = /^[a-zA-Z]+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

var mail = "mail@gmail.com";  //true
var mail1 = "mail1@gmail.com";  //true
var mail2 = "2mail@gmail.com";  //false
var mail3 = "mail-2@gmail.com"; //true
var mail4 = "mail@gmail.coma";  //false

console.log(regexp_mail.test(mail));
console.log(regexp_mail.test(mail1));
console.log(regexp_mail.test(mail2));
console.log(regexp_mail.test(mail3));
console.log(regexp_mail.test(mail4));


var regexphtml = /[<>&"]/g;

//var regexp_nombre =([a-zA-Z]+)\s([a-zA-Z]+);
var nombre = "John Smith";
var res = nombre.split(/\s/);
console.log(res[1]+", "+res[0]);


var script = "<p>lorem<script>alert(\"error\")</script>";
//var regexp_script = /<script\w>/g;
var res = script.test(regexp_script);
console.log (res);
