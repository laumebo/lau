//función que calcula el precio total de un producto a partir de su precio básico:
 // Definición de la función
function calcularPrecioTotal(precioBasico) {
     var impuesto = precioBasico * 0.16; // Supongamos un impuesto del 16%
     var envio = 50; // Supongamos un costo fijo de envío de 50 unidades monetarias
     var precioTotal = precioBasico + impuesto + envio;

    return precioTotal;
    }
    var precioBase = 22000; 
    var precioFinal = calcularPrecioTotal(precioBase);
    document.write("El precio total del producto es: " + precioFinal);
    