//. 7.Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes
//con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
//Los descuentos son los siguientes:
// Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Algoritmo Ejercicio7
	
	definir precio,descuento Como Real;
	definir tipo Como Caracter;
	escribir "¿Buenos dias por favor digitar el precio del Helado?";
	leer precio;
	escribir "¿Que tipo de Membresia tiene ?(Tipo A ,B O C)";
	leer tipo;
	Segun tipo Hacer
		"A":
			descuento = (precio * 10)/100;
			precio = precio - descuento;
		"B":
			descuento = (precio * 15)/100;
			precio = precio - descuento;
		"C":
			descuento = (precio * 20)/100;
			precio = precio - descuento;
	Fin Segun
	escribir "El precio del Helado es ",precio," soles";
FinAlgoritmo
	