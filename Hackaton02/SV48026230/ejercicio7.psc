Proceso ejercicio7
	Definir tipoMembresia Como Caracter
    Definir descuento Como Real
    Definir precioSinDescuento, precioConDescuento Como Real
	
    Escribir "Ingrese el tipo de membresía del cliente (A, B o C):"
    Leer tipoMembresia
	
    Escribir "Ingrese el precio sin descuento del helado:"
    Leer precioSinDescuento
	
    Segun tipoMembresia
        Caso "A", "a":
            descuento <- 10
        Caso "B", "b":
            descuento <- 15
        Caso "C", "c":
            descuento <- 20
        Defecto:
            descuento <- 0
            Escribir "Tipo de membresía no válida."
    FinSegun
	
    Si descuento > 0 Entonces
        precioConDescuento <- precioSinDescuento - (precioSinDescuento * descuento / 100)
        Escribir "Se aplicó un descuento del ", descuento, "%."
        Escribir "El precio con descuento es: $", precioConDescuento
    Sino
        Escribir "No se aplicó ningún descuento."
		FinSi
	FinProceso
