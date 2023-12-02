function ejercicio01()
{
    // Definir variable
let numer;

// Solicitar al usuario que ingrese un número de tres dígitos
numer = parseInt(prompt("Digite un numero de tres digitos"));

// Verificar si el número tiene tres dígitos
if (numer >= 100 && numer <= 999) {
    alert("El numero ingresado tiene tres digitos");
} else {
    alert("El numero ingresado no tiene tres digitos");
}
}