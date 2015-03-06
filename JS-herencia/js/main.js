function Persona (nombre, edad, genero){
    this.nombre = nombre || "Sin definir";
    this.edad = edad || "Sin definir";
    this.genero = genero || "Sin definir";
    this.obtDetalles = function (){ document.writeln("Nombre:" + nombre);
                                    document.writeln("<br/>");
                                    document.writeln("Edad:" + edad);
                                    document.writeln("<br/>");
                                    document.writeln("Genero:" + genero);
                                    document.writeln("<br/>");
                                  }
}

function Estudiante (nombre, edad, genero, curso, grupo){
    this.base = Persona;
    this.base(nombre, edad, genero);
    this.curso = curso || "Sin definir";
    this.grupo = grupo || "Sin definir";
    this.registrar = function (){ document.writeln("Registrado " + this.curso +" "+ this.grupo);document.writeln("<br/>");}
}
Estudiante.prototype = new Persona;

function Profesor (nombre, edad, genero, asignatura, nivel){
    this.base = Persona;
    this.base(nombre, edad, genero);
    this.asignatura = asignatura || "Sin definir";
    this.nivel = nivel || "Sin definir";
    this.asignar = function (){ document.writeln("Asignado a " + this.asignatura +" "+ this.nivel);document.writeln("<br/>");}
}
Profesor.prototype = new Persona;

var marcos = new Persona ("Marcos","32","Masculino");
marcos.obtDetalles();

var asier = new Profesor ("Asier", "XX","Masculino","Javascript Herencia","Nivel 2");
asier.obtDetalles();
asier.asignar();

var pepe = new Estudiante ("Pepe", "21", "Masculino","Javascript","A");
pepe.registrar();

