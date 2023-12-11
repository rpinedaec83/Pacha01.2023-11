//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo 
//de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
Proceso ejercicio7
	Definir tipoMembresia Como Caracter
    Definir descuento Como Real
    Definir precioSinDescuento, precioConDescuento Como Real
	
    Escribir "Ingrese el tipo de membres�a del cliente (A, B o C):"
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
            Escribir "Tipo de membres�a no v�lida."
    FinSegun
	
    Si descuento > 0 Entonces
        precioConDescuento <- precioSinDescuento - (precioSinDescuento * descuento / 100)
        Escribir "Se aplic� un descuento del ", descuento, "%."
        Escribir "El precio con descuento es: $", precioConDescuento
    Sino
        Escribir "No se aplic� ning�n descuento."
		FinSi
	FinProceso
