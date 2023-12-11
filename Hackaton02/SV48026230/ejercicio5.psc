//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
// esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
// y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
Algoritmo  ejercicio5
	Definir cantidadZapatos, precioUnitario, totalAPagar Como Real
    Definir descuento Como Entero
	
    precioUnitario <- 80  
	
    Escribir "Ingrese la cantidad de zapatos comprados:"
    Leer cantidadZapatos
	
    totalAPagar <- cantidadZapatos * precioUnitario  
	
    Si cantidadZapatos > 30 Entonces
        descuento <- 40
    FinSi
	
    Si cantidadZapatos > 20 y cantidadZapatos <= 30 Entonces
        descuento <- 20
    FinSi
	
    Si cantidadZapatos > 10 y cantidadZapatos <= 20 Entonces
        descuento <- 10
    FinSi
	
    Si descuento > 0 Entonces
        totalAPagar <- totalAPagar - (totalAPagar * descuento / 100)  
        Escribir "Se aplic� un descuento del ", descuento, "% sobre el total a pagar."
    Sino
        Escribir "No se aplic� ning�n descuento."
    FinSi
	
    Escribir "El total a pagar es: $", totalAPagar
FinAlgoritmo