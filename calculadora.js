let operaciones = prompt("Ingrese qe operacion desea usar");

 let num1 = Number(prompt("Ingrese un numero"));
 let num2 = Number (prompt("Ingrese otro numero"));
let resultado;

switch (operaciones) {
    case 'suma': resultado = num1 + num2;
                console.log("El resulttado es: " + resultado);
    break;
    case 'resta':
        resultado = num1 - num2;
                console.log("El resulttado es: " + resultado);
                break;
    case 'multiplicacion':resultado = num1 * num2;
    console.log("El resulttado es: " + resultado);
        break;
    case 'divicion':resultado = num1 / num2;
    console.log("El resulttado es: " + resultado);
        break;
        
       

    default: console.log("Ingrese las variables");
       
}