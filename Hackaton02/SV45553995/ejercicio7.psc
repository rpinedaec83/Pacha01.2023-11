//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra 
//a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía,
//tipo A, tipo B y tipo C. Los descuentos son los siguientes:

//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Algoritmo detarea
	Definir compra, descuento Como Real
	Definir tipo Como Entero
	Escribir "Ingresa el total de la compra"
	leer compra
	Escribir "Ingresa una opcion"
	Escribir "1 = Tipo A"
	Escribir "2 = Tipo B"
	Escribir "3 = Tipo C"
	leer tipo
	si tipo == 1 Entonces
		descuento = compra * .10
	SiNo
		si tipo == 2 Entonces
			descuento = compra * .15
		SiNo
			si tipo == 3 Entonces
				descuento = compra * .20
			SiNo
				descuento = 0
			FinSi
		FinSi
	FinSi
	Escribir "El total a pagar es: $",compra - descuento
	Escribir "El descuento aplicado es: $",descuento
FinAlgoritmo