Proceso Ejercicio7
	
//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membres�a dependiendo de su tipo, s�lo existen tres tipos de membres�a, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	
//	Tipo A 10% de descuento
//	Tipo B 15% de descuento
//	Tipo C 20% de descuento
	
		// Definir variables
		Definir tipoMembresia Como Caracter
		Definir totalCompra, descuento, totalConDescuento Como Real
		
		// Solicitar al usuario ingresar el tipo de membres�a
		Escribir "Ingrese el tipo de membres�a (A, B o C): "
		Leer tipoMembresia
		
		// Solicitar al usuario ingresar el total de la compra
		Escribir "Ingrese el total de la compra: "
		Leer totalCompra
		
		// Calcular el descuento seg�n el tipo de membres�a
		Segun tipoMembresia Hacer
				Caso "A":
				descuento <- 0.10 * totalCompra
				Caso "B":
				descuento <- 0.15 * totalCompra
				Caso "C":
				descuento <- 0.20 * totalCompra
				Otro:
					Escribir "Tipo de membres�a no v�lido."
		FinSegun

// Calcular el total con descuento
totalConDescuento <- totalCompra - descuento

// Mostrar los resultados
Escribir "Total de la compra: $", totalCompra
Escribir "Descuento aplicado: $", descuento
Escribir "Total con descuento: $", totalConDescuento

FinProceso
