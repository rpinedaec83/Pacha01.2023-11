//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento 
//por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres 
//tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//  Tipo A 10% de descuento
//	Tipo B 15% de descuento
//	Tipo C 20% de descuento
Proceso Ejercicio_7
	Escribir  "Ingrese su tipos de membresia (A, B, C):"
	Leer tipoMembresia
	
	Escribir "Ingrese el costo de la compra: "
	Leer costoCompra
	
	descuento = 0
	tipoDescuento = ""
	costoFinal = 0
	
	Segun tipoMembresia Hacer
		'A':
			tipoDescuento = "Tiene un descuento del 10%"
			descuento = costoCompra * 0.1
		'B':
			tipoDescuento = "Tiene un descuento del 15%"
			descuento = costoCompra * 0.15
		'C':
			tipoDescuento = "Tiene un descuento del 20%%"
			descuento = costoCompra * 0.2
		De Otro Modo:
			tipoDescuento = "Tipo de membresia invalida, no tiene descuento :C"
	Fin Segun
	
	costoFinal = costoCompra - descuento
	
	//Resultado: 
	Escribir "Es valor de su compra es: S/.", costoCompra
	Escribir "La membresia que ingresó es: ", tipoMembresia
	Escribir tipoDescuento, " = S/.", descuento
	Escribir "Costo final: ", costoFinal
	
FinProceso
