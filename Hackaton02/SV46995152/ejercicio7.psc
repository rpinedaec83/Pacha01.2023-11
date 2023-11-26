//Hacer un algoritmo en Pseint para una tienda de helado que da un 
//descuento por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
//Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
Proceso ejercicio7
	escribir "ingrese el tipo de membresia:"
	leer tipo_membresia
	si(tipo_membresia = "A")
		Entonces
		descuento = 0.1
	sino
		si(tipo_membresia = "B")
			Entonces
			descuento = 0.15
		SiNo
			descuento = 0.2
		FinSi
	FinSi
	escribir "el tipo de membresia " + tipo_membresia
	Escribir  "el descuento aplicable es de:" descuento
FinProceso