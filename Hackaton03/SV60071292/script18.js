function ejercicio18(){
// Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

// $10. Si se compran unidades separadas hasta 9.

// $8. Si se compran entre 10 unidades hasta 99.

// $7. Entre 100 y 499 unidades.

// $6. Para mas de 500 unidades.

// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

// Definir variables
let cantidadCDs, precioUnitario, precioTotal, gananciaVendedor;

// Solicitar al usuario ingresar la cantidad de CDs a vender
console.log("Ingrese la cantidad de CDs a vender: ");
cantidadCDs = parseInt(prompt(""));

// Determinar el precio unitario según la cantidad
if (cantidadCDs <= 9) {
  precioUnitario = 10;
} else if (cantidadCDs <= 99) {
  precioUnitario = 8;
} else if (cantidadCDs <= 499) {
  precioUnitario = 7;
} else {
  precioUnitario = 6;
}

// Calcular el precio total para el cliente
precioTotal = cantidadCDs * precioUnitario;

// Calcular la ganancia para el vendedor
gananciaVendedor = 0.0825 * precioTotal;

// Mostrar resultados
console.log("Precio total para el cliente: $" + precioTotal);
console.log("Ganancia para el vendedor: $" + gananciaVendedor);
}