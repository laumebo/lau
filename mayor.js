//crea un programa por pamtalla que si erres mayor de 18 años te diga si ingresas de lo contrario no
var edad;

edad = prompt("introduce tu edad")

if (edad >= 18){
    document.write("puedes entrar, eres mayor de edad.");
} else {
    document.write("no puedes entrar, eres menor de edad.");
}