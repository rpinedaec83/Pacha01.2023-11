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
        Escribir "Se aplicó un descuento del ", descuento, "% sobre el total a pagar."
    Sino
        Escribir "No se aplicó ningún descuento."
    FinSi
	
    Escribir "El total a pagar es: $", totalAPagar
FinAlgoritmo