//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//				
//		Tipo A 10% de descuento
//		Tipo B 15% de descuento
//		Tipo C 20% de descuento
Proceso Ejercicio7

	Definir total, descuento, precio_D Como entero
	Definir tipo_M Como Caracter
		
	Escribir "Ingrese el tipo de membresia A, B o C: "
	Leer tipo_M
	Escribir "Ingrese el total de la compra: "
	Leer total
	Segun tipo_M Hacer
		caso 'A' :
			descuento = total * 0.10  
		caso 'B' :
			descuento = total * 0.15  
		caso 'C' :
			descuento = total * 0.20  
	Fin Segun
	precio_D = total - descuento
	Si descuento > 0 Entonces
		Escribir "Se aplico un descuento de $", descuento, " para la membresia tipo ", tipo_M
		Escribir "El precio a pagar es: $", precio_D
	Sino
		Escribir "No se aplico descuento. El precio a pagar es: $", total
	Fin Si
		
FinProceso
