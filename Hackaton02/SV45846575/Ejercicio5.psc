//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso Ejercicio5
	definir totalcompra, precio, pordes, descuento, totalpagar como real;
	definir cantidad como entero;
	definir zapatos como caracter;
	escribir "Ingrese el precio de los zapatos"
	leer precio;
	escribir "Ingrese la cantidad comprada de zapatos"
	Leer cantidad;
	totalcompra <- precio * cantidad
	escribir " El total de la compra es: s/", totalcompra;
	si cantidad > 10 Entonces
		pordes <- 10;
		si cantidad > 20 Entonces
			pordes <-20;
			si cantidad > 30 Entonces
				pordes <-40;
	
			FinSi
		FinSi
	FinSi
	escribir " El porcentaje de descuento es:", pordes,"%";
descuento <- totalcompra * pordes /100;
escribir "El total de descuento es:", descuento;
totalpagar <- totalcompra -descuento;
escribir "El total a pagar es:s/",totalpagar;
FinProceso
