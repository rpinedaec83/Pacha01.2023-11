//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento 
//por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

Proceso Ejercicio7
	letra = ''
	Escribir "Ingrese el tipo de membresia: "
	Leer letra
	
	si letra = "A" o letra = "a" Entonces
		descuento = 10
		Escribir "Usted obtiene un descuento de ",descuento,"% de sus compras"
	SiNo
		si letra = "B" o letra = "b" Entonces
			descuento = 15
			Escribir "Usted obtiene un descuento de ",descuento,"% de sus compras"
		SiNo
			si letra = "C" o letra = "c" Entonces
				descuento = 20
				Escribir "Usted obtiene un descuento de ",descuento,"% de sus compras"
			SiNo
				descuento = 0
				Escribir "Usted no tienen ninguna membresia "
				
			FinSi
		FinSi
	FinSi
FinProceso
