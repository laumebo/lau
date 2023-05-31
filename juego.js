function adivinarNumero(){
    // Generar un numero aleatorio entre 1 y 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    // Obtener el numero ingresado por un usuario
    const numeroIngresado = parseInt(document.getElementById('numero').value);

    // Verificar si el numero es correcto, mayor o menor
    if (numeroIngresado === numeroAleatorio){
        document.getElementById('resultado').textContent = '¡Adivinaste! el numero era ' + numeroAleatorio;
    } else if (numeroIngresado < numeroAleatorio) {
        document.getElementById('resultado').textContent = 'Intenta con un numero mas grande';
    } else{
        document.getElementById('resultado').textContent = 'Intenta con un numero mas pequeño';
    }
}